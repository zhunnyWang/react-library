import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { MyContext } from '../MyContext'
import { connect } from '../react-redux';

const mapStateToProps = (state, props) => {
    return {
        themeColor: state.themeColor,
        ...props
    }
}

class Content extends Component {
  static contextType = MyContext
//   constructor(){
//       super()
//       this.state = {themeColor: ''}
//   }
  
//   componentWillMount() {
//       const {subscribe} = this.context.store
//       this._updateThemeColor()
//       subscribe(() => this._updateThemeColor())
//   }

//   _updateThemeColor(){
//       const { getState } = this.context.store
//       const state = getState()
//       this.setState({themeColor: state.themeColor})
//   }
  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

Content = connect(mapStateToProps)(Content)

export default Content