import React from 'react';
import { Link } from 'react-router-dom';
import {CartContext}  from "../../Context/cartContext";
import './Item.css'

function Item(props){
    const {products , addProduct} = React.useContext(CartContext);
    const product = props.product;
    return (
        <div className="col-3 container">
            <div className="card card-item-main">
                <img className="card-img-top card-img-item" src={product.picture_url} alt="Card image cap"/>
                <div className="card-body div-card-text-inner">
                    <h5 className="card-title card-text-inner">{product.title}</h5>
                    <p className="card-text card-text-inner">{product.description}</p>
                    <p className="card-text card-text-inner"><small className="text-muted">{product.price}$</small></p>
                    {product.stock < 5 ? <p className="card-text text-danger card-text-inner">Hurry up! Only {product.stock} left in stock</p> : <p className="card-text text-success card-text-inner">{product.stock} left in stock</p>}
                    <div className="card-text-inner">
                        <Link to={`/item/${product.id}`} className="btn btn-primary card-button-inner">View</Link>
                        <Link onClick={ ()=>{ addProduct({...product, quantity: 1, price_total:(product.price) }) } } className="btn btn-primary card-button-inner">Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>

    )

}

export {Item}