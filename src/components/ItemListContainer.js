import React from "react";
import {ItemList} from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({dataProducts, searchValue}) {
  const { categoryId } = useParams();
  let filteredProducts = categoryId ? dataProducts.filter(product => product.category == categoryId) : dataProducts;

  console.log(filteredProducts);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => resolve(dataProducts), 3000);
    }).then((dataProducts) => setProducts(dataProducts)).finally(() => setLoading(false));
  },[])

  return loading ? <h2>Loading..</h2> : (<ItemList dataProducts={products.filter(
    (product) => product.title.toLowerCase().includes(searchValue.toLowerCase() )
  )} />);
}

export {ItemListContainer};