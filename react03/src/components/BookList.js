import React, { Component, PureComponent } from 'react'

//容器组件
export default class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        books: [
          { name: '《你不知道的javascript》', price: 50 },
          { name: '《ES6标准入门》', price: 99 }
        ]
      })
    }, 1000)
    setTimeout(() => {
      this.setState({
        books: [
          { name: '《哈利波特》', price: 25 },
          { name: '《ES6标准入门》', price: 99 }
        ]
      })
    }, 2000)
  }
  render () {
    return (
      <div>
        {this.state.books.map((book, index) => <Book key={index} {...book}></Book>)}
      </div>
    )
  }
}


// class Book extends Component {
//   shouldComponentUpdate ({ name, price }) {
//     if (this.props.name === name && this.props.price === price) {
//       return false
//     }
//     return true
//   }
//   render () {
//     console.log('渲染了')
//     return (
//       <div>
//         <p>书名：{this.props.name}</p>
//         <p>价格：{this.props.price}</p>
//       </div>
//     )
//   }
// }

// class Book extends PureComponent {
//   render () {
//     console.log('渲染了')
//     return (
//       <div>
//         <p>书名：{this.props.name}</p>
//         <p>价格：{this.props.price}</p>
//       </div>
//     )
//   }
// }

// 展示组件
// function Book ({ name, price }) {
//   console.log('渲染了')
//   return (
//     <div>
//       <p>书名：{name}</p>
//       <p>价格：{price}</p>
//     </div>
//   )
// }

const Book = React.memo(
  function ({ name, price }) {
    console.log('渲染了')
    return (
      <div>
        <p>书名：{name}</p>
        <p>价格：{price}</p>
      </div>
    )
  }
)