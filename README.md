# 統計學互動式 HTML 教材

本專案將統計學教材整理成可部署到 GitHub Pages 的靜態 HTML 教材。正式網站只包含首頁、章節 HTML、共用 CSS 與 JavaScript；原始 PDF 與中間萃取資料不納入 GitHub。

## 目前進度

- 已完成：首頁、第 1 章至第 13 章、附表、共用 CSS/JS、GitHub Pages workflow。
- 暫不處理：第 14 章以後內容，除非使用者明確指定。
- 暫不加入：即時雙語字幕、麥克風權限、語音辨識或其他媒體權限功能。

## 正式網站結構

```text
project-root/
├─ index.html
├─ .nojekyll
├─ .gitignore
├─ README.md
├─ AGENTS.md
├─ README_GitHub_Pages.md
├─ html/
│  ├─ index.html
│  ├─ chapter-01-introduction.html
│  ├─ chapter-02-statistical-charts.html
│  ├─ chapter-03-descriptive-measures.html
│  ├─ chapter-04-probability.html
│  ├─ chapter-05-discrete-random-variables.html
│  ├─ chapter-06-continuous-random-variables.html
│  ├─ chapter-07-sampling-distribution.html
│  ├─ chapter-08-estimation.html
│  ├─ chapter-09-one-sample-hypothesis.html
│  ├─ chapter-10-two-sample-hypothesis.html
│  ├─ chapter-11-anova.html
│  ├─ chapter-12-simple-regression.html
│  ├─ chapter-13-multiple-regression.html
│  └─ appendix-tables.html
├─ assets/
│  ├─ css/style.css
│  └─ js/
│     ├─ main.js
│     ├─ quiz.js
│     ├─ statistics-tools.js
│     └─ charts.js
└─ .github/workflows/pages.yml
```

正式部署只需要：`index.html`、`.nojekyll`、`html/`、`assets/`、`.github/workflows/pages.yml` 與說明文件。

不得提交或部署：`source/`、`textbook/`、`*.pdf`、暫存檔、本機 server PID/port/state 檔。

## 章節檔名

章節檔名使用固定格式：

```text
html/chapter-01-introduction.html
html/chapter-02-statistical-charts.html
html/chapter-03-descriptive-measures.html
html/chapter-04-probability.html
html/chapter-05-discrete-random-variables.html
html/chapter-06-continuous-random-variables.html
html/chapter-07-sampling-distribution.html
html/chapter-08-estimation.html
html/chapter-09-one-sample-hypothesis.html
html/chapter-10-two-sample-hypothesis.html
html/chapter-11-anova.html
html/chapter-12-simple-regression.html
html/chapter-13-multiple-regression.html
html/appendix-tables.html
```

不要使用中文檔名、空白、括號或不固定縮寫。

## 章節編排規則

後續章節需延續第 1 章與第 2 章的編排方式。每一章應包含：

- 可隱藏式左側目錄。
- 章節標題與學習重點。
- 依小節整理的內容說明。
- 每一小節的專有名詞解釋。
- 足夠的範例、練習與互動元件。
- 章末整理或重點回顧。

左側目錄規則：

- 左側目錄必須可顯示/隱藏。
- 不要讓目錄在小螢幕遮住主要內容。
- 首頁 `html/index.html` 也要沿用一致的導覽風格。

文字表述規則：

- 不要使用「從 PDF 展開」、「PDF 的安排」、「PDF 強調」等說法。
- PDF 只是來源檔案格式，不能當作教材內容說明的主詞。
- 應改寫成正常教材語氣，例如「本節說明」、「本章介紹」、「接著觀察」。
- 不要只做大綱式條列；每個概念都要有足夠說明。

專有名詞規則：

- 每一小節都要有專有名詞解釋。
- 專有名詞依小節分組，例如 `1-1`、`1-2`、`2-1`、`2-2`。
- 名詞清單使用小圓點或項目符號，不使用數字編號。
- 圓點要小，不需要再把每個名詞用外框包起來。
- 英文專有名詞第一個字母要大寫，例如 `Statistics`、`Descriptive statistics`、`Qualitative / categorical`。
- 英文縮寫或慣用大寫維持原樣，例如 `ANOVA`、`PDF`、`HTML`。

表格規則：

- 表格內中英文名詞必須一致呈現。
- 同一格內先放中文，下一列放英文。
- 英文放在 `<span class="muted">...</span>`。

範例：

```html
<td>名目尺度<br><span class="muted">Nominal</span></td>
```

不要混用「名目尺度 nominal」、「間斷資料 discrete」這類同列格式。

範例與練習規則：

- 範例之間要有清楚區隔。
- 使用既有樣式，例如 `example-box`、`example-item`、`practice-box`。
- 不要讓多個範例連在一起像同一段文字。
- 互動元件應服務教學目的，不要加入與統計學無關的動畫或裝飾。

## 共用前端規則

- 使用靜態 HTML、CSS、原生 JavaScript。
- 不引入 React、Vue、Angular 等框架。
- CSS 放在 `assets/css/style.css`。
- JS 放在 `assets/js/`。
- 章節 HTML 只能用相對路徑引用 CSS/JS。
- 不可寫死 `localhost`、`127.0.0.1`、`8000`、`8001` 或任何本機 server 位址。
- 正式網站必須能直接透過 GitHub Pages HTTPS 網址開啟。

## GitHub Pages

正式網址：

```text
https://leeyhdisney0702-design.github.io/ai-stat/
```

部署方式：

- 使用 GitHub Actions。
- Workflow 檔案：`.github/workflows/pages.yml`
- Source 設定：GitHub Actions。
- 每次 push 到 `main` 後自動部署。

根目錄 `index.html` 會導向 `html/index.html`，因此章節連結、CSS、JavaScript 都必須維持相對路徑。

## 本機開發

正式使用不依賴 localhost、Python server 或 `.bat` 啟動檔。若需要本機測試，可短暫執行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

測試網址：`http://127.0.0.1:8000/html/`。測試完成後應停止 server。不要把本機 server 當成正式使用方式。

## 發布前檢查

每次新增章節或修改內容後，至少檢查：

- `html/index.html` 有新增章節入口。
- 新章節 HTML 可以從首頁進入。
- 左側目錄可顯示/隱藏。
- 每一小節都有專有名詞解釋。
- 專有名詞英文首字母大寫。
- 表格內中英文格式一致。
- 範例之間有清楚區隔。
- CSS/JS 使用相對路徑。
- 沒有 `localhost`、`127.0.0.1`、`8000`、`8001`。
- 沒有加入 PDF、`source/`、`textbook/` 到 Git。
- GitHub Actions 部署成功。

## 後續章節工作方式

建議一次只處理一章：

1. 閱讀 README.md 與 AGENTS.md。
2. 確認目標章節與來源內容。
3. 依既有第 1、2 章版型建立新章節 HTML。
4. 補齊每一小節的說明、專有名詞、範例、練習。
5. 更新 `html/index.html` 的章節入口。
6. 檢查相對路徑與 GitHub Pages 部署條件。
7. commit 並 push。

建議提交：

```powershell
git add html assets README.md AGENTS.md README_GitHub_Pages.md
git commit -m "Add chapter XX interactive lesson"
git push
```
