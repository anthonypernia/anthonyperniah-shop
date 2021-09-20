
import { getDatabase } from './firebaseAuth'
import { collection, getDocs, query, where } from 'firebase/firestore';

const getProductsById = async (product, setProduct, setOpenLoadingModal, id) => {
        setOpenLoadingModal(true);
        const productsCollection = collection(getDatabase(), 'products');
        const productsQuery = query(productsCollection, where('__name__', '==', id));
        try{
          const productsnapshot = await getDocs(productsQuery);
          const product = productsnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            
          }));
          setProduct(product[0]);
          setOpenLoadingModal(false);
        } catch(error){
        }
      };
    
    
export {getProductsById}