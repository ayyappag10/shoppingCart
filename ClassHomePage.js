import React from "react"
import {render} from "react-dom"
import {Link, Router} from "@reach/router"


class ClassHomePage extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
        }
        this.addClickHandler = this.addClickHandler.bind(this)
    }
    addClickHandler(){
        this.props.prntCountCallback(this.props.count + 1)    
    }

    render(){
        console.log("indisee home page redner")
        return(
            <div>
                <button
                onClick= {this.addClickHandler}
                >
                    Add items
                </button>
                <div>
                <Link to="/cart">
                    Cart ({this.props.count})
                </Link>
                </div>
            </div>
        )
    }

}

export default ClassHomePage;