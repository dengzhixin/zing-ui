---
title:Flex 布局
---
# Flex 布局
通过基础的 24 分栏，迅速简便地创建布局。
<ClientOnly>
<flex-simple-demos></flex-simple-demos>
<flex-gutter-demos></flex-gutter-demos>
<flex-offset-demos></flex-offset-demos>
<flex-justify-demos></flex-justify-demos>
<flex-smart-demos></flex-smart-demos>
</ClientOnly>


# Row Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|gutter| 间距 | string、number |-|0
|justify|对齐方式|string|left、center、right|left

# Col Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|span| 栅格占据的列数 | string、number |1-24|
|offset|栅格左侧的间隔格数| string、number|1-24|
|justify|内容水平方向对齐方式|string|left、right、center、around、between、evenly|left
|align|内容垂直方向对齐方式|string|top、center、bottom、|top
|ipad|ipad响应式布局|number、object|span数字或{span:1;offset:1}
|narrowPc|窄屏幕响应式布局|number、object|span数字或{span:1;offset:1}
|pc|普通电脑响应式布局|number、object|span数字或{span:1;offset:1}
|widePc|宽屏响应式布局|number、object|span数字或{span:1;offset:1}
