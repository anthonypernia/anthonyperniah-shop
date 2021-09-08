import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getData } from '../../DataCloud/firebaseAuth'
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemDetailContainer() {
    const [product , setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { id } = useParams();

    const getProductsById = async () => {
        setLoading(true);
        const productsCollection = collection(getData(), 'products');
        const productsQuery = query(productsCollection, where('id', '==', id));
        try{
          const productsnapshot = await getDocs(productsQuery);
          const product = productsnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            
          }));
          setProduct(product[0]);
          setLoading(false);
        } catch(error){
          console.log(error);
        }
      };

      React.useEffect(() => {
        getProductsById();
      }, []);
    return (
        <React.Fragment>
            {loading ? <h3 className="align-self-center">Loading...</h3> : <ItemDetail product={product} />}
        </React.Fragment>
    
    );
}

export  {ItemDetailContainer};