import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from "../store/user-saga.redux";

function Home () {
  return (
    <div>
      <h3>课程列表</h3>
      <ul>
        <li>
          <Link to="/detail/web">Web架构师</Link>
        </li>
        <li>
          <Link to="/detail/python">Python架构师</Link>
        </li>
      </ul>
    </div>
  )
}

function Detail (props) {
  console.log(props)
  return (
    <div>
      当前课程：{props.match.params.course}
      <button onClick={props.history.goBack}>后退</button>
    </div>

  )
}

//当前用户信息,路由嵌套
function About () {
  return (
    <div>
      <h3>个人中心</h3>
      <ul>
        <li>
          <Link to='/about/me'>个人信息</Link>
        </li>
        <li>
          <Link to='/about/order'>订单查询</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/about/me' component={() => <div>Me</div>}></Route>
        <Route path='/about/order' component={() => <div>order</div>}></Route>
        <Redirect to='about/me'></Redirect>
      </Switch>
    </div>
  )
}
function NoMatch ({ location }) {
  return <div>404,{location.pathname}不存在</div>
}

//路由守卫
//希望的用法：<PrivateRoute path='/about' ...>

const PrivateRoute = connect(state => ({ isLogin: state.user.isLogin }))(
  ({ component: Comp, isLogin, ...rest }) => {
    return (
      <Route {...rest} render={
        props => isLogin ? (<Comp />) : (
          <Redirect to={{
            pathname: '/login',
            state: { redirect: props.location.pathname }
          }}
          />
        )
      }
      />
    )
  }
)

const Login = connect(
  state => ({
    isLogin: state.user.isLogin,
    loading: state.user.loading,
    error: state.user.error
  }),
  { login }
)(({ location, isLogin, loading, login, error }) => {
  const redirect = location.state.redirect || "/";
  const [uname, setUname] = useState("")
  if (isLogin) {
    return <Redirect to={redirect} />;
  }
  return (
    <div>
      <p>用户登录</p>
      <hr />
      {/**登录错误信息展示 */}
      {error && <p>{error}</p>}
      <input type="text"
        onChange={e => setUname(e.target.value)}
        value={uname} />
      <button onClick={() => login(uname)} disabled={loading}>
        {loading ? "登录中..." : "登录"}
      </button>
    </div>
  )
})

export default function RouteSample () {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div>
            <Link to='/'>首页</Link>
            <Link to='/about'>关于</Link>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/detail/:course' component={Detail} />
            <PrivateRoute path='/about' component={About} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}
