import React, { Component } from 'react'

const withKaikeba = Component => {
  //函数式组件
  return props => <Component {...props} name="高阶组件" />
  //也可以返回类式组件
  // return class extends React.Component{
  //   componentDidMount(){
  //     console.log('改写生命周期函数');
  //   }
  //   render(){
  //     return <Component {...props} name="高阶组件" />
  //   }
  // }
}

const withLog = Component => {
  console.log(Component.name + '渲染了')
  return props => <Component {...props} />
}

@withLog //第一个，装饰Kaikeba组件
@withKaikeba //第二个，修饰第一个装饰器返回的新组件
@withLog
class Kaikeba extends React.Component {
  render() {
    return <div>{this.props.react + '-' + this.props.name}</div>
  }
}

//高阶组件的链式调用
// const NewKaikeba = withKaikeba(withLog(Kaikeba))

export default class Hoc extends Component {
  render() {
    return (
      <div>
        <Kaikeba react="react" />
      </div>
    )
  }
}
