import React from "react";
import {Link, NavLink} from "react-router-dom";
import { CartWidget } from "../Cart/CarWidget";
import {cartContext} from "../../context/CartContext";

function NavBar({searchValue, setSearchValue}){
  const {countProducts} = React.useContext(cartContext);
    const onSearchValueChange = (e) => {
      console.log(e.target.value);
      setSearchValue(e.target.value);
    }
    
    return(
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={`/`}  className="navbar-brand" href="#">Anthony-Shop</Link>
              
              
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink to={`/`} className = "nav-link" activeClassName="currentCategory" href="#">Home<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/category/${1}`} className = "nav-link" activeClassName="currentCategory" href="#">Category White<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={`/category/${2}`} className = "nav-link" activeClassName=" currentCategory" href="#">Category Black<span className="sr-only">(current)</span></NavLink>
                </li>
              </ul>
                <input onChange={onSearchValueChange} value={searchValue} className="form-control col-4 mr-sm-2" type="search" placeholder="Search your T-shirt" aria-label="Search"/>
                {countProducts() > 0 && <CartWidget count = {countProducts()}/>}
                
            </div>
          </nav>
    );
};

export { NavBar };

//<Link to={`/item/${product.id}`} className="btn btn-primary">View</Link>