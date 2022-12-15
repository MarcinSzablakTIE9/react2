import React, {Component} from "react";

class Counter extends Component{
    state = {
        count: 1
    }

    render(){
        return(
            <>
                <span>{this.formatCount()}</span>
                <button>increment</button>
            </>
        );
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count ;
     }
}

export default Counter;
