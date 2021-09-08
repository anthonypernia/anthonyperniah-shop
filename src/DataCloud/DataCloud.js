import { getData } from "./firebaseAuth";
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

const App2 = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const getProducts = async () => {
        const productsCollection = collection(getData(), 'products');
        const productsnapshot = await getDocs(productsCollection);
        const productsList = productsnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(productsList);
        setProducts(productsList);
      };
      getProducts();
    }, []);

    return (
          <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {products.map(petItem => (
        <p>
          Nombre: {petItem.name} (Edad: {petItem.age}, Tipo: {petItem.animal})
        </p>
      ))}
    </div>
    )
  
  };
  
  export  {App2};