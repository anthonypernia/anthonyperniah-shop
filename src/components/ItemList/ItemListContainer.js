import React from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getData } from '../../DataCloud/firebaseAuth'
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer({searchValue}) {
  const { categoryId } = useParams();
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

    const getProductsAll = async () => {
      setLoading(true);
      const productsCollection = collection(getData(), 'products');
      const productsnapshot = await getDocs(productsCollection);
      const dataProducts = productsnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(dataProducts);
      setLoading(false);
    }; 
    const getProductsByCategory = async () => {
      setLoading(true);
      const productsCollection = collection(getData(), 'products');
      const productsQuery = query(productsCollection, where('category', '==', categoryId));
      try{
        const productsnapshot = await getDocs(productsQuery);
        const dataProducts = productsnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
          
        }));
        setProducts(dataProducts);
        setLoading(false);
      } catch(error){
        console.log(error);

      }
    };
  
    React.useEffect(() => {
      if(categoryId){
        getProductsByCategory();
      } else {
        getProductsAll();
      }
    }, [categoryId]);

  return loading ? <h2 className="col-12 d-flex align-items-center" >Loading..</h2> : (<ItemList dataProducts={products.filter(
    (product) => product.title.toLowerCase().includes(searchValue.toLowerCase() )
  )} />);
}

export {ItemListContainer};