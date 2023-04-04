function Cartitem(){
    return(
        <>
<div className="cartList">
               
               <div className="cartItem">
                <div className="itemPic">
                  <img src="https://place-hold.it/60x60" alt="" />
                </div>
                <div class="itemInfo">
                  <p>Product name</p>
                  <div class="cartUpdater">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </div>
                </div>
                <div class="itemPrice">50</div>
               </div>
               
            
           </div>
           
           <div class="cartTotal">Total : 47547</div>
           
          <div class="cartFooter">
            <button class="clear">
              Clear Cart
            </button>
            <button class="checkout">Checkout</button>
          </div>

          
          
          
           </>
       
        
    

    )
}

export default Cartitem;
