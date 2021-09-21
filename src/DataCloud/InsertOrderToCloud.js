
import { getDatabase } from './firebaseAuth'
import { collection, addDoc, getDocs, query, where, updateDoc , doc, setDoc } from 'firebase/firestore';


const insertOrderToCloud = async (order, setOrder, setOpenLoadingModal) => {
  try {
    
    let orderGetting=''
    const ordersCollection = collection(getDatabase(), 'orders');
    const docRef = await addDoc(collection(getDatabase(), "orders"), order);
    console.log("Document written with ID: ", docRef.id);
    let newOrder = {
        ...order,
        id: docRef.id
    }
    setOrder(newOrder)
    setOpenLoadingModal(false)
  } catch (e) {
    console.error("Error adding document: ", e);
  }

    };

export {insertOrderToCloud}

