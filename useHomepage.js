import React,{useState} from "react"

import {Link, Router} from "@reach/router"

const useHomepage = (props)=>
{
const [count, setCount] = useState(props);    

function handleAddItems(){
    setCount(count + 1);
}

const HomePage=()=>{return (
<div id="shopping">
        <div id="navBar">
            <Link to="/">
                home
            </Link>

            <Link to="/Cart">
                cart
            </Link>

            <button onClick={handleAddItems}>
        add items
      </button>
        </div>
            <h1>                hello shopper
            </h1>
</div>  )
}
return [count, HomePage]
}
export default useHomepage;