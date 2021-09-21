
import { getDatabase } from './firebaseAuth'
import { collection, getDocs, query, where } from 'firebase/firestore';

const getProductsByCategory = async (categoryId, setProductsCloud, setOpenLoadingModal) => {
    setOpenLoadingModal(true);
    const productsCollection = collection(getDatabase(), 'products');
    const productsQuery = query(productsCollection, where('category', '==', categoryId));
    try{
      const productsnapshot = await getDocs(productsQuery);
      const dataProducts = productsnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProductsCloud(dataProducts);
      setOpenLoadingModal(false);
    } catch(error){
      console.log(error);
    }
  };
  
export {getProductsByCategory}

