# AGENTS.md

本文件提供 Codex 或其他協作者處理本專案時必須遵守的工作規則。請先讀完 `README.md` 與本文件，再修改任何教材檔案。

## 專案目標

將統計學教材整理成可部署到 GitHub Pages 的互動式靜態 HTML 教材。正式網站只包含靜態 HTML、CSS、JavaScript 與必要資源；原始 PDF 不上傳 GitHub。

## 目前狀態

- 已完成首頁、第 1 章至第 13 章與附表。
- 後續章節需依第 1、2 章的編排規則延伸。
- 暫不加入即時雙語字幕、麥克風、語音辨識或其他媒體權限功能。
- 不要一次批次產生所有章節，除非使用者明確要求。

## 工作原則

1. 先閱讀 `README.md`、`AGENTS.md` 與既有章節 HTML。
2. 一次處理一章，避免大量 PDF 處理或批次生成全部章節。
3. 保護使用者現有修改，不要還原未經要求的變更。
4. 原始 PDF、`source/`、`textbook/` 不得加入 Git。
5. 正式網站必須能透過 GitHub Pages 開啟。
6. 不得把 localhost、Python server、`.bat` 或固定 port 當作正式使用方式。
7. 本機 server 只能短暫用於測試，測試後停止。
8. 不新增與教材無關的功能或裝飾。

## 章節 HTML 編排規則

後續章節必須延續第 1 章與第 2 章的版型與語氣。

每章至少包含：

- 可隱藏式左側目錄。
- 章節標題、學習重點與章節導覽。
- 依小節展開的教材說明。
- 每一小節的專有名詞解釋。
- 清楚分隔的範例。
- 練習或互動元件。
- 章末重點整理。

左側目錄：

- 必須可以顯示/隱藏。
- 小螢幕不可遮住主要內容。
- 首頁與章節頁導覽風格應一致。

教材語氣：

- 不要寫「PDF 說」、「PDF 安排」、「PDF 強調」、「從 PDF 展開」。
- PDF 只是來源格式，不是教材內容主詞。
- 改用「本節說明」、「本章介紹」、「下列範例」、「觀察資料」等自然教材語氣。
- 不要只列大綱；需補上概念說明、使用情境與例子。

專有名詞：

- 每一小節都要有專有名詞區。
- 依小節分組，例如 `1-1`、`1-2`、`2-1`、`2-2`。
- 使用項目符號，不使用數字編號。
- 圓點要小，不要把每個名詞再加外框。
- 英文專有名詞第一個字母大寫。
- 縮寫照慣例大寫，例如 `ANOVA`、`HTML`、`CSS`。

表格：

- 表格內中英文名詞格式必須一致。
- 中文一列，英文一列。
- 建議格式：

```html
<td>比例尺度<br><span class="muted">Ratio</span></td>
```

不要在同一章混用「中文 英文同列」與「中文英文分列」。

範例：

- 範例與範例之間要有明顯區隔。
- 使用既有樣式，例如 `example-box`、`example-item`。
- 不要讓多個範例接成一長段。

## 首頁規則

`html/index.html` 是網站首頁，應與章節頁保持一致：

- 使用相對路徑連到章節。
- 顯示目前已完成章節與後續章節狀態。
- 不連到不存在的正式頁面，除非明確標示尚未完成。
- 不使用 localhost 或本機 port。

根目錄 `index.html` 只負責導向 `html/index.html`。

## 共用 CSS/JS 規則

- 共用樣式放在 `assets/css/style.css`。
- 共用互動放在 `assets/js/`。
- 優先使用既有 class 與既有 JS 函式。
- 不為單一章節建立不必要的新框架。
- 不引入 React、Vue、Angular。
- 不新增麥克風、字幕、語音辨識相關程式碼。

正式 HTML/CSS/JS 不可包含：

```text
localhost
127.0.0.1
8000
8001
固定本機絕對路徑
```

## GitHub Pages 規則

正式部署使用 GitHub Actions。

Workflow：`.github/workflows/pages.yml`

正式部署 artifact 只應包含：

```text
index.html
.nojekyll
html/
assets/
```

不得部署：

```text
source/
textbook/
*.pdf
extracted/
scripts/
暫存檔
server PID/port/state 檔
```

`.gitignore` 必須持續排除 PDF 與本機暫存資料。

## 修改後檢查

修改章節後至少檢查：

- 首頁能連到新章節。
- 新章節 CSS/JS 路徑正確。
- 左側目錄可隱藏。
- 專有名詞格式符合規則。
- 表格中英文格式一致。
- 範例有清楚區隔。
- 沒有 `localhost`、`127.0.0.1`、`8000`、`8001`。
- 沒有把 PDF 或來源資料加入 Git。

必要時可短暫啟動本機 server 測試，但不要長時間執行。

## 建議 Git 流程

修改教材後只加入必要檔案：

```powershell
git add html assets README.md AGENTS.md README_GitHub_Pages.md
git commit -m "Update chapter content"
git push
```

避免直接使用 `git add .`，除非已確認沒有 `extracted/` 或其他暫存資料會被加入。
