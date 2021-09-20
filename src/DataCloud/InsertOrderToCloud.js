
import { getDatabase } from './firebaseAuth'
import { collection, addDoc, getDocs, query, where, updateDoc , doc, setDoc } from 'firebase/firestore';


const insertOrderToCloud = async (order, setOrder) => {
  const validateInsertOrder = async (order) => {
    let orderGetting=''
    const ordersCollection = collection(getDatabase(), 'orders');
    
    if (order.id) {
      let docRef = await setDoc(doc(ordersCollection, order.id), order);
    }else{
      let docRef = await addDoc(ordersCollection, order)
      order.id = docRef.id
      setOrder(order)
    };
  };

  try {
    
    const docRef = await validateInsertOrder(order);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

    };

export {insertOrderToCloud}

