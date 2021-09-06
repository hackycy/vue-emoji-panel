# vue-emoji-panel

一个基于Vue2编写的表情选择面板组件

## 组件属性

| 属性           | 说明                                                      | 类型                      | 默认值         |
| -------------- | --------------------------------------------------------- | ------------------------- | -------------- |
| width          | 指定表情弹出框的宽度                       | Number           | 410            |
| size           | 指定单个表情的大小（正方形）                 | Number            | 28             |
| emojis         | 表情图片数组，单个对象需具有`src`、`name`属性             | Array           |                |
| col-limit | 单行表情最大数量 | Number | 9 |
| spacing | 行间距 | Number | 8 |
| recently-used  | 是否开启记录最近使用的表情                                | Boolean                   | true           |
| panel-class | 为`emoji-panel`（容器）指定类名 | String |  |
| emoji-class    | 为`emoji`（单个表情）指定类名                          | String                    |                |
| unit | 用于`width`、`size`等具有长度性质的单位 | String | px |

## 组件事件

| 参数        | 说明             | 回调参数    |
| ----------- | ---------------- | ----------- |
| emoji-click | 表情被选中时触发 | item, index |

# LICENSE

[MIT](LICENSE)

