import React from 'react'
import './Square.css';

export default function Square ({ value, change, index }) {
  return (
    <div>
      <button className="square"
        onClick={() => { change(index) }}>
        {value}
      </button>
    </div>
  )
}