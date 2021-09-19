import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getProductsById} from '../../DataCloud/getProductById'
import {CartContext} from '../Context/CartContext'

function ItemDetailContainer() {
    const [product , setProduct] = React.useState([]);
    const {openLoadingModal, setOpenLoadingModal} = React.useContext(CartContext);
    const { id } = useParams();

      React.useEffect(() => {
        getProductsById(product, setProduct, setOpenLoadingModal, id)
      }, []);
    return (
        <React.Fragment>
            {openLoadingModal ? <h3 className="align-self-center">Loading...</h3> : <ItemDetail product={product} />}
        </React.Fragment>
    
    );
}

export  {ItemDetailContainer};