
import { getDatabase } from './firebaseAuth'
import { collection, addDoc, getDocs, query, where, updateDoc , doc, setDoc } from 'firebase/firestore';







const insertOrderToCloud = async (order, updateOrder) => {


  const validateInsertOrder = async (order) => {
    let orderGetting=''
    const ordersCollection = collection(getDatabase(), 'orders');
    
    if (order.id) {
      console.log('order.id')
      let docRef = await setDoc(doc(ordersCollection, order.id), order);
      console.log("Document updated with ID: ", docRef);
      //console.log("Document updated with ID: ", docRef);
    }else{
      console.log('no id')
      let docRef = await addDoc(ordersCollection, order)
      order.id = docRef.id
      console.log(order)
      updateOrder(order)
      console.log("Document written with ID: ", docRef.id);
    };
  };

  const updateOrderInCloud = async (order) => {
    const ordersCollection = collection(getDatabase(), 'orders');
    const docRef = await addDoc(ordersCollection, order)
    console.log("Document written with ID: ", docRef.id);
  };

  try {
    
    const docRef = await validateInsertOrder(order);
    //const docRef = await addDoc(collection(db, "orders"), order);
    //console.log("Document written with ID: ", docRef.id);
    //order.id = docRef.id
    //updateOrder(order)
  } catch (e) {
    console.error("Error adding document: ", e);
  }

    };




    
    
export {insertOrderToCloud}

