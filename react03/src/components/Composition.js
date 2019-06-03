import React from 'react';

//类似于Vue的插槽
//Dialog作为容器不关心内容和逻辑 cildren可以是任意的js表达式
function Dialog (props) {
  return (<div style={{ border: `1px solid ${props.color || "blue"}` }}>
    {props.children}
    <footer>{props.footer}</footer>
  </div>)
}

function WelcomeDialog (props) {
  console.log(props)
  return (
    <Dialog {...props}>
      <h1>欢迎光临</h1>
      <p>感谢使用React</p>
    </Dialog>
  )
}
const Api = {
  getUser () {
    return { name: 'jerry', age: 20 }
  }
}

function Fetcher (props) {
  const user = Api[props.name]()
  console.log(user)
  return props.children(user)
}

function Filter (props) {
  console.log(props.children)
  return (
    <div>
      {/* {props.children.filter(tag => tag.type === props.type)} */}
      {/* React.Children中提供了map方法 有异常处理，比用原生的更加安全*/}
      {React.Children.map(props.children, child => {
        if (child.type !== props.type) {
          return
        }
        return child
      })}
    </div>
  )
}

function GroupRadio (props) {
  return <div>
    {React.Children.map(props.children, child => {
      return React.cloneElement(child, { name: props.name })
    })}
  </div>
}

function Radio ({ children, ...rest }) {
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  )

}

export default function () {
  //footer是个具名slot children是个固定的写法
  const footer = <button onClick={() => { alert('1') }}>footer</button>
  return (
    // <WelcomeDialog color='green' footer={footer}></WelcomeDialog>
    // <div>
    //   <Fetcher name="getUser">
    //     {({ name, age }) => (
    //       <p>
    //         {name}-{age}
    //       </p>
    //     )}
    //   </Fetcher>
    // </div>
    // <div>
    //   {/**过滤器 */}
    //   <Filter type='p'>
    //     <h1>过滤</h1>
    //     <p>留下</p>
    //     <h1>过滤</h1>
    //     <p>留下2</p>
    //   </Filter>
    // </div>
    <GroupRadio name="mvvm">
      <Radio value="vue">vue</Radio>
      <Radio value="angular">angular</Radio>
      <Radio value="react">react</Radio>
    </GroupRadio>
  )
}
