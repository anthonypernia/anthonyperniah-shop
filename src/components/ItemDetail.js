import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";

function ItemDetail(props) {
    const text = props.text;
    const product = props.product;
    const cartValue = useContext(CartContext);
    const [dataCartCount, setDataCartCount] = React.useState(1);
    console.log(cartValue);
    return (
        <div className="card container">
          <img className="card-img-top" src={product.picture_url} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div>
                <p className="card-text">{dataCartCount} items</p>
                <ItemCount data_button = " + " onClickButton = {()=>(dataCartCount < product.stock ? setDataCartCount(dataCartCount+1) : alert("No hay mas en stock"))}/>
                <a href="#" className="btn btn-primary">Buy</a>
                <ItemCount  data_button = " - " onClickButton = {()=>(dataCartCount > 1 ? setDataCartCount(dataCartCount-1) : alert("Lo minimo que puede comprar es 1"))}/>
            </div>

          </div>
        </div>
    );
}

export  {ItemDetail};