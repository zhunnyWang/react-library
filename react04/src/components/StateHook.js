import React, { useState } from 'react'

export default function StateHook () {

  //count是状态 setCount是更改count的函数 useState(initState)
  const [count, setCount] = useState(0)
  //多个状态
  const [age] = useState(20)
  const [fruit, setFruit] = useState('bananas')
  const [input, setInput] = useState("")
  const [fruits, setFruits] = useState(['bananas', 'apple'])
  return (
    <div>
      <p>点击了{count}</p>
      <button onClick={() => { setCount(count + 1) }}>点击</button>

      <p>年龄{age}</p>
      <p>水果{fruit}</p>
      <p>
        <input type='text' value={input} onChange={(e) => { setInput(e.target.value) }} />
        <button onClick={() => { setFruits([...fruits, input]); setInput("") }}>添加</button>
      </p>
      <ul>
        {fruits.map((f, i) => (<li key={i} onClick={() => setFruit(f)}>{f}</li>))}
      </ul>
    </div>
  )
}
