import React from "react";
import {CartContext} from "../../Context/cartContext";
import "./Cart.css"
import { Link } from 'react-router-dom';
import {CartList} from "./CartList";

function Cart(){
    const { countProducts } = React.useContext(CartContext);

    return(
        <div className="container">
            {countProducts() > 0 ? <CartList /> : <div className="row" > 
                                                    <p className="cart-products-title">The cart is empty</p> 
                                                    <Link to={`/`} className="btn btn-primary ">Return to Home</Link>
                                                    </div> }
            
            

        </div>
    )
}

export {Cart};



