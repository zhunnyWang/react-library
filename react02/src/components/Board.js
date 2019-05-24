import React, { Component } from 'react'
import Square from './Square'
import './Board.css'


export default class Board extends Component {
  renderSuqare = (i) => {
    return (<Square value={this.props.squares[i]}
      change={this.props.change} index={i}></Square>)
  }
  render () {
    return (
      <div>
        <div className='board-row'>
          {this.renderSuqare(0)}
          {this.renderSuqare(1)}
          {this.renderSuqare(2)}
        </div>
        <div className='board-row'>
          {this.renderSuqare(3)}
          {this.renderSuqare(4)}
          {this.renderSuqare(5)}
        </div>
        <div className='board-row'>
          {this.renderSuqare(6)}
          {this.renderSuqare(7)}
          {this.renderSuqare(8)}
        </div>
      </div>
    )
  }
}
