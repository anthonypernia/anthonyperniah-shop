
import { getDatabase } from './firebaseAuth'
import { collection, doc, setDoc } from 'firebase/firestore';


const updateOrderToCloud =  async (order, setOpenLoadingModal) => {
  try {
    const ordersCollection = collection(getDatabase(), 'orders');
    await setDoc(doc(ordersCollection, order.id), order);
    setOpenLoadingModal(false);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

    };

export {updateOrderToCloud}

