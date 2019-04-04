import React, { Component } from 'react'

export default class CartSample extends Component {

    //状态初始化放在构造其中
    constructor(props) {
        super(props);
        this.state = {
            goods: [
                { id: 1, text: '《你不知道的Javascript》', price: 80 },
                { id: 2, text: '《算法导论》', price: 100 },
                { id: 3, text: '《剑指offer》', price: 50 }
            ],
            text: "",
            price: "",
            cart: []
        }
        this.addGood = this.addGood.bind(this);
    }

    //为什么要赋给textCHange一个箭头函数
    textChange = (e) => {
        this.setState({ text: e.target.value })
    }

    priceChage = (e) => {
        this.setState({ price: e.target.value })
    }

    addGood() {
        this.setState(prevState => {
            return {
                goods: [...prevState.goods, {
                    id: prevState.goods.length + 1,
                    text: '《' + prevState.text + '》',
                    price: prevState.price

                }]
            }
        })
    }

    addToCart = (good) => {
        let newCart = [...this.state.cart];
        const idx = newCart.findIndex(c => c.id === good.id);
        const item = newCart[idx];
        if (item) {
            newCart.splice(idx, 1, { ...item, count: item.count + 1 })
        } else {
            newCart.push({ ...good, count: 1 })
        }
        this.setState({ cart: newCart });
    }

    minus = (good) => {
        let newCart = [...this.state.cart];
        const idx = newCart.findIndex(c => c.id === good.id);
        const item = newCart[idx];
        if (item.count > 1) {
            console.log(item.count);
            newCart.splice(idx, 1, { ...item, count: item.count - 1 })
        }
        else if (item.count == 1) {
            newCart.splice(idx, 1);
        }
        this.setState({ cart: newCart });
    }

    add = (good) => {
        let newCart = [...this.state.cart];
        const idx = newCart.findIndex(c => c.id === good.id);
        const item = newCart[idx];
        newCart.splice(idx, 1, { ...item, count: item.count + 1 })
        this.setState({ cart: newCart });
    }

    render() {
        //常量一般写在这里
        // const title = this.props.title? <h1>{this.props.title}</h1> : null
        return (
            <div>
                {/* 条件渲染 */}
                {/* {title} */}
                {/* 短路逻辑 */}
                {this.props.title && <h1>{this.props.title}</h1>}

                {/* 列表渲染 */}
                <div>
                    <label htmlFor="name">名称</label>
                    <input type="text" value={this.state.text} onChange={this.textChange} id="name" />
                    <label htmlFor="price">价格</label>
                    <input type="text" value={this.state.price} onChange={this.priceChage} id="price" /> |
                    <button onClick={this.addGood}>添加商品</button>
                </div>
                <ul>
                    {this.state.goods.map(good => <li key={good.id}>
                        <span>{good.text}</span> |
                    <span>{good.price}</span>元
                    <button onClick={() => this.addToCart(good)}>加入购物车</button>
                    </li>)}
                </ul>

                {/* 购物车 */}
                <Cart data={this.state.cart} title="购物车" minus={this.minus} add={this.add}></Cart>
            </div>
        )
    }
}
function Cart({ data, title, minus, add }) {
    return (
        <div>
            <h1>{title}</h1>
            <table>
                <tbody>
                    {data.map((d) => (
                        <tr key={d.id}>
                            <td>{d.text}</td>
                            <td>
                                <button onClick={() => minus(d)}>-</button>
                                {d.count}
                                <button onClick={() => add(d)}>+</button>
                            </td>
                            <td>{d.count * d.price}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}