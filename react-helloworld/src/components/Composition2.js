import React from 'react'

const Api = {
  getUser() {
    return { name: 'Jerry', age: 20 }
  }
}

function Fetcher(props) {
  const user = Api[props.name]()
  //children的高级用法
  return props.children(user)
}

function Filter({ children, type }) {
  return (
    <div>
      {React.Children.map(children, child => {
        if (child.type != type) {
          return
        }
        return child
      })}
    </div>
  )
}

function RadioGrounp(props) {
  return (
    <div>
      {React.Children.map(props.children, child => {
        //vdom不可更改，克隆一个新的
        return React.cloneElement(child, { name: props.name })
      })}
    </div>
  )
}

function Radio({ children, ...rest }) {
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  )
}

export default function() {
  return (
    // <Fetcher name="getUser">
    //   {({ name, age }) => (
    //     <p>
    //       {name} - {age}
    //     </p>
    //   )}
    // </Fetcher>
    // 过滤器，可以过滤指定标签 过滤h1
    // <Filter type="h1">
    //   <h1>react</h1>
    //   <p>ppp</p>
    //   <h1>react2</h1>
    //   <h2>hello</h2>
    // </Filter>
    <RadioGrounp name="mvvm">
      <Radio value="vue">vue</Radio>
      <Radio value="react">react</Radio>
      <Radio value="angular">angular</Radio>
    </RadioGrounp>
  )
}
