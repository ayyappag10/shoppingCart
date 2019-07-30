import React,{useState,useEffect} from "react"

import {Link, Router} from "@reach/router"

const useHomepage = ()=>
{
    const [count, setCount] = useState(0);    

function handleAddItems(){
    setCount(count + 1);
}


const HomePage=()=>{return (

<div id="shopping">
        <div id="navBar">
              <h2>  home</h2>

        <div>
            <Link to="/Cart">
                cart({count})
            </Link>
            </div>

            <button onClick={handleAddItems}>
        add items
      </button>
        </div>
            <h1>                hello shopper
            </h1>
</div>  )
}
return [count,setCount, HomePage]
}
export default useHomepage;