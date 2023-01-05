import React, {Component} from "react";

class Counter extends Component{
    state = {
        count: 0,
    }

    render(){
        return(
            <>
                <span>{this.formatCount()}</span>
                <button onClick={()=>this.setState({ count: this.state.count + 1})} className="btn btn-primary" >increment</button>
            </>
        );
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count ;
     }
}

export default Counter;
