import React from 'react'

export default function Cart ({ data, minus, add }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>商城数量</th>
          </tr>
        </thead>
        <tbody>
          {data.map(good => (
            <tr key={good.id}>
              <td>{good.text}</td>
              <td><button onClick={() => { minus(good) }}>-</button>{good.count}<button onClick={() => { add(good) }}>+</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
