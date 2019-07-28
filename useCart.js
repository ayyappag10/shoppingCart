import React,{useState, useEffect} from "react"
// import {render} from "react-dom"
import {Link} from "@reach/router"

const useCart = (props)=>
{
  const [count, setCount] = useState(props)

  useEffect(
    
    ()=>setCount(props)
    ,
    [props]
  )

  function handleRemoveItems(){
    if(count)
    {
      setCount(count - 1);
    }
  }

  console.log(props)
    const Cart =  ()=>(
    <div id="cart">
        cart items
        <Link to="/">
            home
        </Link>
        <button
        onClick= {handleRemoveItems}
        >
          remove items
        </button>
        <p>You have {count? count : "no"} times in cart</p>
      
</div>  
  )
  return [Cart]

}

export default useCart;

// render(<Cart/>, document.getElementById("root"))