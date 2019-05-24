import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'
import { Welcome1, Welcome2 } from './components/CompType'
import Clock from './components/Clock'
import StateTest from './components/StateTest'
import Cart from './components/CartSample'
import AntdTest from './components/AntdTest'
import Hoc from './components/Hoc'
import Composition from './components/Composition'
import Composition2 from './components/Composition2'
import HookTest from './components/HookTest'
import ContextTest from './components/ContextTest'
import AntdForm from './components/AntdForm'
import KForm from './components/KForm'
import ReduxTest from './components/ReduxTest'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName
  }
  render() {
    const name = 'Jerry'
    const user = {
      firstName: 'tom',
      lastName: 'jerry'
    }
    const jsx = <p>hello,jerry</p>
    return (
      <div>
        {/* 表达式 */}
        {/* <h1>{name}</h1> */}
        {/* <h1>{this.formatName(user)}</h1> */}

        {/* 属性 */}
        {/* <img src={logo} style={{width:"100px"}}/> */}

        {/* jsx也是表达式 */}
        {/* {jsx} */}

        {/* <Welcome1 name="some content"></Welcome1> */}
        {/* <Welcome2 name="some content2"></Welcome2> */}
        {/* <Clock></Clock> */}
        {/* <StateTest></StateTest> */}
        {/* <Cart title="商品列表" />
        <AntdTest />
        <Hoc />
        <Composition color="pink" />
        <Composition2 />
        <HookTest />
        <ContextTest /> */}
        <AntdForm />
        <KForm />
        <Provider store={store}>
          <ReduxTest />
        </Provider>
      </div>
    )
  }
}

export default App
