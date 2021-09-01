import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {cartContext}  from "../context/CartContext";
import { ItemCount } from "./ItemCount";


function ItemDetail(props) {
  const text = props.text;
  const product = props.product;
  const {products , setProducts} = useContext(cartContext);
  
  const [dataCartCount, setDataCartCount] = React.useState(1);


  return (
    <div className="card container">
      <div className="row">
      <img
        className="col-6 card-img-top"
        src={product.picture_url}
        alt="Card image cap"
      />
      <div className="col-6 card-body ">
        <h5 className="card-title d-flex justify-content-center">{product.title}</h5>
        <p className="card-text d-flex justify-content-center">{product.description}</p>
        <div>
          <p className="card-text d-flex justify-content-center">{product.stock} Products in stock</p>
          <ItemCount
            data_button=" + "
            dataCartCount={dataCartCount}
            setDataCartCount={setDataCartCount}
            stock={product.stock}
          />
        <div className="row justify-content-center">
            { dataCartCount>0 ? <Link to={`/cart/`} onClick={ ()=>{ setProducts({product, dataCartCount}) } } className="col-2 btn btn-outline-dark ml-4 mr-4 mt-4"> Buy </Link>:''}
        </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export { ItemDetail };
