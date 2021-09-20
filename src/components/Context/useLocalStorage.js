import React from "react";


function useLocalStorage(valueCart, initialValue) {
    
    const [error, setError] = React.useState(false)
    const [items, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(valueCart);
  
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(valueCart, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
        } catch (error) {
          setError(true)
        }
      }, 1000);
    },[]);
  
    const saveItems = (newProducts) => {
        console.log("useLocalStorage",items)
      try {
        const stringifiedItem = JSON.stringify(newProducts);
        localStorage.setItem(valueCart, stringifiedItem);
        setItem(newProducts);
        console.log("Products saved");
      } catch (error) {
          console.log("Error savingitems", error);
        setError(true)
      }
    };
  
    return {
        items,
        saveItems,
        error,
    };
  }

export {useLocalStorage};