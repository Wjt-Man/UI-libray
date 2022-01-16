### card
卡片组件

### 
<card imgSrc="/UI-libray/1.jpg" summary="生日快乐！"/>
<card imgSrc="/UI-libray/3.jpg" summary="笑一个吧！happy is important"/>

### 代码

```html
<t-card imgSrc="/lhc-t.jpg" summary="test"/>
```

### Attributes

| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---  | --- |   ---   |  ---  | --- |
| width| 卡片宽度| Number | false | - |
| imgSrc | 图片资源地址 | String | true | - |
| imgHeight | 图片高度 | Number| false| - |
| summary | 卡片概要 | String/Slot | false | - |
| footer | 卡片底部 | Slot | false | - |
