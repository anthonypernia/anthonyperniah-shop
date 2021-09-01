import React from "react";

const cartContext = React.createContext({});

const CartProvider = ({ test, children }) => {

    const [products , setProducts] = React.useState([]);
    

    return (

        <cartContext.Provider 
        value={{products, setProducts}}>

        {children}

        </cartContext.Provider>

    )


}
export {CartProvider};
export {cartContext};