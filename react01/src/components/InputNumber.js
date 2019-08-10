import React, { Component } from 'react'

export default class InputNumber extends Component {
    static defaultProps = { 
        min: 1,
        max: 100,
        step: 1,
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //       value : this.props.value || 25,
    //       disabledAdd : false,
    //       disabledMinus: false
    //     }
    // }
    clickHandle = (type) => {
        const {min, max, step} = this.props;
        let value = this.state.value

        type === 'add' && (value += step)
        type === 'minus' && (value -= step)
        
        if(value > max) {
            this.setState({disabledAdd: true})
            return
        }else if(value < min){
            this.setState({disabledMinu: true})
        }

        this.setState({value,disabledAdd:false,disabledMins:false})
    }

    changeHandle = (e) =>{
        const {min, max} = this.props;
        console.log(e.target.value)
        //setState的this如果不使用箭头函数就会发生改变,不能识别0的逻辑是对的
        let value = parseInt((e.target.value.replace(/[^\d]+/g,'')).trim()) || '';
        console.log(value)

        if(value > max){
            return
        }
        this.setState({
            value
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.clickHandle('minus')} disabled={this.state.disabledMinus}>-</button>
                <input type="text" value={this.state.value + ''} onChange={this.changeHandle}/>
                <button onClick={() => this.clickHandle('add')} disabled={this.state.disabledAdd}>+</button>
                <p>{this.state.error}</p>
            </div>
        )
    }
}
