import { useContext } from "react";
import { AppContext } from "../App";

function Productitem({products}){
const {state:{cart}, dispatch}=useContext(AppContext);

let cartItemsCount=cart.find((item)=>{
   return item.id===products.id
})?.count;



    function isInCart(_id){
return !!cart.find(item=>item.id===_id);
    }

    


    function cartHandler(id, price, image, title){
        
dispatch({type: "ADD_TO_CART", payload:{id, price,image, title, count:1  } })
    }
    

    function countHandler(id){
        dispatch({type:"ADD-COUNT", payload:id})
    }
   return(
        <div className="productItem">
                <div className="itemName">{products.title}</div>
                <div className="itemPic">
                      <img src={process.env.PUBLIC_URL+`/images/${products.image}`} alt="" />
                </div>
                <div className="itemMeta">
                    <div className="itemPrice">${products.price}</div>

                   {
                    isInCart(products.id)? (<button className="cartButton" onClick={()=>countHandler(products.id)}>{cartItemsCount}Added to Cart</button>):
                    (<button className="cartButton" onClick={()=>cartHandler(products.id, products.price, products.image, products.title)}>Add to Cart</button>)
                    
                } 
                </div>
            </div>
        
    )
}

export default Productitem;