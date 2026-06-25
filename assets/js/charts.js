function buildBarChart(inputId, outputId) {
  const input = document.getElementById(inputId);
  const output = document.getElementById(outputId);
  if (!input || !output) return;

  const items = input.value
    .split(/[\n,，、]+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length === 0) {
    output.innerHTML = "<p class=\"muted\">請先輸入類別資料。</p>";
    return;
  }

  const counts = new Map();
  items.forEach((item) => counts.set(item, (counts.get(item) || 0) + 1));
  const max = Math.max(...counts.values());
  const rows = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hant"))
    .map(([label, count]) => {
      const width = Math.max(6, (count / max) * 100);
      return `
        <div class="bar-row">
          <div class="bar-label">${label}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
          <div>${count}</div>
        </div>
      `;
    })
    .join("");

  output.innerHTML = rows;
}

