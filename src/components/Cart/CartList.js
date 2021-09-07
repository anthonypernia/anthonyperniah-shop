import React from "react";
import {cartContext} from "../../context/CartContext";
import {CartItemList} from "./CartItemList";


function CartList() {
    const {products , removeProduct} = React.useContext(cartContext);
    return (
        <React.Fragment>
        { products.length >0  && (products.map(product => (
            product.quantity > 0 && (
                        <div className="row" key = {product.id}>
                            <CartItemList product={product} removeProduct={removeProduct}/>
                    </div>
        ))) )
        }
        </React.Fragment>
    );

    }

export {CartList};