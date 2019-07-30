import React from "react"
import {render} from "react-dom"
import { Link } from "@reach/router";

class ClassCart extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            // cartItemCount: 0
        }
        this.removeItemsHandler = this.removeItemsHandler.bind(this)
    }

    removeItemsHandler(){
        this.props.prntCountCallback(this.props.count? this.props.count - 1 : 0)
    }

    render(){
        console.log("inside cart render")
        return(
            <div>
            <div>
                <h2>cart items</h2>
            </div>
            <div>
                <Link to="/">
                    Home
                </Link>
            </div>
            
            <div>
                <button
                onClick={this.removeItemsHandler}>
                    remove itmes
                </button>
            </div>

            <div>
                you have <b>{this.props.count ? this.props.count: "no"} </b>items in your cart
            </div>
            </div>
        )
        
      
    }
    
}
export default ClassCart;