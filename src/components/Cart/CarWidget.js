import React from "react";
import "./CartWidget.css"

function CartWidget({count}) {

    return (
        <div className="cart-widget">
            <img className="img-navbar-cart" alt="" src="https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/img/cart_shop.png?raw=true"/>  
            <p className="cart-widget-text">{count}</p>
        </div>
    )
};


export {CartWidget}