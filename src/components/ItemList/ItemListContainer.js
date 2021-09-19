import React from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {getAllProducts} from '../../DataCloud/getAllProducts'
import {getProductsByCategory} from '../../DataCloud/getProductsByCategory'
import {CartContext} from '../Context/CartContext'

function ItemListContainer({searchValue}) {
  const { categoryId } = useParams();
  const [products, setProducts] = React.useState([]);
  const {openLoadingModal, setOpenLoadingModal} = React.useContext(CartContext);
 
    React.useEffect(() => {
      if(categoryId){
        getProductsByCategory(categoryId, setProducts, setOpenLoadingModal);
      } else {
        getAllProducts(setProducts, setOpenLoadingModal);
      }
    }, [categoryId]);

  return(<ItemList dataProducts={products.filter(
    (product) => product.title.toLowerCase().includes(searchValue.toLowerCase() )
  )} />);
}

export {ItemListContainer};