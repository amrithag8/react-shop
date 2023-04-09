import {Link} from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
function Header(){

    const {state:{cart}}=useContext(AppContext);

    const cartCount=cart.reduce((acc, curr)=>{
        return acc+curr.count;
      },0);
      
    return(
        <div className="appHeader">
        <h1>React Shop</h1>
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">({cartCount})Cart</Link></li>
        </ul>
        </div>
    )
}

export default Header;