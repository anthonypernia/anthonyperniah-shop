import React from "react";
import {ItemList} from "./ItemList";


function ItemListContainer({dataProducts, searchValue}) {

  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => resolve(dataProducts), 3000);
    }).then((dataProducts) => setProducts(dataProducts)).finally(() => setLoading(false));
  },[])

  return loading ? <h2>Loading..</h2> : (<ItemList dataProducts={products.filter(
    (product) => product.title.toLowerCase().includes(searchValue.toLowerCase())
  )} />);
}

export {ItemListContainer};