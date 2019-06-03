import React, { Component, PureComponent } from 'react'

export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        comments: [
          { comment: 'i am comming here', author: 'zhunny' },
          { comment: 'hello,react', author: 'Zhou' }
        ]
      })
    }, 2000)
  }
  render () {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} {...c}></Comment>)}
      </div>
    )
  }
}

// class Comment extends PureComponent {
//   render () {
//     console.log('render comment', this.props)
//     return (
//       <div>
//         <p>{this.props.comment}</p>
//         <p>{this.props.author}</p>
//       </div>
//     )
//   }
// }
/**
 * 用React.memo等价
 * memo是一个高阶组件，输入一个普通组件，得到一个更高阶的组件
 */
const Comment = React.memo(
  function (props) {
    console.log('render comment', props)
    return (
      <div>
        <p>{props.comment}</p>
        <p>{props.author}</p>
      </div>
    )
  }
)
