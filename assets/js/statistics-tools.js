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

