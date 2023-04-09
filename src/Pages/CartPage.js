import Cartitem from "../Components/Cartitem";
import { useContext } from "react";
import { AppContext } from "../App";
function Cartpage(){

    const {state:{cart}, dispatch}=useContext(AppContext);

    const cartTotal=cart.reduce((acc, curr)=>{
return acc+curr.price*curr.count;
    },0);

    

    function checkoutHandler(){
      alert("You are checked out to payments page");
    }


    function clearCartHandler(){
      dispatch({type: "CLEAR_CART"})
    }
    return(
        <div className="cart">
           <h3>Cart</h3>
           {
            cart.map((item)=>{
                return  <Cartitem items={item}/>
            })
           }


           
           {
            cart.length?(
            <>
            <div className="cartTotal">Total : {cartTotal}</div>
            
            <div className="cartFooter">
              
            <button className="clear" onClick={clearCartHandler}>
              Clear Cart
            </button>
            <button className="checkout" onClick={checkoutHandler}>Checkout</button>
          </div>
          </>):(<div className="cartFooter">
<h3>Please add items to your cart</h3>
          </div>)
           }
           
          
           </div>
    )
}

export default Cartpage;