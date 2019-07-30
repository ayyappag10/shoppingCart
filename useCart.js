import React,{useState, useEffect} from "react"
// import {render} from "react-dom"
import {Link} from "@reach/router"

const useCart = ()=>
{
  
  const [count, setCount] = useState(0)

  function handleRemoveItems(){
    if(count)
    {
      setCount(count - 1);
    }
  }
    const Cart =  ()=>(
    <div id="cart">
        <h2>cart items</h2>
        <div>
        <Link to="/">
            home
        </Link>
        </div>
        <button
        onClick= {handleRemoveItems}
        >
          remove items
        </button>
        <p>You have {count? count : "no"} times in cart</p>
      
</div>  
  )
  return [count,setCount,Cart]

}

export default useCart;

// render(<Cart/>, document.getElementById("root"))