import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

function Item(props){
    const product = props.product;
    return (
        <div className="col-3">
            <div className="card card-div-item{">
                <img className="card-img-top card-img-item" src={product.picture_url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><small className="text-muted">{product.price}$</small></p>
                    <Link to={`/item/${product.id}`} className="btn btn-primary">View</Link>
                </div>
            </div>
        </div>

    )

}

export {Item}