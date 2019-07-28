import React,{useState} from "react"
import {render} from "react-dom"

import {Link, Router} from "@reach/router"
import useHomePage from "./useHomepage"
import useCart from "./useCart";

const Shopping = ()=>
{
  const [noOfCartItems,HomePage] = useHomePage(0)
  const [CartDude] = useCart(noOfCartItems);

  console.log("reneder", noOfCartItems)
    return(
        
<div id="shopping">
    <Router>
        <HomePage path = "/"/>
        <CartDude path = "/Cart"/>
    </Router>

</div>  
  )
}

render(<Shopping/>, document.getElementById("root"))