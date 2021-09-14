
import { getDatabase } from '../DataCloud/firebaseAuth'
import { collection, getDocs, query, where } from 'firebase/firestore';

const getOrderById = async (oder, setLoading) => {
        setLoading(true);
        const productsCollection = collection(getDatabase(), 'orders');
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
    
    
export {getOrderById}