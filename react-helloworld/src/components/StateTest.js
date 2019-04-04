import React, { Component } from 'react'

export default class StateTest extends Component {
    //驱动变化组件状态的值必须放在state中
    state = {
        counter: 1
    }


    componentDidMount() {
        //1.直接修改状态值不能生效
        // this.state.counter += 1;

        //2.批量执行，这样是不行的
        //setState 参数，可以为obj 或者函数
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        //函数式写法，批量执行
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
        
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}
