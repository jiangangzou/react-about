1. 虚拟DOM ？ VNode Virtual DOM
mvvm 封装了dom 层 
dom 太消耗性能
vnode + diff 算法来解决
jsx 语法
用js对象描述html结构


jsx 背后隐含着vnode的真相
React.creatElement（
    h1 第一个参数，document.creatElement()
    attributes 第二个参数 ele.setAttribute(key,val)
    children 第三个参数
    文本节点 textnode
    node 递归一下 ）

虚拟dom 描述 JSON

<h1 classname="title">标题</h1>
VNode = {
    tag: "h1",
    attrs: {
        class: "title"
    },
    children: [
        '标题'
    ]
}