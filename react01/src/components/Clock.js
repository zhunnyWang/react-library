import React, { Component } from 'react'

/**
 * 使用组件时，可能出现一些特别的状态，需要去改变，你也许要维护这个状态
 * 状态，在数据和页面有交互时就需要状态
 * 数据驱动视图的时候一定要放在state中
 */
export default class Clock extends Component {
  state = {
    date: new Date()
  }
  /**
   * 生命周期函数
   * 组件挂载的时刻
   */
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  //组件即将卸载时
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  /**
   * react是局部更新
   */
  render () {
    return (
      <div>
        {'当前时间:' + this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

