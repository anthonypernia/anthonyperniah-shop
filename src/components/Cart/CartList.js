import React from "react";
import {CartContext} from "../Context/CartContext";
import {CartItemList} from "./CartItemList";
import "./CartList.css"
import { orderCreator } from "../../Orders/orderCreator"

function CartList() {
    const {products , removeProduct, clearCart, totalPrice, updateOrder, order} = React.useContext(CartContext);


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
        <button onClick={()=>orderCreator(products, order, updateOrder, totalPrice)} className="btn btn-primary cart-item-list-button">Avanzar con la compra</button>
        </div>
        
        </React.Fragment>
    );

    }

export {CartList};