
import { dataToSync } from "./Data";
import { getDatabase } from './firebaseAuth'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
const insertDataToCloud = async () => {

    const validateInsertdata = async (data) => {
      const datasCollection = collection(getDatabase(), 'products');
      if (data.id) {
        await setDoc(doc(datasCollection, data.id), data);
      }else{
        let docRef = await addDoc(datasCollection, data)
        data.id = docRef.id
      };
    };
  
    try {
        dataToSync.map(async (data) => {
            await validateInsertdata(data)
        })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
      };
  
  export {insertDataToCloud}
  