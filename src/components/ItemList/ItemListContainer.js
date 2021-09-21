import React from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {getAllProducts} from '../../DataCloud/getAllProducts'
import {getProductsByCategory} from '../../DataCloud/getProductsByCategory'
import {CartContext} from '../Context/CartContext'

function ItemListContainer({searchValue}) {
  const { categoryId } = useParams();
  const [productsCloud, setProductsCloud,] = React.useState([]);
  const {openLoadingModal, setOpenLoadingModal, user} = React.useContext(CartContext);

    React.useEffect(() => {
      if(categoryId){
        getProductsByCategory(categoryId, setProductsCloud, setOpenLoadingModal);
      } else {
        getAllProducts(setProductsCloud, setOpenLoadingModal);
      }
    }, [categoryId]);

  return(<ItemList dataProducts={productsCloud.filter(
    (product) => product.title.toLowerCase().includes(searchValue.toLowerCase() )
  )} />);
}

export {ItemListContainer};