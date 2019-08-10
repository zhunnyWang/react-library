//vdom -> dom
//diff
//vtype 1 html元素 2-function组件 3-class组件
export function createVnode (vtype, type, props) {
  const vnode = { vtype, type, props }
  return vnode
}


//vdom -> dom 初始化虚拟节点
export function initVNode (vnode) {
  const { vtype } = vnode
  if (!vtype) {
    //文本节点
    return document.createTextNode(vnode)
  }
  if (vtype === 1) {
    //标签节点
    return createElement(vnode)
  } else if (vtype === 2) {
    //类组件
    return createClassComp(vnode)
  } else if (vtype === 3) {
    //函数组件
    return createFuncComp(vnode)
  }
}

function createElement (vnode) {
  //根据type创建元素
  const { type, props } = vnode
  const node = document.createElement(type)

  //处理属性 有些属性需要特殊处理
  const { key, children, ...rest } = props
  Object.keys(rest).forEach(k => {
    //处理特殊属性名：className htmlFor labelFor
    if (k === 'className') {
      node.setAttribute('class', rest[k])
    }
    else if (k === 'htmlFor') {
      node.setAttribute('for', rest[k])
    } else if (k === 'style' && typeof rest[k] === 'object') {
      const style = Object.keys(rest[k]).map(s => s + ':' + rest[k][s]).join(';')
      node.setAttribute('style', style)
    } else if (k.startsWith("on")) {
      const event = k.toLowerCase();
      node[event] = rest[k]
    } else {
      node.setAttribute(k, rest[k])
    }
  })

  //递归子元素
  children.forEach(c => {
    if (Array.isArray(c)) {
      c.forEach(n => node.appendChild(initVNode(n)))
    } else {
      node.appendChild(initVNode(c))
    }
  })
  return node
}

function createClassComp (vnode) {
  const { type, props } = vnode
  const component = new type(props)
  const vdom = component.render()
  console.log(vdom)
  return initVNode(vdom)
}

function createFuncComp (vnode) {
  const { type, props } = vnode
  const vdom = type(props)
  return initVNode(vdom)
}