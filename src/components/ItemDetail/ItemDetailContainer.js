import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getProductsById} from '../../DataCloud/getProductById'
import {CartContext} from '../Context/CartContext'
import { Link } from "react-router-dom";

function ItemDetailContainer() {
    const [product , setProduct] = React.useState([]);
    const {setOpenLoadingModal} = React.useContext(CartContext);
    const { id } = useParams();
    const [setError] = React.useState(false);

    

      React.useEffect(() => {
        try{
          getProductsById(product, setProduct, setOpenLoadingModal, id)
          
        }catch(error){
          setError(true)
          console.log(error)
        }
        
      }, []);
    return (
        <React.Fragment>
            {(product!== undefined) ? <ItemDetail product={product}/> : <div> 
              <h2>Error Item not found...</h2>
            <Link to="/"
                    className="btn btn-primary cart-item-list-button">
                    Return to Home
                    </Link>
              </div>}
        </React.Fragment>
    
    );
}

export  {ItemDetailContainer};