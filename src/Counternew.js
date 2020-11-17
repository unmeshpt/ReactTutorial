import React from 'react'
import './index.css'

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
                <p>Unmesh <span className="spancolor">{this.state.counter}</span></p>
                
            </div>
        )
    }
}
export default Counternew