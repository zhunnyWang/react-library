import React, { Component } from 'react'
//全部导入
// import Button from 'antd/lib/button';
// import 'antd/dist/antd.css'
//按需加载
import { Button } from 'antd'

export default class AntdTest extends Component {
  render () {
    return (
      <div>
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}
