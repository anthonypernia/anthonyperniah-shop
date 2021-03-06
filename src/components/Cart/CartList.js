import React from "react";
import {CartContext} from "../Context/CartContext";
import {CartItemList} from "./CartItemList";
import { Link } from "react-router-dom";
import "./CartList.css"

function CartList() {
    const {products , 
            removeProduct, 
            clearCart, 
            getOrderId,
            setOpenFormModal,
            setOpenLoadingModal,
            user} = React.useContext(CartContext);

    setOpenLoadingModal(false);     
    
    const onClickFormModal = () => {
        setOpenFormModal(true);
    }

    return (
        <React.Fragment>
            <p className="cart-products-title">Products in Cart</p>
        { products.length >0  && (products.map(product => (
            
            product.quantity > 0 && (
                        <div className="row justify-content-center" key = {product.id}>
                            <CartItemList product={product} removeProduct={removeProduct}/>
                    </div>
        ))) )
        }
        <div className="cart-item-list-div">
        <button onClick={()=>clearCart()} className="btn btn-primary cart-item-list-button">Remove all items from your cart</button>
        {user.name ? <Link to={`/payment/${getOrderId()}`}  className="btn btn-primary cart-item-list-button">Continue to pay</Link>
                                    : <button onClick={() => onClickFormModal()}
                                        className="btn btn-primary cart-item-list-button"> 
                                                    You must register before continue </button>}
        </div>

        </React.Fragment>
    );

    }

export {CartList};


//orderCreator(products, 
//    order, 
//    updateOrder, 
//    totalPrice,
//    user
//    )