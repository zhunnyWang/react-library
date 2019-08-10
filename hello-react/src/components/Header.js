import React, { Component } from 'react'
import { MyContext } from '../MyContext'
import { connect } from '../react-redux';

const mapStateToProps = (state, props) => {
    return {
        themeColor: state.themeColor,
        ...props
    }
}

class Header extends Component {
  static contextType = MyContext
//   constructor(){
//       super()
//       this.state = {themeColor: ''}
//   }
  
//   componentWillMount() {
//     const {subscribe} = this.context.store
//     this._updateThemeColor()
//     subscribe(() => this._updateThemeColor())
//   }

//   _updateThemeColor(){
//       const { getState } = this.context.store
//       const state = getState()
//       this.setState({themeColor: state.themeColor})
//   }
  
  render () {
    return (
      <h1 style={{color: this.props.themeColor }}>React.js 小书 {this.context.foo}</h1>
    )
  }
}

Header = connect(mapStateToProps)(Header)

export default Header

