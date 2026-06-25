\# AGENTS.md



本專案目標是將繁體中文統計學 PDF 教材整理為每章一份互動式 HTML 教材。



\## 工作規則



1\. 先閱讀 README.md。

2\. 不要覆蓋或刪除 source/ 內的原始 PDF。

3\. 所有輸出使用繁體中文。

4\. 每章輸出一份獨立 HTML。

5\. 不要把 358 頁 PDF 直接轉成單一 HTML。

6\. 先建立第 1 章與第 2 章作為樣板，再擴充其他章。

7\. 每章必須包含：學習目標、核心觀念、公式說明、範例、練習題、答案與重點整理。

8\. 互動功能使用原生 HTML/CSS/JavaScript。

9\. 正式教材需可部署到 GitHub Pages，不可依賴 localhost、固定 port、Python server 或 `.bat` 啟動檔。

10\. 每次修改後必須驗證 HTML 是否可開啟、連結是否正常、JavaScript 是否有錯誤。

11\. 本機開發測試可啟動靜態檔案伺服器，但必須背景執行，不可讓 Codex 卡住。

12\. 原始 PDF 不可部署或上傳；需以 `.gitignore` 排除 `source/`、`textbook/` 與 `*.pdf`。



\## 章節編排準則



後續章節請以第 1 章目前版本作為樣板，遵守以下規則：



1\. 每章需有可顯示／隱藏的左側章內導覽，頁首放「顯示/隱藏目錄」按鈕。

2\. 不要用「PDF 的安排」、「PDF 強調」、「PDF 說」等語句；改用正常教材語氣，例如「本章首先說明……」。

3\. 核心內容需依原教材小節展開，不要只做大綱式摘要。

4\. 每一小節的專有名詞要集中放在「專有名詞解釋」區，並依小節分組。

5\. 專有名詞使用項目符號清單，不使用數字編號；不要加框線或底色，版面要乾淨。

6\. 專有名詞英文第一個字母要大寫，例如 `Statistics`、`Descriptive statistics`、`Qualitative / categorical`。

7\. 表格中的中英文專有名詞需分兩列呈現：中文一列，英文一列，例如 `<td>名目尺度<br><span class="muted">Nominal</span></td>`。

8\. 每個範例要獨立成區塊，範例與範例之間要有明確間距或分隔線。

9\. 範例應包含題目、解題想法、解題步驟、答案與教學提醒。

10\. 首頁 `index.html` 也要和章節頁一樣支援可顯示／隱藏左側導覽。

11\. 互動功能使用原生 HTML/CSS/JavaScript，並在修改後驗證靜態頁面、相對連結與 JS。



\## GitHub Pages 部署規則



1\. 正式入口為根目錄 `index.html`，並導向 `html/index.html`。

2\. 章節頁放在 `html/`，共用資源放在 `assets/`，所有連結與資源引用必須使用相對路徑。

3\. 不得在正式 HTML、CSS、JS 中寫死 `localhost`、`127.0.0.1` 或任何固定 port。

4\. 優先使用 GitHub Actions 部署，workflow 使用 `.github/workflows/pages.yml`。

5\. 部署 artifact 只包含 `index.html`、`.nojekyll`、`html/`、`assets/`。

6\. 目前不加入額外語音或媒體權限元件；維持純靜態教材互動。
