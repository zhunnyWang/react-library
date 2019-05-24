import React, { useContext } from 'react'

//创建上下文
const myContext = React.createContext()
const { Provider, Consumer } = myContext

function Child(prop) {
  return <div>Child:{prop.foo}</div>
}

function Child2() {
  const ctx = useContext(myContext)
  return <div>Child2:{ctx.foo}</div>
}

//使用class指定静态contextType

class Child3 extends React.Component {
  static contextType = myContext
  render() {
    return <div>Child3:{this.context.foo}</div>
  }
}
export default function ContextTest() {
  return (
    <div>
      <Provider value={{ foo: 'bar' }}>
        {/* 消费方法一 Consumer*/}
        <Consumer>{value => <Child {...value} />}</Consumer>
        {/* 消费方法二 hook*/}
        <Child2 />
        {/* 消费方式三 contextType*/}
        <Child3 />
      </Provider>
    </div>
  )
}
