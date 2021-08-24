import React  from "react";
import {Item} from "./Item";

function ItemList({dataProducts}) {
  
  return (
    <div className="card-group">
        {dataProducts.map(product => (
            <Item key={product.id} product={product} />
        ))}
    </div>
  );
}
export {ItemList};