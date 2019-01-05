import {setAttribute} from './dom'
function _render (vnode) {
    if(typeof vnode === 'string'){
        const textNode = document.createTextNode(vnode);
        return textNode
    }
    if(typeof vnode.tag === 'function') {
        // 在jsx 标签<Counter/> 
        // 普通标签就会来到_render 来执行
        // 不普通 他是一个function Component
        console.log(vnode);
        const component = createComponent(vnode.tag,vnode.attrs)
        setComponentProps(component,vnode.attrs)
        return component.base
    }
    if(vnode.attrs){  
        Object.keys(vnode.attrs).forEach(key=>{
            const value = vnode.attrs[key];
            setAttribute(dom,key,value);
        })
    }
    const dom = document.createElement(vnode.tag);
    vnode.children.forEach(child=>render(child,dom));
    return dom
}
function setComponentProps(component,props) {
    renderComponent(component);
}
export function renderComponent(component){
    let base;
    const renderer = component.render();
    base = _render(renderer)
    component.base=base
}
function createComponent(component,props){
    console.log(component,props)
    let inst;
    if(component.prototype &&component.prototype.render){
        inst = new component(props)
    }
    return inst;
}
export function render(vnode,container){
    return container.appendChild(_render(vnode))
}
