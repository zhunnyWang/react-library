import React, { Component } from 'react'
import { Input, Button } from 'antd'

//创建一个高阶组件：扩展现有表单、事件处理、数据收集、校验
export default class OwnForm extends Component {
  render () {
    return (
      <div>
        <Input></Input>
        <Button></Button>
      </div>
    )
  }
}
