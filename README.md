\# 統計學互動式 HTML 教材專案



本專案目標是將一份完整的繁體中文《統計學講義》PDF，整理為「每章一份 HTML」的互動式教材。每份 HTML 應包含上課教材、重點整理、互動式範例、課堂練習題與自我測驗，方便教師上課展示，也方便學生課後複習。



\---



\## 一、專案目標



本專案要完成：



1\. 依章節將原始 PDF 教材整理成 HTML 講義。

2\. 每一章輸出一份獨立 HTML 檔案。

3\. HTML 教材需適合課堂投影與學生自學。

4\. 教材內容需以繁體中文呈現。

5\. 每章需包含：



&#x20;  \* 章節標題

&#x20;  \* 學習目標

&#x20;  \* 課前導入

&#x20;  \* 核心觀念說明

&#x20;  \* 公式與符號說明

&#x20;  \* 上課範例

&#x20;  \* 互動式小工具或練習

&#x20;  \* 課堂練習題

&#x20;  \* 課後自我測驗

&#x20;  \* 本章重點整理

6\. 若可行，加入互動式元素，例如：



&#x20;  \* 顯示／隱藏答案

&#x20;  \* 選擇題即時回饋

&#x20;  \* 簡單計算器

&#x20;  \* 圖表互動

&#x20;  \* 分配圖視覺化

&#x20;  \* 迴歸線示意

&#x20;  \* 假說檢定流程圖



\---



\## 二、原始教材資訊



原始檔案為一份完整統計學 PDF 講義。



```text

檔案類型：PDF

頁數：358 頁

大小：約 8.99 MB

語言：繁體中文

內容：統計學講義

PDF 建立時間：2017-07-13

```



本專案應以該 PDF 為主要內容來源，但產出的 HTML 不應只是逐頁轉換，而應重新整理成適合上課使用的結構化教材。



\---



\## 三、教材章節



本教材包含 14 章與附錄。



| 章次     | 章名                                                  | HTML 輸出檔名                                         |

| ------ | --------------------------------------------------- | ------------------------------------------------- |

| 第 1 章  | 導論                                                  | `chapter-01-introduction.html`                    |

| 第 2 章  | 統計圖表                                                | `chapter-02-statistical-charts.html`              |

| 第 3 章  | 統計測量數                                               | `chapter-03-descriptive-measures.html`            |

| 第 4 章  | 機率論                                                 | `chapter-04-probability.html`                     |

| 第 5 章  | 間斷隨機變數及其機率分配                                        | `chapter-05-discrete-random-variables.html`       |

| 第 6 章  | 連續隨機變數及其機率分配                                        | `chapter-06-continuous-random-variables.html`     |

| 第 7 章  | 抽樣分配                                                | `chapter-07-sampling-distributions.html`          |

| 第 8 章  | 點估計與區間估計                                            | `chapter-08-estimation.html`                      |

| 第 9 章  | 假說檢定：單一母體                                           | `chapter-09-hypothesis-test-one-population.html`  |

| 第 10 章 | 假說檢定：兩個母體                                           | `chapter-10-hypothesis-test-two-populations.html` |

| 第 11 章 | 變異數分析                                               | `chapter-11-anova.html`                           |

| 第 12 章 | 迴歸分析                                                | `chapter-12-regression.html`                      |

| 第 13 章 | 複迴歸模型                                               | `chapter-13-multiple-regression.html`             |

| 第 14 章 | 卡方檢定                                                | `chapter-14-chi-square-test.html`                 |

| 附錄     | Excel 圖表操作、Z/T/卡方/F/Poisson/Tukey/Durbin-Watson 分配表 | `appendix-statistical-tables.html`                |



\---



\## 四、建議專案結構



```text

project-root/

│

├─ README.md

├─ AGENTS.md

│

├─ source/

│  └─ statistics\_lecture.pdf

│

├─ extracted/

│  ├─ chapter-01-introduction.md

│  ├─ chapter-02-statistical-charts.md

│  ├─ chapter-03-descriptive-measures.md

│  └─ ...

│

├─ html/

│  ├─ index.html

│  ├─ chapter-01-introduction.html

│  ├─ chapter-02-statistical-charts.html

│  ├─ chapter-03-descriptive-measures.html

│  └─ ...

│

├─ assets/

│  ├─ css/

│  │  └─ style.css

│  ├─ js/

│  │  ├─ main.js

│  │  ├─ quiz.js

│  │  ├─ statistics-tools.js

│  │  └─ charts.js

│  └─ images/

│

├─ scripts/

│  ├─ extract\_pdf\_text.py

│  ├─ split\_chapters.py

│  ├─ build\_html.py

│  └─ validate\_outputs.py

│

├─ .github/

│  └─ workflows/

│     └─ pages.yml

├─ .gitignore

├─ .nojekyll

└─ index.html

```



\---



\## 五、每章 HTML 教材格式



每一章 HTML 建議採用以下結構。



```text

1\. 章節標題

2\. 學習目標

3\. 本章地圖

4\. 課前導入

5\. 核心觀念

6\. 重要公式

7\. 範例解析

8\. 互動式練習

9\. 課堂練習題

10\. 課後自我測驗

11\. 本章重點整理

12\. 下一章預告

```



\### 已確認的章節編排準則



第 1 章已作為後續章節的版面與內容樣板。後續章節製作時，請依下列方式編排：



1\. 頁面左側導覽



\* 每章左側需有章內導覽，連到學習目標、本章地圖、核心內容、專有名詞解釋、公式說明、範例解析、互動練習、課堂練習、自我測驗與重點整理。

\* 左側導覽必須可顯示／隱藏，頁首需提供「顯示/隱藏目錄」按鈕。

\* 側欄隱藏後，主內容區需自動放寬。

\* `html/index.html` 首頁也需套用相同的可顯示／隱藏目錄設計，讓首頁與章節頁操作一致。



2\. 教材文字語氣



\* 不要用「PDF 的安排」、「PDF 強調」、「PDF 說」這類說法。PDF 是檔案格式，不應作為教材主詞。

\* 應改用自然教材語氣，例如「本章首先說明……」、「本節重點是……」、「以前述例子來看……」。

\* 不要只做大綱式摘要，應依原教材小節脈絡重新整理為可自學的講義式內容。

\* 專有名詞第一次出現時，需在正文中直接說明其意義。



3\. 核心內容



\* 核心內容需依原章小節編排，例如第 1 章使用 `1-1`、`1-2`、`1-3`、`1-4`。

\* 每一小節都應有完整段落說明，不可只有表格或條列。

\* 表格可用來整理比較，但表格前後仍需有文字說明。



4\. 專有名詞解釋



\* 每章需有「專有名詞解釋」區塊。

\* 專有名詞應依小節分組，例如 `1-1 何謂統計學`、`1-2 統計之目的`。

\* 每組名詞使用項目符號清單，不使用數字編號，避免章節編號與名詞編號混雜。

\* 專有名詞清單不要用框線、底色或卡片包住；使用清楚的小圓點即可，版面要乾淨。

\* 專有名詞若含英文，英文第一個字母需大寫，例如 `Statistics`、`Descriptive statistics`、`Qualitative / categorical`。

\* 若英文由多個單字組成，採句首字母大寫即可，不需每個單字都大寫，例如 `Problem definition`、`Contingency table`。



5\. 表格內的中英文格式



\* 所有表格中的專有名詞若同時有中文與英文，需統一成「中文一列、英文一列」。

\* 建議 HTML 格式如下：



```html
<td>名目尺度<br><span class="muted">Nominal</span></td>
```



\* 不要在同一列混寫，例如避免 `名目尺度 nominal`、`間斷資料 discrete`。

\* 表格內英文同樣需第一個字母大寫。



6\. 範例解析



\* 每個範例需獨立成一個區塊，範例與範例之間需有明確間距或分隔線。

\* 每題範例建議包含：題目、解題想法、解題步驟、答案、教學提醒。

\* 範例應盡量取自或改寫自原教材的例題與習題，不要只放泛用題目。



7\. 互動功能



\* 保留答案顯示／隱藏、選擇題即時回饋等基礎互動。

\* 若章節主題適合，可加入計算器、圖表產生器或視覺化工具。

\* 互動功能必須使用原生 HTML/CSS/JavaScript，不使用大型前端框架。



\---



\## 六、每章內容要求



\### 1. 章節標題



每章開頭需清楚標示章名，例如：



```text

第 4 章 機率論

```



\### 2. 學習目標



每章需列出 3 到 6 個學習目標，例如：



```text

學完本章後，學生應能：



1\. 說明機率的基本概念。

2\. 區分古典機率、經驗機率與主觀機率。

3\. 使用加法法則與乘法法則解題。

4\. 判斷事件是否互斥或獨立。

```



\### 3. 本章地圖



每章需提供簡短章節導覽，讓學生知道本章邏輯順序。



\### 4. 核心觀念



核心觀念應以教師講解口吻撰寫，不要只是複製 PDF 原文。



要求：



\* 使用繁體中文。

\* 句子清楚。

\* 適合大學生閱讀。

\* 公式前後要有文字解釋。

\* 專有名詞第一次出現時要解釋。

\* 避免過度壓縮內容。



\### 5. 公式與符號說明



所有重要公式都應包含：



1\. 公式本身

2\. 符號定義

3\. 使用時機

4\. 簡單例子



例如：



```text

樣本平均數：



x̄ = Σxᵢ / n



其中：



\- x̄：樣本平均數

\- xᵢ：第 i 筆觀察值

\- n：樣本數



此公式用於描述一組資料的集中趨勢。

```



\### 6. 範例解析



每章至少應包含 3 題完整範例。



每題範例需包含：



1\. 題目

2\. 解題想法

3\. 解題步驟

4\. 答案

5\. 教學提醒



\### 7. 互動式練習



若主題適合，應加入互動式練習。



可使用原生 HTML、CSS、JavaScript，不依賴大型前端框架。



互動式元素範例：



```text

\- 點擊顯示答案

\- 選擇題即時判斷

\- 填入數字後自動計算平均數、變異數或標準差

\- 輸入 z 值後顯示常態分配位置

\- 調整樣本數後觀察抽樣分配變化

\- 輸入資料點後產生散佈圖與迴歸線

```



\### 8. 練習習題



每章至少包含：



```text

基礎題：5 題

應用題：5 題

觀念題：3 題

選擇題：5 題

```



若章節內容較長，可增加題數。



每題應提供答案。建議答案預設隱藏，學生點擊後才顯示。



\### 9. 自我測驗



每章結尾需提供簡短自我測驗。



格式建議：



```text

本章自我檢核：



□ 我能說明本章主要概念。

□ 我能判斷公式的使用時機。

□ 我能完成基本計算題。

□ 我能解釋統計結果的意義。

```



\---



\## 七、互動式 HTML 規格



\### 1. 技術原則



請優先使用：



```text

HTML5

CSS3

原生 JavaScript

```



除非必要，不要使用 React、Vue、Angular 或其他大型框架。



\### 2. 頁面樣式



HTML 教材應具備：



\* 清楚的章節導覽

\* 適合投影的字級

\* 淺色背景

\* 清楚的標題層級

\* 公式區塊

\* 範例區塊

\* 練習區塊

\* 答案區塊

\* 提醒區塊



\### 3. 建議 CSS 區塊



每章應能呈現以下區塊：



```text

.lesson-objectives

.chapter-map

.concept-box

.formula-box

.example-box

.practice-box

.quiz-box

.answer-box

.teacher-note

.warning-box

.summary-box

```



\### 4. JavaScript 功能



至少支援：



```text

toggleAnswer()

checkQuiz()

calculateMean()

calculateVariance()

resetPractice()

```



若該章涉及分配、假說檢定或迴歸，可再加入對應功能。



\---



\## 八、各章互動設計建議



\### 第 1 章 導論



建議互動：



\* 母體與樣本判斷題

\* 敘述統計與推論統計分類練習

\* 變數類型判斷練習



\### 第 2 章 統計圖表



建議互動：



\* 輸入資料後產生簡單長條圖

\* 類別資料與數值資料適合圖表配對

\* 圖表判讀練習



\### 第 3 章 統計測量數



建議互動：



\* 平均數、中位數、眾數計算器

\* 變異數與標準差計算器

\* 離群值對平均數影響模擬



\### 第 4 章 機率論



建議互動：



\* 事件交集、聯集、補集練習

\* 條件機率練習

\* 獨立事件判斷題



\### 第 5 章 間斷隨機變數及其機率分配



建議互動：



\* 二項分配計算器

\* Poisson 分配計算器

\* 期望值與變異數練習



\### 第 6 章 連續隨機變數及其機率分配



建議互動：



\* 常態分配圖示

\* z 值位置顯示

\* 機率面積概念練習



\### 第 7 章 抽樣分配



建議互動：



\* 樣本數改變與抽樣分配變化

\* 中央極限定理示意

\* 標準誤計算練習



\### 第 8 章 點估計與區間估計



建議互動：



\* 信賴區間計算器

\* 信心水準與區間寬度模擬

\* 點估計與區間估計比較



\### 第 9 章 假說檢定：單一母體



建議互動：



\* 單一平均數檢定流程

\* p 值判斷練習

\* 拒絕域視覺化



\### 第 10 章 假說檢定：兩個母體



建議互動：



\* 兩母體平均數差異檢定流程

\* 獨立樣本與配對樣本判斷

\* 檢定結果解讀練習



\### 第 11 章 變異數分析



建議互動：



\* 組間變異與組內變異視覺化

\* F 檢定概念練習

\* ANOVA 表格填空



\### 第 12 章 迴歸分析



建議互動：



\* 散佈圖與迴歸線

\* 相關係數判讀

\* 斜率與截距解釋練習



\### 第 13 章 複迴歸模型



建議互動：



\* 多變數迴歸係數解釋

\* 控制變數概念練習

\* 迴歸表判讀練習



\### 第 14 章 卡方檢定



建議互動：



\* 適合度檢定流程

\* 獨立性檢定列聯表練習

\* 期望次數計算器



\### 附錄



建議內容：



\* Excel 圖表操作教學

\* 常用分配表查表方式

\* Z 分配表

\* t 分配表

\* 卡方分配表

\* F 分配表

\* Poisson 分配表

\* Tukey 表

\* Durbin-Watson 表



\---



\## 九、檔名規則



所有輸出檔名應使用英文小寫、連字號，不使用空白或中文。



正確範例：



```text

chapter-01-introduction.html

chapter-02-statistical-charts.html

chapter-03-descriptive-measures.html

```



避免：



```text

第1章 導論.html

Chapter 1.html

chapter 01.html

```



\---



\## 十、首頁 index.html



`html/index.html` 應作為教材首頁。



首頁需包含：



1\. 教材名稱

2\. 教材簡介

3\. 章節清單

4\. 每章 HTML 連結

5\. 使用說明

6\. 建議上課順序



章節清單應能直接連到各章 HTML。



\---



\## 十一、產生流程



建議流程如下：



```text

1\. 將 PDF 放入 source/

2\. 擷取 PDF 文字到 extracted/

3\. 依目錄切分成每章 Markdown

4\. 整理每章 Markdown 結構

5\. 為每章補上範例與習題

6\. 加入互動式 HTML 元件

7\. 輸出每章 HTML

8\. 產生 html/index.html

9\. 驗證所有連結與互動功能

```



\---



\## 十二、執行方式



\### 開啟教材



正式使用方式：



```text

GitHub Pages

```



部署完成後，使用 GitHub Pages 提供的 HTTPS 網址開啟教材。根目錄 `index.html` 會自動導向 `html/index.html`。



本機開發測試可使用任一靜態檔案伺服器，例如：



```text

python -m http.server <port> --bind 127.0.0.1

```



本機測試網址可為 `http://127.0.0.1:<port>/html/`，但正式教材不得依賴 localhost、固定 port、Python server 或 `.bat` 啟動檔。



\### 部署教材



正式部署使用 GitHub Actions 與 GitHub Pages：



```text
.github/workflows/pages.yml
```



推送到 `main` 或 `master` 後，GitHub Actions 會建立靜態部署 artifact，內容只包含正式網站需要的 `index.html`、`.nojekyll`、`html/`、`assets/`。



\---



\## 十三、驗證標準



每次修改後，請確認：



1\. `html/index.html` 存在。

2\. 14 章 HTML 均已產生。

3\. 附錄 HTML 已產生。

4\. 首頁所有章節連結可正常開啟。

5\. 每章 HTML 至少包含：



&#x20;  \* 學習目標

&#x20;  \* 核心觀念

&#x20;  \* 公式說明

&#x20;  \* 範例

&#x20;  \* 練習題

&#x20;  \* 答案

&#x20;  \* 本章重點

6\. 互動按鈕可以正常運作。

7\. JavaScript console 沒有明顯錯誤。

8\. 中文內容顯示正常，無亂碼。

9\. HTML 可透過 GitHub Pages 靜態網址開啟。

10\. 正式教材不得寫死 `localhost`、`127.0.0.1` 或任何固定 port。

11\. 本機測試仍可使用靜態檔案伺服器，但不可作為正式使用方式。



\---



\## 十四、Codex 工作原則



請 Codex 執行本專案時遵守：



1\. 不要覆蓋原始 PDF。

2\. 不要刪除使用者原始檔案。

3\. 若 PDF 文字擷取不完整，應標記需要人工校對的段落。

4\. 不要將 358 頁內容一次塞進單一 HTML。

5\. 必須依章節拆分。

6\. 每章 HTML 應是可獨立閱讀的教材。

7\. 不要只做格式轉換，應整理成教學用教材。

8\. 不要只產生空白模板。

9\. 練習題必須與該章主題相關。

10\. 互動功能應能在 Chrome 中正常運作。

11\. 若產生程式碼，需可在 Windows PowerShell 執行。

12\. 若啟動本機測試 server，必須背景執行，不可讓 Codex 長時間卡在前景 server。

13\. 驗證命令必須在數秒內結束，不可持續等待。

14\. 修改完成後需回報：



&#x20;   \* 新增哪些檔案

&#x20;   \* 修改哪些檔案

&#x20;   \* 產生哪些 HTML

&#x20;   \* 哪些項目仍需人工檢查



\---



\## 十五、完成後應有成果



完成後，專案至少應包含：



```text

html/index.html

html/chapter-01-introduction.html

html/chapter-02-statistical-charts.html

html/chapter-03-descriptive-measures.html

html/chapter-04-probability.html

html/chapter-05-discrete-random-variables.html

html/chapter-06-continuous-random-variables.html

html/chapter-07-sampling-distributions.html

html/chapter-08-estimation.html

html/chapter-09-hypothesis-test-one-population.html

html/chapter-10-hypothesis-test-two-populations.html

html/chapter-11-anova.html

html/chapter-12-regression.html

html/chapter-13-multiple-regression.html

html/chapter-14-chi-square-test.html

html/appendix-statistical-tables.html

```



並應有共用樣式與互動功能：



```text

assets/css/style.css

assets/js/main.js

assets/js/quiz.js

assets/js/statistics-tools.js

assets/js/charts.js

```



\### GitHub Pages 部署結構



正式網站採用 GitHub Pages 靜態部署。部署內容只包含：



```text
index.html
.nojekyll
html/
assets/
```



原始教材與中間檔不部署：



```text
source/
textbook/
*.pdf
extracted/
scripts/
```



GitHub Actions workflow 位於：



```text
.github/workflows/pages.yml
```



此 workflow 會建立 `_site/` 暫存部署資料夾，只複製靜態網站必要檔案，並排除原始 PDF。



\---



\## 十六、建議給 Codex 的第一個任務



請在本專案中依據 README.md 建立「統計學互動式 HTML 教材系統」。



請先完成以下工作：



1\. 檢查目前專案結構。

2\. 找到 `source/` 中的統計學 PDF。

3\. 建立必要資料夾：



&#x20;  \* `extracted/`

&#x20;  \* `html/`

&#x20;  \* `assets/css/`

&#x20;  \* `assets/js/`

&#x20;  \* `scripts/`

4\. 建立 HTML 教材共用樣式。

5\. 建立互動題目與答案切換功能。

6\. 先製作第 1 章與第 2 章 HTML 作為樣板。

7\. 建立 `html/index.html`。

8\. 驗證首頁與前兩章可以透過 GitHub Pages 靜態結構正常開啟；本機可用靜態檔案伺服器輔助預覽。

9\. 完成後回報檔案清單與下一步建議。



請不要一次處理全部 358 頁。先用前兩章建立穩定模板，確認格式與互動方式正確後，再擴充到第 3 章到第 14 章與附錄。



