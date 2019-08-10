import React from 'react'

//函数类型的组件，比较简洁，直接相当于render函数，但hooks的出现使得它们之间没有太大区别
/**
 * props传值，两种方式有区别，props是只读的
 * 单向绑定，严格的单向数据流
 
 */
export function Welcome1 (props) {
  return (
    <div>
      Welcome1,{props.name}
    </div>
  )
}

//基于类的组件
export class Welcome2 extends React.Component {
  render () {
    return (
      <div>
        Welcome2,{this.props.name}
        <div>
          <input type="text" value="hello" disabled={this.props.disabled}/>
        </div>
      </div>
    )
  }
}


