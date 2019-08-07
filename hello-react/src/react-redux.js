import React, { Component } from 'react'
import { MyContext } from './MyContext'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextType = MyContext
    
    state = { allProps: {} }

    
    componentWillMount() {
        const { subscribe } = this.context.store
        this._updateProps()
        subscribe(() => this._updateProps())
    }

    _updateProps(){
        const { getState, dispatch } = this.context.store
        let stateProps = mapStateToProps
        ? mapStateToProps(getState(), this.props)
        : {}
        let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(dispatch, this.props)
        : {}
        this.setState({
            allProps:{
                ...stateProps,
                ...dispatchProps,
                ...this.props
            }
        })
    }
    

    render () {
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect
} 