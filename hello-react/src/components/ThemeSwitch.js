import React, { Component } from 'react'
import { MyContext } from '../MyContext'
import { connect } from '../react-redux';

const mapStateToProps = (state, props) => {
    return {
        themeColor: state.themeColor,
        ...props
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

class ThemeSwitch extends Component {
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
//dispatch此时还没有剥离出去
  handleSwitch = (color) => {
      if(this.props.onSwitchColor){
          this.props.onSwitchColor(color)
      }
  }
  render () {
    return (
      <div>
        <button style={{ color: this.props.themeColor }}  onClick={() => this.handleSwitch('red')}>Red</button>
        <button style={{ color: this.props.themeColor }}  onClick={() => this.handleSwitch('blue')}>Blue</button>
      </div>
    )
  }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch