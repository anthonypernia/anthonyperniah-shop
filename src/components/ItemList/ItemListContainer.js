import React from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({dataProducts, searchValue}) {
  const { categoryId } = useParams();
  
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => resolve(dataProducts), 100);
    }).then((dataProducts) => setProducts(categoryId ? dataProducts.filter(product => product.category == categoryId) : dataProducts)).finally(() => setLoading(false));
  },[categoryId])

  return loading ? <h2 className="col-12 d-flex align-items-center" >Loading..</h2> : (<ItemList dataProducts={products.filter(
    (product) => product.title.toLowerCase().includes(searchValue.toLowerCase() )
  )} />);
}

export {ItemListContainer};