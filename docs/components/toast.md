---
title:Toast 消息框
---
# Toast 消息框
<ClientOnly>
<toast-demos></toast-demos>
<toast-type-demos></toast-type-demos>
<toast-text-demos></toast-text-demos>
</ClientOnly>

# 使用方法
引入Toast插件
```js
import Vue from 'vue'
import Toast from 'zing-ui'
Vue.use(Toast)
```
在组件中调用
```js
this.$toast('message',options)
```

# options
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|type| 类型 | string |default、danger、warning、success|default
| position | 位置 |    string | top、middle、bottom| middle
|autoClose|自动关闭|boolean|true、false|true
|closeDelay|自动关闭时间|  number |-| 3000
| closeButton      | 关闭按钮      |  object || 
|enableHtml|支持html内容|boolean|true、false|false
|parentNode|在父元素内显示|string、object| - | body
|zIndex|z-index|number|-| auto

# closeButton options



