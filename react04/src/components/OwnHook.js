import React, { useState, useEffect } from 'react'

//自定义hook是一个函数，名称用use开头，函数内部可以调用其他钩子
function useAge () {
  const [age, setAge] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setAge(20)
    }, 2000)
  }, [age])
  return age
}
export default function OwnHook () {

  const age = useAge()
  return (
    <div>
      <p>年龄：{age ? age : 'loading'}</p>
    </div>
  )
}
