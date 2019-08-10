import React, { Component } from "react";
import styles from './login.css'
import { Login } from 'ant-design-pro';
import { connect } from 'dva';

const { UserName, Password, Submit } = Login

@connect()
class MyLogin extends Component {
  onSubmit = (err, values) => {
    console.log("用户输入：", values);
    if (!err) {
      // 校验通过，提交登录
      this.props.dispatch({ type: "user/login", payload: values });
    }
  };
  render () {
    return (
      <div className={styles.loginForm}>
        <h1>用户登录</h1>
        <br />
        <Login onSubmit={this.onSubmit}>
          <UserName
            name="username"
            placeholder="usernmae"
            rules={[{ required: true, message: "请输入用户名" }]}
          />
          <Password
            name="password"
            placeholder="password"
            rules={[{ required: true, message: "请输入密码" }]} />
          <Submit>登录</Submit>
        </Login>

      </div>
    )
  }
}

export default MyLogin