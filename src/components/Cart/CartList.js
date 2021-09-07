import React from "react";
import {cartContext} from "../../context/CartContext";


function CartList() {
    const {products , removeProduct} = React.useContext(cartContext);
    return (
        <React.Fragment>
        { products.length >0  && (products.map(product => (
            product.quantity > 0 && (
                        <div className="row" key = {product.id}>
                        <div className="col-md-6">
                            <img className="img-cart" src = {product.picture_url}/>
                        </div>
                        <div className="col-md-6">
                            <p className="cart-products-title">Products in Cart</p>
                            <br/>
                            <p className="cart-products-subtitle">Product = {product.title}</p> 
                            <p className="cart-products-subtitle">Price = {product.price * product.quantity} ({product.price} U)</p> 
                            {product.quantity>0 && <button className="cart-products-subtitle" onClick={() => removeProduct(product)}>Remove</button>}
                        </div>
                        
                    </div>
        ))) )
        }
        </React.Fragment>
    );

    }

export {CartList};