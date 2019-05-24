import React from 'react'

function Dialog(props) {
  return (
    <div style={{ border: `4px solid ${props.color || 'blue'}` }}>
      {/* 匿名插槽 children这个属性名是固定的 children可以是任意合法的js表达式*/}
      {props.children}
      {/* 相当于具名插槽 */}
      <div className="footer">{props.footer}</div>
    </div>
  )
}

export default function WelcomeDialog(props) {
  const footer = <button onClick={() => alert('确定')}>确定</button>
  return (
    <Dialog {...props} footer={footer}>
      <h1>相当于Vue的Slot</h1>
      <p>这里是结构，Dialog为样式</p>
    </Dialog>
  )
}
