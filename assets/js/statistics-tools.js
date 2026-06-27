function parseNumberList(raw) {
  return raw
    .split(/[\s,，、]+/)
    .map((item) => Number(item.trim()))
    .filter((value) => Number.isFinite(value));
}

function calculateMean(inputId, outputId) {
  const input = document.getElementById(inputId);
  const output = document.getElementById(outputId);
  if (!input || !output) return;
  const values = parseNumberList(input.value);
  if (values.length === 0) {
    output.textContent = "請輸入至少一個數值。";
    return;
  }
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  output.textContent = `平均數 = ${mean.toFixed(3)}，樣本數 = ${values.length}`;
}

function calculateVariance(inputId, outputId) {
  const input = document.getElementById(inputId);
  const output = document.getElementById(outputId);
  if (!input || !output) return;
  const values = parseNumberList(input.value);
  if (values.length < 2) {
    output.textContent = "計算樣本變異數至少需要兩個數值。";
    return;
  }
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (values.length - 1);
  output.textContent = `樣本變異數 = ${variance.toFixed(3)}，樣本標準差 = ${Math.sqrt(variance).toFixed(3)}`;
}

function calculateFiveNumber(inputId, outputId) {
  const input = document.getElementById(inputId);
  const output = document.getElementById(outputId);
  if (!input || !output) return;
  const values = parseNumberList(input.value).sort((a, b) => a - b);
  if (values.length === 0) {
    output.textContent = "請輸入至少一個數值。";
    return;
  }
  const medianOf = (items) => {
    const mid = Math.floor(items.length / 2);
    return items.length % 2 ? items[mid] : (items[mid - 1] + items[mid]) / 2;
  };
  const median = medianOf(values);
  const mid = Math.floor(values.length / 2);
  const lower = values.slice(0, mid);
  const upper = values.length % 2 ? values.slice(mid + 1) : values.slice(mid);
  const q1 = lower.length ? medianOf(lower) : values[0];
  const q3 = upper.length ? medianOf(upper) : values[values.length - 1];
  output.textContent = `最小值 = ${values[0]}，Q1 = ${q1}，中位數 = ${median}，Q3 = ${q3}，最大值 = ${values[values.length - 1]}，IQR = ${(q3 - q1).toFixed(3)}`;
}

function numberFromInput(id) {
  const input = document.getElementById(id);
  return input ? Number(input.value) : NaN;
}

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return NaN;
  let result = 1;
  for (let i = 2; i <= n; i += 1) result *= i;
  return result;
}

function combination(n, x) {
  if (!Number.isInteger(n) || !Number.isInteger(x) || x < 0 || x > n) return NaN;
  return factorial(n) / (factorial(x) * factorial(n - x));
}

function calculateBayes(p1Id, a1Id, p2Id, a2Id, outputId) {
  const p1 = numberFromInput(p1Id);
  const a1 = numberFromInput(a1Id);
  const p2 = numberFromInput(p2Id);
  const a2 = numberFromInput(a2Id);
  const output = document.getElementById(outputId);
  if (!output) return;
  const denominator = p1 * a1 + p2 * a2;
  if (![p1, a1, p2, a2, denominator].every(Number.isFinite) || denominator <= 0) {
    output.textContent = "請輸入有效機率，且分母必須大於 0。";
    return;
  }
  output.textContent = `P(B1|A) = ${(p1 * a1 / denominator).toFixed(4)}，P(A) = ${denominator.toFixed(4)}`;
}

function calculateBinomial(nId, pId, xId, outputId) {
  const n = numberFromInput(nId);
  const p = numberFromInput(pId);
  const x = numberFromInput(xId);
  const output = document.getElementById(outputId);
  if (!output) return;
  if (!Number.isInteger(n) || !Number.isInteger(x) || n < 0 || x < 0 || x > n || p < 0 || p > 1) {
    output.textContent = "請輸入 n 與 x 為有效整數，且 0 ≤ p ≤ 1。";
    return;
  }
  const probability = combination(n, x) * p ** x * (1 - p) ** (n - x);
  output.textContent = `P(X=${x}) = ${probability.toFixed(6)}，E(X) = ${(n * p).toFixed(3)}，Var(X) = ${(n * p * (1 - p)).toFixed(3)}`;
}

function calculateUniform(aId, bId, cId, dId, outputId) {
  const a = numberFromInput(aId);
  const b = numberFromInput(bId);
  const c = numberFromInput(cId);
  const d = numberFromInput(dId);
  const output = document.getElementById(outputId);
  if (!output) return;
  if (![a, b, c, d].every(Number.isFinite) || b <= a) {
    output.textContent = "請輸入有效區間，且 b 必須大於 a。";
    return;
  }
  const left = Math.max(a, Math.min(c, d));
  const right = Math.min(b, Math.max(c, d));
  const probability = Math.max(0, right - left) / (b - a);
  output.textContent = `P(${Math.min(c, d)}≤X≤${Math.max(c, d)}) = ${probability.toFixed(4)}，E(X) = ${((a + b) / 2).toFixed(3)}，Var(X) = ${(((b - a) ** 2) / 12).toFixed(3)}`;
}

function calculateZScore(xId, muId, sigmaId, outputId) {
  const x = numberFromInput(xId);
  const mu = numberFromInput(muId);
  const sigma = numberFromInput(sigmaId);
  const output = document.getElementById(outputId);
  if (!output) return;
  if (![x, mu, sigma].every(Number.isFinite) || sigma <= 0) {
    output.textContent = "請輸入有效數值，且標準差必須大於 0。";
    return;
  }
  output.textContent = `Z = ${(x - mu).toFixed(3)} / ${sigma.toFixed(3)} = ${((x - mu) / sigma).toFixed(3)}`;
}

function calculateStandardError(sigmaId, nId, outputId) {
  const sigma = numberFromInput(sigmaId);
  const n = numberFromInput(nId);
  const output = document.getElementById(outputId);
  if (!output) return;
  if (![sigma, n].every(Number.isFinite) || sigma < 0 || n <= 0) {
    output.textContent = "請輸入有效標準差與樣本數。";
    return;
  }
  output.textContent = `標準誤 = ${sigma.toFixed(3)} / √${n} = ${(sigma / Math.sqrt(n)).toFixed(4)}`;
}
