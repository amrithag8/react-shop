import Productitem from "./Productitem";
import { useContext } from "react";
import {AppContext} from "../App";

function Productgallery(){

    
    const{state:{product}}= useContext(AppContext);
    
    return(
        <div className="productGallery">
           {
            product.map((item)=>{
return <Productitem products={item}/>
            })
           } 
        </div>
    )
}

export default Productgallery;