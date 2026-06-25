# GitHub Pages 發布說明

本專案已改為可部署到 GitHub Pages 的靜態網站。正式使用不需要 localhost、Python server、`.bat` 啟動檔或固定 port。

## 目前網站

Repository：

```text
https://github.com/leeyhdisney0702-design/ai-stat
```

GitHub Pages 網址：

```text
https://leeyhdisney0702-design.github.io/ai-stat/
```

## 部署方式

本專案使用 GitHub Actions 部署。

Workflow：

```text
.github/workflows/pages.yml
```

GitHub repository 設定：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

每次 push 到 `main` 後，GitHub Actions 會自動建立 `_site` artifact 並部署。

## 正式部署內容

部署 artifact 只包含：

```text
index.html
.nojekyll
html/
assets/
```

其中：

- 根目錄 `index.html` 會導向 `html/index.html`。
- `html/index.html` 是教材首頁。
- 章節頁放在 `html/`。
- CSS 與 JavaScript 放在 `assets/`。

## 不可上傳內容

以下內容不得納入 GitHub 或正式部署：

```text
source/
textbook/
*.pdf
extracted/
暫存檔
本機 server PID/port/state 檔
```

`.gitignore` 應持續排除上述項目。

## 更新教材後如何發布

1. 修改章節 HTML、首頁或共用 CSS/JS。
2. 檢查相對路徑與章節連結。
3. 加入必要檔案。
4. commit。
5. push 到 GitHub。
6. 到 Actions 確認部署成功。

建議指令：

```powershell
git status --short
git add html assets README.md AGENTS.md README_GitHub_Pages.md
git commit -m "Update chapter content"
git push
```

若有修改 workflow：

```powershell
git add .github/workflows/pages.yml
git commit -m "Update GitHub Pages workflow"
git push
```

避免直接使用：

```powershell
git add .
```

除非已確認沒有 `extracted/`、PDF 或其他暫存資料會被加入。

## 新增章節時的部署檢查

新增章節後請確認：

- 新章節檔案位於 `html/`。
- 檔名符合 `chapter-XX-topic.html`。
- `html/index.html` 有新增章節入口。
- 所有 CSS/JS 都使用相對路徑。
- 沒有 `localhost`、`127.0.0.1`、`8000`、`8001`。
- 表格中英文格式一致：中文一列、英文一列。
- 專有名詞依小節分組，使用項目符號。
- 範例之間有清楚分隔。
- GitHub Actions 顯示綠色勾勾。

## 本機測試

正式網站不依賴本機 server。若開發時需要短暫測試，可執行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

測試網址：

```text
http://127.0.0.1:8000/html/
```

測試完成後停止 server。不要把本機網址寫入 HTML、CSS、JS 或 README 作為正式連結。

## 常見問題

如果 Actions 顯示 `Get Pages site failed`：

- 到 `Settings -> Pages` 確認 Source 是 `GitHub Actions`。
- Workflow 的 `actions/configure-pages` 可保留 `enablement: true`。

如果網站開啟後樣式消失：

- 檢查 CSS 路徑是否為相對路徑。
- 確認 `assets/css/style.css` 有被部署。

如果章節連結失效：

- 檢查 `html/index.html` 的 href。
- 不要使用 Windows 絕對路徑。
- 不要使用 localhost 路徑。
