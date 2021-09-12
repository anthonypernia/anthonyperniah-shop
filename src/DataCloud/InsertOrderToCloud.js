
import { getDatabase } from './firebaseAuth'
import { collection, addDoc } from "firebase/firestore";



const insertOrderToCloud = async (order, updateOrder) => {

  const db = getDatabase()

  console.log(order)
  try {
    
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
    order.id = docRef.id
    updateOrder(order)
  } catch (e) {
    console.error("Error adding document: ", e);
  }

    };




    
    
export {insertOrderToCloud}

