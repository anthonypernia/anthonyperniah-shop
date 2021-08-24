import React from "react";

function ItemDetail(props) {
    const text = props.text;
    const product = props.product;
    return (
      <div className="item-detail">
        <h2>ITEM DETAIL</h2>
        <h2>{text}</h2>
        <h2>{product.title}</h2>

      </div>
    );
}

export  {ItemDetail};