import React from "react";
import "./CartItemList.css"

function CartItemList({ product, removeProduct }) {
  return (
    <div className="cart-item-pay-center ">
      <div className="col-md-6">
        <img className="img-cart" src={product.picture_url} alt="img" />
      </div>
      <div className="col-md-6 ">
        <br />
        <p className="cart-products-subtitle">Product = {product.title}</p>
        <p className="cart-products-subtitle">
          Total Price = {product.price * product.quantity} ({product.price} PPU
          x {product.quantity} Units)
        </p>
        {product.quantity > 0 && (
          <button
            className="btn btn-primary cart-item-list-button-remove "
            onClick={() => removeProduct(product)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export { CartItemList };
