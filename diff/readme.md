1. jsx(react->jsx->vnode)->vnode(creatElement)->DOM(render)
2. Component(render的第三种方式，react-jsx vnode.tag  function  Counter ) -> 标签化组件
    ->Counter(extends) -> Component类->render(jsx)->reactDON

3. 响应式setState() 为了达到dom的更新，将整个dom片段都替换掉了
a。新生成整个的组件DOM、树，重新挂载  100行DOMhtml
b 只将setSTate关联的那一小段DOM，在原来的DOM的基础上做一下修改，将修改反映到dom，1行
html树 重绘 dom开销很大  replaceChild

重排 React DOM diff 算法 
需求是：减少DOM操作
setState 对应DOM 部分
setState 返回一个新的vnode -> 跟旧的dom对比
将新的内存 （虚拟）DOM 旧的DOM
都是一个树，采用算法，就可以比较出差异，在相差的地方，进行真实的dom操作