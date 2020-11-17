import React from 'react'


class Demonew extends React.Component {
    //state maintance
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            enable: false,
            changetext: "Nothing"
        }
    }

    increse = () => {
        this.setState((prev, props) => (
            { counter: prev.counter + 1 }
        ))

    }
    decrese = () => {
        this.setState((prev, props) => (
            { counter: prev.counter - 1 }
        ))

    }
    checkClicked = () => {
        this.setState((prev, props) => (
            { enable: !prev.enable }
        ))

    }
    textchangeev=(e)=>{

this.setState({changetext:e.target.value})
    }

    render() {

        return (
            <div>
                <button onClick={this.increse}>+</button>
                <button onClick={this.decrese}>-</button>
                <br />
                <input onChange={this.textchangeev} type="text" />
                <br />
                <p>{this.state.changetext}</p>
                <lable>
                    Enable
                <input type="checkbox" onClick={this.checkClicked} />
                </lable>
                <p>It is {this.state.enable ? "Enabled" : "Disabled"}</p>

                <p>You have Clicked {this.state.counter}</p>
            </div>

        )
    }
}

export default Demonew