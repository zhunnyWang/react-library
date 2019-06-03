import React, { Component } from 'react'

const strengthenPure = Comp => {
  const name = 'zhunny'
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
  return class extends React.Component {
    render () {
      return <Comp {...this.props}></Comp>
    }
  }
}

/**
 * 因为装饰器只能修饰类，因此Pure要写成基于类的组件
 */
@withLog
@strengthenPure
@withLog
class Pure extends React.Component {
  render () {
    return (
      <div>{this.props.name} -- {this.props.age}</div>
    )
  }
}

export default class DecoratorHoc extends Component {
  render () {
    return (
      <div>
        <Pure age='19'></Pure>
      </div>
    )
  }
}


