import { getDatabase } from './firebaseAuth'
import { collection, addDoc, getDocs, query, where, updateDoc , doc, setDoc } from 'firebase/firestore';


const insertUserToCloud = async (order, setUser) => {
  const validateInsertUser = async (order) => {

    const userCollection = collection(getDatabase(), 'orders');
    
    if (order.id) {
      let docRef = await setDoc(doc(userCollection, order.id), order);
    }else{
      let docRef = await addDoc(userCollection, order)
      order.id = docRef.id
      setOrder(order)
    };
  };

  try {
    
    const docRef = await validateInsertUser(order);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

    };

export {insertUserToCloud}