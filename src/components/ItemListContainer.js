import React from "react";
import {ItemList} from "./ItemList";


function ItemListContainer({dataProducts}) {

  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => resolve(dataProducts), 3000);
    }).then((dataProducts) => setProducts(dataProducts)).finally(() => setLoading(false));
  },[])



  return loading ? <h1>Loading..</h1> : (<ItemList dataProducts={products} />);
}

export {ItemListContainer};