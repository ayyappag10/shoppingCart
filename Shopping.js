import React,{useState,useEffect} from "react"
import {render} from "react-dom"

import {Link, Router} from "@reach/router"
import useHomePage from "./useHomepage"
import useCart from "./useCart";

const Shopping = ()=>
{
  // const [parentCount, setParentCount] = useState(0)
  const [homePageItemCount,setHomePageCount,HomePage] = useHomePage()

  const [cartItemCount,setCartItemCount,CartDude] = useCart();

  useEffect(
    ()=>{setHomePageCount(cartItemCount)},
    [cartItemCount]
  )

  useEffect(
    ()=>{setCartItemCount(homePageItemCount)},
    [homePageItemCount]
  )

  
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