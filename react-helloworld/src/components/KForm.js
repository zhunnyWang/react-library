import React, { Component } from 'react'
import { Input, Button } from 'antd'

//创建一个高阶组件，扩展现有表单，事件处理，数据收集，校验
function kFromCreate(Comp) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.options = {}
      this.state = {}
    }

    handleChange = e => {
      const { name, value } = e.target
      console.log(name, value)
      this.setState({ [name]: value }, () => {
        //确保值发生变化再校验
        this.validateField(name)
      })
    }

    validateField = field => {
      const rules = this.options[field].rules
      //任意一项失败返回false
      const ret = !rules.some(rule => {
        if (rule.required) {
          if (!this.state[field]) {
            //校验失败
            this.setState({
              [field + 'Message']: rule.message
            })
            return true
          }
        }
      })
      if (ret) {
        this.setState({
          [field + 'Message']: ''
        })
      }

      return ret
    }

    //校验所有函数
    validate = cb => {
      const rets = Object.keys(this.options).map(field =>
        this.validateField(field)
      )
      const ret = rets.every(v => v == true)
      cb(ret, this.state)
    }
    //创建input包装器
    getFiledDec = (field, option) => {
      this.options[field] = option
      return InputComp => (
        <div>
          {React.cloneElement(InputComp, {
            name: field,
            value: this.state[field] || '',
            onChange: this.handleChange
          })}
          {this.state[field + 'Message'] && (
            <p style={{ color: 'red' }}>{this.state[field + 'Message']}</p>
          )}
        </div>
      )
    }
    render() {
      return <Comp getFiledDec={this.getFiledDec} validate={this.validate} />
    }
  }
}

@kFromCreate
class KForm extends Component {
  onSubmit = () => {
    this.props.validate((isValid, data) => {
      if (isValid) {
        //提交登陆
        console.log('登录', data)
        //后续登录逻辑
      } else {
        alert('登录失败')
      }
    })
  }
  render() {
    const { getFiledDec } = this.props
    return (
      <div>
        {getFiledDec('uname', {
          rules: [{ required: true, message: '用户名必填' }]
        })(<Input />)}
        {getFiledDec('pwd', {
          rules: [{ required: true, message: '密码必填' }]
        })(<Input type="password" />)}
        <Button onClick={this.onSubmit}>按钮</Button>
      </div>
    )
  }
}

export default KForm
