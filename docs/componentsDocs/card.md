### card
卡片组件

### 
<card imgSrc="/UI-libray/lhc-s.jpg" summary="送你一朵小红花！"/>
<card imgSrc="/UI-libray/lhc-t.jpg" summary="岁月安然无恙！"/>

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
