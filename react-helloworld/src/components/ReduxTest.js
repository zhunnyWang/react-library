import React from 'react'
// import store from '../store'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ num: state })

const mapDispacthToProps = {
  add: () => ({ type: 'add' }),
  minus: () => ({ type: 'minus' })
}

// export default function ReduxTest() {
//   return (
//     <div>
//       <p>{store.getState()}</p>
//       <div>
//         <button onClick={() => store.dispatch({ type: 'minus' })}>-</button>
//         <button onClick={() => store.dispatch({ type: 'add' })}>+</button>
//       </div>
//     </div>
//   )
// }
// function ReduxTest({ num, add, minus }) {
//   return (
//     <div>
//       <p>{num}</p>
//       <div>
//         <button onClick={minus}>-</button>
//         <button onClick={add}>+</button>
//       </div>
//     </div>
//   )
// }

// export default connect(
//   mapStateToProps,
//   mapDispacthToProps
// )(ReduxTest)

//装饰器写法
@connect(
  mapStateToProps,
  mapDispacthToProps
)
class ReduxTest extends React.Component {
  render() {
    const { num, minus, add } = this.props
    return (
      <div>
        <p>{num}</p>
        <div>
          <button onClick={minus}>-</button>
          <button onClick={add}>+</button>
        </div>
      </div>
    )
  }
}

export default ReduxTest
