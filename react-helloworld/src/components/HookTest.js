import React, { useState, useEffect } from 'react'

function useAge() {
  const [age, setAge] = useState(0)
  setTimeout(() => {
    setAge(20)
  }, 2000)
  return age
}
export default function HookTest() {
  //状态 和 修改这个状态的函数 初始化为0
  const [count, setCount] = useState(0)

  //会在每次渲染时执行，相当于类似于componentDidMount
  useEffect(() => {
    document.title = `您点击了${count}次`
  }, [count]) //依赖于count，只有count变化才会走这个逻辑

  //如果仅打算调用一次，那么传递第二个参数[],类似于componentDidMount
  useEffect(() => {
    console.log('api调用')
  }, [])

  //多个状态

  const [age] = useState(20)
  const [fruit, setFurit] = useState('banana')
  const [fruits, setFurits] = useState(['apple', 'banana'])
  const [input, setInput] = useState('')

  return (
    <div>
      <p>点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>点击</button>

      <p>选择的水果：{fruit}</p>

      <ul>
        {fruits.map(fruit => (
          <li key={fruit} onClick={() => setFurit(fruit)}>
            {fruit}
          </li>
        ))}
      </ul>

      <p>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={() => setFurits([...fruits, input])}>新增水果</button>
      </p>
    </div>
  )
}
