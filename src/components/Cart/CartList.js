import React from "react";
import {CartContext} from "../../Context/cartContext";
import {CartItemList} from "./CartItemList";
import "./CartList.css"


function CartList() {
    const {products , removeProduct, clearCart} = React.useContext(CartContext);
    return (
        <React.Fragment>
        { products.length >0  && (products.map(product => (
            product.quantity > 0 && (
                        <div className="row" key = {product.id}>
                            <CartItemList product={product} removeProduct={removeProduct}/>
                    </div>
        ))) )
        }
        <div className="cart-item-list-div">
        <button onClick={()=>clearCart()} className="btn btn-primary cart-item-list-button">Remove all items from your cart</button>
        </div>
        
        </React.Fragment>
    );

    }

export {CartList};