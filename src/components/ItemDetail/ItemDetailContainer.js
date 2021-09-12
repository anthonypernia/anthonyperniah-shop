import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getProductsById} from '../../DataCloud/getProductById'

function ItemDetailContainer() {
    const [product , setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { id } = useParams();

      React.useEffect(() => {
        getProductsById(product, setProduct, setLoading, id)
      }, []);
    return (
        <React.Fragment>
            {loading ? <h3 className="align-self-center">Loading...</h3> : <ItemDetail product={product} />}
        </React.Fragment>
    
    );
}

export  {ItemDetailContainer};