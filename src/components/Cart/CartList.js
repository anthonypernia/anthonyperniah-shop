import React from "react";
import {CartContext} from "../Context/CartContext";
import {CartItemList} from "./CartItemList";
import { Link } from "react-router-dom";
import "./CartList.css"
import { orderCreator } from "../../Orders/orderCreator"

function CartList() {
    const {products , 
            removeProduct, 
            order, 
            clearCart, 
            totalPrice, 
            updateOrder, 
            setOpenFormModal,
            user} = React.useContext(CartContext);

            
    
    const onClickFormModal = () => {
        setOpenFormModal(true);
    }

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
        {user.name ? <button onClick={()=>
                        orderCreator(products, 
                                        order, 
                                        updateOrder, 
                                        totalPrice,
                                        user
                                        )} 
                                        className="btn btn-primary cart-item-list-button">Avanzar con la compra</button>
                                    : <button onClick={() => onClickFormModal()}
                                        className="btn btn-primary cart-item-list-button"> 
                                                    (Carga tus datos antes de avanzar la ) </button>}
        </div>

        </React.Fragment>
    );

    }
//<Link to={`/cart/`} onClick={ ()=>{ 
//    addProduct({...product, quantity: dataCartCount, price_total:(product.price*dataCartCount) }) } } 
//      className="col-2 btn btn-outline-dark ml-4 mr-4 mt-4"> Buy </Link>:''}
export {CartList};
