import { initVNode } from './myvdom';
//1.vdom变成真实dom
//2.真实dom放在container中
function render (vnode, container) {
  const node = initVNode(vnode)
  container.appendChild(node)
  // container.innerHTML = `<pre>${JSON.stringify(vnode, null, 2)}</pre>`
}

export default { render }