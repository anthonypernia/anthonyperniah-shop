
import { getDatabase } from './firebaseAuth'
import { collection, addDoc } from 'firebase/firestore';


const insertOrderToCloud = async (order, setOrder, setOpenLoadingModal) => {
  try {
    
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

