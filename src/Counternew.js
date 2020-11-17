import React from 'react'

class Counternew extends React.Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0
        } 
    }

    incriment(){
        setTimeout(() => {
            this.setState((prev, props)=>({counter:prev.counter+1}))
        }, 1000);
        
        
    }

    render() {
        this.incriment()
        return (
            <div>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}
export default Counternew