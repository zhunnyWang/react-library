import React, { Component } from 'react'
import { connect } from 'react-redux';
import { add, minus, asyncAdd } from '../store/count.redux'

const mapStateToProps = state => ({ num: state.counter })
const mapDispatchToProps = { add, minus, asyncAdd }

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class ReduxTest extends Component {
  render () {
    const { num, add, minus, asyncAdd } = this.props
    return (
      <div>
        <p>{num}</p>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={asyncAdd}>asyncAdd</button>
      </div>
    )
  }
}

export default ReduxTest
