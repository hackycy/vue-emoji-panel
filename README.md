# vue-emoji-panel

一个基于Vue2编写的表情选择面板组件

## 组件属性

| 属性           | 说明                                                      | 类型                      | 默认值         |
| -------------- | --------------------------------------------------------- | ------------------------- | -------------- |
| width          | 指定表情弹出框的宽度                       | Number           | 410            |
| content-height | 指定表情弹出框**内容区域**的高度             | Number            | 270            |
| size           | 指定单个表情的大小（正方形）                 | Number            | 28             |
| gutter         | 指定表情间的间隔 | Number | 10             |
| emojis         | 表情图片数组，单个对象需具有`src`、`name`属性             | Array           |                |
| recently-used  | 是否开启记录最近使用的表情                                | Boolean                   | true           |
| emoji-class    | 为`emoji-popover`指定类名                                 | String                    |                |
| unit | 用于`width`、`size`等具有长度性质的单位 | String | px |

## 组件事件

| 参数        | 说明             | 回调参数    |
| ----------- | ---------------- | ----------- |
| emoji-click | 表情被选中时触发 | item, index |

# 参考资料

- https://popper.js.org/docs/v2/tutorial/
- https://github.com/ElemeFE/element

# LICENSE

[MIT](LICENSE)

