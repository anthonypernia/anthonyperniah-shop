import React from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {getAllProducts} from '../../DataCloud/getAllProducts'
import {getProductsByCategory} from '../../DataCloud/getProductsByCategory'

function ItemListContainer({searchValue}) {
  const { categoryId } = useParams();
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
 
    React.useEffect(() => {
      if(categoryId){
        getProductsByCategory(categoryId, setProducts, setLoading);
      } else {
        getAllProducts(setProducts, setLoading);
      }
    }, [categoryId]);

  return loading ? <h2 className="col-12 d-flex align-items-center" >Loading..</h2> : (<ItemList dataProducts={products.filter(
    (product) => product.title.toLowerCase().includes(searchValue.toLowerCase() )
  )} />);
}

export {ItemListContainer};