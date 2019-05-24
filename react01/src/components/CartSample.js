import React, { Component } from 'react'
import Cart from '../components/Cart';

export default class CartSample extends Component {
  /**
   * state的初始化一般放在构造器中
   */
  constructor(props) {
    super(props)
    this.state = {
      goods: [
        { id: 1, text: 'javascript高级程序设计' },
        { id: 2, text: 'python入门' }
      ],
      text: '',
      cart: []
    }
    //不用箭头函数就得绑定this
    this.addGood = this.addGood.bind(this)
  }
  /**
   * 用箭头函数的原因
   */
  textChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  addGood () {
    /**
     * react官方希望这是一个纯函数
     * 更新的数据不是之前的数据，而是一个全新的数据
     */
    this.setState(prevState => {
      return {
        goods: [
          ...prevState.goods,
          {
            id: prevState.goods.length + 1,
            text: prevState.text
          }
        ]
      }
    })
  }
  getGood = (good, op) => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === good.id)
    const item = newCart[idx]
    if (op) {
      if (op === 'add') {
        newCart.splice(idx, 1, { ...item, count: item.count + 1 })
      } else {
        newCart.splice(idx, 1, { ...item, count: item.count - 1 })
      }
    } else {
      if (item) {
        newCart.splice(idx, 1, { ...item, count: item.count + 1 })
      } else {
        newCart.push({ ...good, count: 1 })
      }
    }
    this.setState({
      cart: newCart
    })
  }
  addToCart = (good) => {
    this.getGood(good)
  }

  minus = (good) => {
    this.getGood(good, 'minus')
  }

  add = (good) => {
    this.getGood(good, 'add')
  }
  render () {
    // const title = this.props.title ? <h1>{this.props.title}</h1> : null
    return (
      <div>
        {/* 条件渲染 短路逻辑*/}
        {this.props.title && <h1>{this.props.title}</h1>}
        {/*列表渲染 把数组转换成jsx for循环是不能用的 它不是js表达式 赋值语句 条件语句不需要*/}
        <ul>
          {this.state.goods.map(good => (<li key={good.id}>
            {good.text}
            {/*如何在函数中传参数，因为不能直接加括号，这样就相当于直接执行了，而是再外面加一层箭头函数*/}
            <button onClick={() => { this.addToCart(good) }}>加入购物车</button>
          </li>))}
        </ul>
        {/*事件处理 */}
        <div>
          {/**textChange不能加括号 */}
          <p>{this.state.text}</p>
          <input type="text" text={this.state.text} onChange={this.textChange} />
          <button onClick={this.addGood}>添加商品</button>
        </div>

        {/*购物车 vue希望Cart能独立管理Cart 如果有变化，可以通过事件来告诉父组件
        但是React是单向数据流，Cart只需要做数据展示，不需要做任何事情*/}
        <Cart data={this.state.cart} minus={this.minus} add={this.add}></Cart>
      </div>
    )
  }
}
