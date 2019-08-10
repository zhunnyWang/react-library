import { createVnode } from "./myvdom";

//节点类型，节点属性以及若干孩子节点
function createElement (type, props, ...children) {
  props.children = children
  delete props.__source
  delete props.__self
  //type 标签的类型  vtype 区分虚拟元素类型
  //vtype:组件的类型
  let vtype
  if (typeof type === 'string') {
    vtype = 1
  } else if (typeof type === 'function') {
    if (type.isClassComponent) {
      vtype = 2
    } else {
      vtype = 3
    }
  }

  return createVnode(vtype, type, props)
}

export default { createElement }

export class Component {
  //区分组件是class还是function
  static isClassComponent = true
  constructor(props) {
    this.props = props
    this.state = {}
  }
  setState () {

  }
}