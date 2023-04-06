function Productitem({products}){

    
   return(
        <div className="productItem">
                <div className="itemName">{products.title}</div>
                <div className="itemPic">
                      <img src={process.env.PUBLIC_URL+`/images/${products.image}`} alt="" />
                </div>
                <div className="itemMeta">
                    <div className="itemPrice">${products.price}</div>
                    <button className="cartButton">Add to Cart</button>
                </div>
            </div>
        
    )
}

export default Productitem;