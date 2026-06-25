# GitHub Pages 發布說明

本文件說明如何將目前的統計學互動式 HTML 教材發布到 GitHub Pages。

## 目前網站結構

正式部署只需要下列檔案與資料夾：

```text
index.html
.nojekyll
.gitignore
README.md
AGENTS.md
README_GitHub_Pages.md
html/
assets/
.github/workflows/pages.yml
```

不要上傳原始教材或大型檔案：

```text
source/
textbook/
*.pdf
```

目前 `.gitignore` 已排除上述檔案與資料夾。

## 發布流程

### 1. 建立 GitHub repository

到 GitHub 建立一個 repository，例如：

```text
ai-stat-html
```

建議先使用 public repository，GitHub Pages 設定最單純。

### 2. 初始化 Git

在 PowerShell 執行：

```powershell
cd D:\ai-stat
git init
git branch -M main
```

如果資料夾已經是 Git repository，則不需要重新 `git init`。

### 3. 加入要部署的檔案

建議明確加入正式網站需要的檔案，不要直接使用 `git add .`。

```powershell
git add index.html .nojekyll .gitignore README.md AGENTS.md README_GitHub_Pages.md html assets .github
git commit -m "Build GitHub Pages static textbook site"
```

### 4. 連接遠端 repository

把 `<你的帳號>` 與 `<repo名稱>` 換成實際名稱：

```powershell
git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
git push -u origin main
```

如果 remote 已存在，先用下列指令確認：

```powershell
git remote -v
```

### 5. 啟用 GitHub Pages

到 GitHub repository 頁面：

```text
Settings -> Pages
```

Source 選擇：

```text
GitHub Actions
```

本專案已提供 workflow：

```text
.github/workflows/pages.yml
```

推送到 `main` 或 `master` 後，GitHub Actions 會自動部署。

## 部署後網址

部署成功後，GitHub Pages 網址通常是：

```text
https://<你的帳號>.github.io/<repo名稱>/
```

根目錄 `index.html` 會自動導向：

```text
https://<你的帳號>.github.io/<repo名稱>/html/
```

## 部署後檢查清單

請確認以下網址可正常開啟：

```text
/
/html/
/html/chapter-01-introduction.html
/html/chapter-02-statistical-charts.html
```

請確認功能正常：

- 首頁章節連結可開啟。
- 第 1 章與第 2 章樣式正常載入。
- 顯示/隱藏目錄按鈕正常。
- 顯示答案按鈕正常。
- 第 2 章長條圖互動工具正常。
- 瀏覽器 console 沒有明顯錯誤。

## 重要注意事項

- 正式網站不可依賴 localhost、固定 port、Python server 或 `.bat` 檔。
- HTML、CSS、JavaScript 與圖片路徑都必須使用相對路徑。
- 原始 PDF 不可上傳到 GitHub。
- 若 PDF 曾經被 Git 追蹤過，需執行：

```powershell
git rm --cached -r source textbook
git rm --cached *.pdf
```

再重新 commit。

## 本機預覽

本機測試可以使用任一靜態檔案伺服器，例如：

```powershell
python -m http.server <port> --bind 127.0.0.1
```

本機預覽只是開發輔助，不是正式使用方式。

