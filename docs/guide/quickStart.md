---
title: 快速上手
---
# 搭建vue开发环境

```bash
vue create hello-world
```
> 如果你还没有安装vue-cli，请先[安装](https://cli.vuejs.org/zh/guide/installation.html)，或者你用你的方法搭建好之后进行下一步

# 安装Zing-UI

### 安装
```bash
yarn add zing-ui
#or
npm install zing-ui --save

```



# 样式引入 
在入口文件引入css样式:
```js
import 'zing-ui/dist/index.css'
```
# 注册组件
在组件中引入
```html
<script>
import {Button} from 'zing-ui'
export default {
  name: 'yourApp',
  components: {
    Button
  }
}
</script>
```
# 使用

```html
<Button type="success">一个的按钮</Button>
```
