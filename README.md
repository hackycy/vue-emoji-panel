# vue-emoji-popover

一个基于Vue2编写的表情弹出框组件

## 组件属性

| 属性            | 说明                                              | 类型                      | 默认值         |
| --------------- | ------------------------------------------------- | ------------------------- | -------------- |
| width           | 指定表情弹出框的宽度                              | Number                    | 410            |
| content-height  | 指定表情弹出框**内容区域**的高度                  | Number                    | 270            |
| item-size       | 指定单个表情的大小（正方形）                      | Number                    | 28             |
| gutter          | 指定表情间的间隔，支持数组指定上、右、下、左形式  | Number \| `Array<Number>` | 10             |
| unit            | 指定`width、height、itemSize、gutter`等属性的单位 | String                    | px             |
| emojis          | 表情图片数组，单个对象需具有`src`、`name`属性     | `Array<Object>`           |                |
| recently-used   | 是否开启记录最近使用的表情                        | Boolean                   | true           |
| value / v-model | 状态是否可见                                      | Boolean                   | false          |
| transition      | 定义渐变动画                                      | String                    | fade-in-linear |
| emoji-class     | 为`emoji-popover`指定类名                         | String                    |                |
| placement       | 指定出现的位置，仅支持 `top / bottom`             | String                    | top            |

## 组件事件

| 参数        | 说明             | 回调参数    |
| ----------- | ---------------- | ----------- |
| emoji-click | 表情被选中时触发 | item, index |
| show        | 显示时触发       |             |
| hide        | 隐藏时触发       |             |

# 参考资料

- https://popper.js.org/docs/v2/tutorial/
- https://github.com/ElemeFE/element

# LICENSE

[MIT](LICENSE)

