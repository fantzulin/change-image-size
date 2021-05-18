# change-image-size

一個簡單的圖片縮放小工具...

##  Quick start

* [Download the latest release](https://github.com/fantzulin/change-image-size/archive/refs/heads/master.zip)
* Clone the repo: `https://github.com/fantzulin/change-image-size.git`

##  What's included

```
change-image-size/
├── index.html
└── change_size.js
```

## Documentation

### HTML
目前有四種方式可以縮放圖片：
* number
* range
* button
* image

有幾項必須填寫的數值如下：

**number** / **range**

attribute | value
--- | ---
id | string
value | int
min | int
max | int
step | int

**button**

按鈕通常會有兩個，分別是放大跟縮小，`id` 需設定兩個。

attribute | value
--- | ---
id | string
onclick | change_size(this)

**image**
attribute | value
--- | ---
id | string

範例如下：

```
<!-- 輸入寬度數值用 -->
<input type="number" class="form-control" id="size" value="504" min="100" max="1000" step="100">

<!-- 拖曳用的 bar -->
<input type="range" class="form-range" id="size_range" value="504" min="100" max="1000" step="100">

<!-- 點擊用的 button -->
<button type="button" class="btn btn-primary" id="size_btn_add" onclick="change_size(this)">+</button>
<button type="button" class="btn btn-primary" id="size_btn_minus" onclick="change_size(this)">-</button>

<!-- 縮放用的照片 -->
<img src="https://i.imgur.com/AD3MbBi.jpeg" alt="cat" id="img">
```

### JavaScript
先載入 `change_size.js`

```
<script src="change_size.js"></script>
```

function 目前有幾項必填的資料：
* domid (觸發事件的 dom 的 id, 如果是 button 不必填)
* addid (放大圖片的 button id, 如果不是用 button 不必填)
* minusid (縮小圖片的 button id, 如果不是用 button 不必填)
* type (觸發事件的 dom 的類型)
* imgid (被縮放的 image 的 id)
* min (圖片寬度的最小值)
* max (圖片寬度的最大值)
* step (圖片放大縮小的級距)

parameter | value
--- | ---
domid | string
addid | string
minusid | string
type | string
imgid | string
min | int
max | int
step | int

範例如下：

```
change_size({
  domid: "size",
  addid: "",
  minusid: "",
  type: "number",
  imgid: "img",
  min: 100,
  max: 1000,
  step: 100
})
```

## Copyright and license
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE)
