import React, { Component } from 'react'

function Pure (props) {
  return (
    <div>{props.name} -- {props.age}</div>
  )
}

const strengthenPure = Comp => {
  const name = 'zhunny'
  //返回函数型组件
  // return (props) => {
  //   return (
  //     <Comp {...props} name={name}></Comp>
  //   )
  // }
  //返回类组件
  return class extends React.Component {
    componentDidMount () {
      console.log('do something')
    }
    render () {
      return <Comp {...this.props} name={name}></Comp>
    }
  }
}

const withLog = (Comp) => {
  console.log(Comp.name + '渲染了')
  return (props) => {
    return <Comp {...props}></Comp>
  }
}

//高阶组件可以链式调用
const NewPure = withLog(strengthenPure(withLog(Pure)))
export default class Hoc extends Component {
  render () {
    return (
      <div>
        <NewPure age='19'></NewPure>
      </div>
    )
  }
}
