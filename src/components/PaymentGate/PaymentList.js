import React from "react";

function PaymentList(props) {
  return <div>
      <h2>Payment List</h2>
      <ul>
          { props.products.map(product => <li key={product.id}><p>{product.title} * {product.quantity}</p></li>) }
    </ul>
  </div>;
}

export { PaymentList };