import { useContext } from "react";
import { AppContext } from "../App";

function Cartitem({items}){

  console.log("items are", items);
  const {state:{cart}, dispatch}=useContext(AppContext);

function increamentHandler(id){
  dispatch({type:"ADD-COUNT", payload:id})
}


function decrementHandler(id){
  if(items.count>1){
    dispatch({type: "REDUCE_COUNT", payload: id});
  }
  else 
  {
    dispatch({type: "REMOVE_ITEM", payload: id});
  }
}

    return(
        <>
<div className="cartList">
               
               <div className="cartItem">
                <div className="itemPic">
                  <img src={process.env.PUBLIC_URL+`/images/${items.image}`} alt="" />
                </div>
                <div className="itemInfo">
                  <p>{items.title}</p>
                  <div className="cartUpdater">
                    <button onClick={()=>decrementHandler(items.id)}>-</button>
                    <div>{items.count}</div>
                    <button onClick={()=>increamentHandler(items.id)}>+</button>
                  </div>
                </div>
                <div className="itemPrice">${items.price}</div>
               </div>
               
            
           </div>
           
           

          
          
          
           </>
       
        
    

    )
}

export default Cartitem;
