import React, { useState, useEffect } from 'react'

export default function EffectHook () {
  const [count, setCount] = useState(0)
  //副作用钩子会在每次渲染时都执行，第二个参数指定依赖数组，以后只有count发生变化才会执行这个useEffect
  useEffect(() => {
    document.title = `您点击了${count}次`
  }, [count])

  //如果仅打算执行一次，传递第二个参数为[]
  //类似于componentDidMount
  //useEffect可以多个，便于我们把不同的业务逻辑分为多个
  useEffect(() => {
    console.log('在这里仅一次的Api调用');
  }, [])

  return (
    <div>
      <p>点击了：{count}</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}
