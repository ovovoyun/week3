# week3 主線任務 眼鏡官網

### 相關連結
[XD連結](https://xd.adobe.com/view/5b20cbc4-5c64-4b67-814e-633b078a8cd4-0e73/grid/)
[圖片連結](https://github.com/hexschool/2022-web-layout-training/tree/main/week3-4)

### 安裝
+ `npm i vite`
+ `npm i vite-plugin-ejs`
+ `npm i glob`
+ `npm i vite-plugin-live-reload` 檔案儲存，網頁自動重新整理(vite.config.js)

### 指令
+ `npm i` [初次 clone 專案](https://github.com/hexschool/web-layout-training-vite)需執行，產生 node_modules
+ `npm run dev` 監聽(開啟瀏覽器)，不須使用 Watch Sass 功能

### 遠端部屬
1. 建立 github repo

2. 修改 vite.config.js 檔中的 defineConfig 裡的
   base: '/GitHub Repository 名稱/'

3. git 指令
```cmd
git init 初次設定
git add .
git commit -m "msg"
git remote {copy github URL} 初次設定
git push origin master
```

4. `npm run deploy` 編譯 dist 檔(`npm run build`)並部屬到 github gh-pages 分支