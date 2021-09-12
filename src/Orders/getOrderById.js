
import { getDatabase } from '../DataCloud/firebaseAuth'
import { collection, getDocs, query, where } from 'firebase/firestore';

////const getProductsById = async (product, setProduct, setLoading, id) => {
////        setLoading(true);
////        const productsCollection = collection(getDatabase(), 'products');
////        const productsQuery = query(productsCollection, where('id', '==', id));
////        try{
////          const productsnapshot = await getDocs(productsQuery);
////          const product = productsnapshot.docs.map(doc => ({
////            id: doc.id,
////            ...doc.data()
////            
////          }));
////          setProduct(product[0]);
////          setLoading(false);
////        } catch(error){
////          console.log(error);
////        }
////      };
////    
////    
////export {getProductsById}