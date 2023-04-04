import {Link} from "react-router-dom";
function Header(){
    return(
        <div className="appHeader">
        <h1>React Shop</h1>
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
        </div>
    )
}

export default Header;