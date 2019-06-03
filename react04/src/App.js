import React, { Component } from 'react'
import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook'
import OwnHook from './components/OwnHook'
import ContextTest from './components/ContextTest'
import AntdForm from './components/AntdForm';

export default class App extends Component {
  render () {
    return (
      <div>
        <AntdForm></AntdForm>
      </div>
    )
  }
}
