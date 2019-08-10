import './App.css'
import logo from './logo.svg'
import React, { Component } from 'react'
import { Welcome1, Welcome2 } from './components/CompType'
import Clock from './components/Clock'
import StateTest from './components/StateTest'
import CartSample from './components/CartSample'
import Lifecycle from './components/Lifecycle'
import InputNumber from './components/InputNumber';

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prop: 'some prop'
    }
  }
  componentDidMount () {
    this.setState({ prop: 'a new prop' })

    setTimeout(() => {
      this.setState({ prop: '' })
    }, 2000);

  }
  render () {
    const name = 'hello react'
    const zhunny = {
      firstName: 'Wang',
      lastName: 'Zhunny'
    }
    const jsx = <p>hello react</p>
    return (
      <div>
        {/*注释语法*/}
        {/* <h1>{name}</h1>
        <h1>{formatName(zhunny)}</h1> */}
        {/*设置属性的方式 */}
        {/* <img src={logo} style={{ width: '100px' }} />
        {jsx} */}
        {/* <Welcome1 name="zhunnyWang" disabled={true}/>
        <Welcome2 name="zhunnyWang" /> */}
        {/* <Clock /> */}
        {/* <StateTest /> */}
        {/* <CartSample title='购物车' /> */}
        {/**生命周期 */}
        {/* {this.state.prop && <Lifecycle prop={this.state.prop}></Lifecycle>} */}
        <InputNumber />
      </div>
    );
  }
}
