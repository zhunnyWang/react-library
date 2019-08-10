import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/user.redux";
import { getList } from "../store/order.redux";
import { Button } from "antd";
import { useEffect } from "react";

// @connect(
//   state => ({
//     loading: state.order.loading,
//     list: state.order.list
//   }),
//   { getList }
// )
// class Order extends React.Component {
//   // componentWillMount(){
//   //   console.log('i am here')
//   //   getList()
//   // }
//   render() {
//     const { loading, list } = this.props;
//     console.log(loading);
//     console.log(list);
//     return (
//       <div>
//         <button onClick={() => getList()} disabled={loading}>
//           {loading ? "加载中..." : "加载"}
//         </button>
//         {loading ? (
//           <p>加载中...</p>
//         ) : (
//           <ul>
//             {list.map(item => (
//               <li key={item.id}>{item.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

//之前getList忘了走connect，就直接用了store中的getList，它不会主动帮你dispacth
const Order = connect(
  state => ({
    loading: state.order.loading,
    list: state.order.list
  }),
  { getList }
)(function({ loading, list, getList }) {
  useEffect(() => {
    getList()
  },[])
  return (
    <div>
      {loading ? (
        <p>加载中...</p>
      ) : (
        <ul>
          {list.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
});

function Home(params) {
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
  );
}

// 当前用户信息
function About(params) {
  return (
    <div>
      <h3>个人中心</h3>
      <div>
        <Link to="/about/me">个人信息</Link>
        <Link to="/about/order">订单查询</Link>
      </div>
      <Switch>
        <Route path="/about/me" component={() => <div>Me</div>} />
        <Route path="/about/order" component={Order} />
        <Redirect to="/about/me" />
      </Switch>
    </div>
  );
}

function NoMatch({ location }) {
  return <div>404, {location.pathname}不存在</div>;
}
// 传递进来路由器对象
function Detail(props) {
  // 1.history: 导航指令
  // 2.match: 获取参数信息
  // 3.location: 当前url信息
  console.log(props);

  return (
    <div>
      当前课程：{props.match.params.course}
      <button onClick={props.history.goBack}>后退</button>
    </div>
  );
}

// 路由守卫
// 希望用法：<PrivateRoute component={About} path="/about" ...>
const PrivateRoute = connect(state => ({ isLogin: state.user.isLogin }))(
  ({ component: Comp, isLogin, ...rest }) => {
    // 做认证
    // render:根据条件动态渲染组件
    return (
      <Route
        {...rest}
        render={props =>
          isLogin ? (
            <Comp />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { redirect: props.location.pathname }
              }}
            />
          )
        }
      />
    );
  }
);

// 登录组件
const Login = connect(
  state => ({
    isLogin: state.user.isLogin,
    loading: state.user.loading,
    error: state.user.error // 登录错误信息
  }),
  { login }
)(function({ location, isLogin, login, loading, error }) {
  const redirect = location.state.redirect || "/";
  const [uname, setUname] = useState(""); // 用户名输入状态
  if (isLogin) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <p>用户登录</p>
      <hr />
      {/* 登录错误信息展示 */}
      {error && <p>{error}</p>}
      {/* 输入用户名 */}
      <input
        type="text"
        onChange={e => setUname(e.target.value)}
        value={uname}
      />
      <button onClick={() => login(uname)} disabled={loading}>
        {loading ? "登录中..." : "登录"}
      </button>
    </div>
  );
});

export default function RouteSample() {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* 导航链接 */}
          <div>
            <Link to="/">首页</Link>
            <Link to="/about">关于</Link>
          </div>
          {/* 路由配置：路由即组件 */}
          {/* 路由匹配默认是包容性质 */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:course" component={Detail} />
            <PrivateRoute path="/about" component={About} />
            <Route path="/login" component={Login} />
            {/* 404：没有path，必然匹配 */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
