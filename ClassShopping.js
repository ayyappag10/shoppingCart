import React from "react"
import {render} from "react-dom"
import {Link, Router} from "@reach/router"
import ClassHomePage from "./ClassHomePage"
import ClassCart from "./ClassCart"


class ClassShopping extends React.Component{
    //constructro
    constructor()
    {
        super()
        this.state ={
            itemsCount: 0
        }
        this.handleCountChnage = this.handleCountChnage.bind(this)
    }

    handleCountChnage(count){
        console.log("inside handle callback", count)
        this.setState(
            {
                itemsCount: count
            }
        )
    }

    render(){
        console.log("indise class shopping render", this.state.itemsCount)
        return(
            <div>
            <h1>
                welcome to ayozan
            </h1>
            <Router>
            <ClassCart path="/cart" count={this.state.itemsCount} prntCountCallback={this.handleCountChnage}></ClassCart>
            <ClassHomePage path="/" count = {this.state.itemsCount} prntCountCallback={this.handleCountChnage}></ClassHomePage>
            </Router>
            </div>
        )
    }
}

render(<ClassShopping/>, document.getElementById("root"))