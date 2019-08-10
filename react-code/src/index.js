// import React from 'react';
import React, { Component } from './myreact'
// import ReactDOM from 'react-dom';
import ReactDOM from './myreact-dom'

function Comp (props) {
  return (
    <h2>{props.name}</h2>
  )
}

class Comp2 extends Component {
  render () {
    return (
      <div>
        <h2 >{this.props.name}</h2>
      </div>
    )
  }
}

const users = [
  { name: 'zhunny', age: 20 },
  { name: 'guguji', age: 20 },
  { name: 'nini', age: 30 }
]
const jsx = (
  <div id='demo' style={{ color: 'red', border: '1px solid #eee' }} onClick={() => alert('click')}>
    <h1 className="hs">JSX</h1>
    <Comp name="函数组件"></Comp>
    <Comp2 name="类组件"></Comp2>
    <ul>
      {users.map(user => <li key={user.name}>{user.name}</li>)}
    </ul>
  </div>
)

console.log(jsx)

ReactDOM.render(jsx, document.getElementById('root'));
