
import { getDatabase } from './firebaseAuth'
import { collection, getDocs, query, where } from 'firebase/firestore';

const getAllProducts = async (setProducts, setOpenLoadingModal ) => {
  setOpenLoadingModal(true);
    const productsCollection = collection(getDatabase(), 'products');
    const productsnapshot = await getDocs(productsCollection);
    const dataProducts = productsnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    setProducts(dataProducts);
    setOpenLoadingModal(false);
  }; 

export {getAllProducts}