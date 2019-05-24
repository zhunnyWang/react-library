import React, { Component } from 'react'

/**
 * setState的注意项
 * 1)不能直接修改state的值，需要通过setstate函数执行
 * 2)state和SetState是批量执行的，这样可以提升更新的性能，但是同时它会认为连续相同的操作是一样的，只会执行一次
 * setState(obj,cb)
 * setState(fn,cb)
 */
export default class StateTest extends Component {
  state = {
    counter: 1
  }

  componentDidMount () {
    //直接修改状态只可生效么？官方给的setstate方法才可以
    // this.state.counter += 1
    //批量处理，连续执行三次，只有一次生效
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    /**
     * 函数式写法则会生效，函数从参数中拿到变化的值
     * 如果要更改的新的值依赖于之前的老值，最好用函数式的写法
     */
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })

  }
  render () {
    return (
      <div>
        {this.state.counter}
      </div>
    )
  }
}
