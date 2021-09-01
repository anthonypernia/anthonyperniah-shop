import React from "react";
import {cartContext} from "../context/CartContext"


function Cart(){
    const {products , setProducts} = React.useContext(cartContext);
    console.log(products.product )
    console.log(products.dataCartCount)
    return(
        <div>
            <h1>Product = {products.product.title}</h1>
            <h2>Price = {products.product.price}</h2>
            <h3>Quantity = {products.dataCartCount}</h3>
        </div>
    )
}

export {Cart};
