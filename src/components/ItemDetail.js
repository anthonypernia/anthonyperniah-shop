import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function ItemDetail(props) {
    const text = props.text;
    const product = props.product;
    const cartValue = useContext(CartContext);
    console.log(cartValue);
    return (
        <div className="card container">
          <img className="card-img-top" src={product.picture_url} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-primary">Buy</a>
          </div>
        </div>
    );
}

export  {ItemDetail};