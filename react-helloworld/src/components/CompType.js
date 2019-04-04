
import React from 'react';

//函数类型的组件 相当于类中的render函数 简洁
export function Welcome1(props) {
  return (
    <div>
      <h1>Welcome1, {props.name}</h1>
    </div>
  )
}


//基于类的组件,props挂载在实例上
export class Welcome2 extends React.Component{
    render(){
        return (
            <div><h1>Welcome2, {this.props.name}</h1></div>
        )
    }
}