import React from "react";

function CartItemList({product, removeProduct}) {
    
  return (
    <React.Fragment>
      <div className="col-md-6">
        <img className="img-cart" src={product.picture_url} />
      </div>
      <div className="col-md-6">
        <p className="cart-products-title">Products in Cart</p>
        <br />
        <p className="cart-products-subtitle">Product = {product.title}</p>
        <p className="cart-products-subtitle">
          Price = {product.price * product.quantity} ({product.price} U)
        </p>
        {product.quantity > 0 && (
          <button
            className="cart-products-subtitle"
            onClick={() => removeProduct(product)}
          >
            Remove
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export {CartItemList};