import React from "react";
//
const CartContext = React.createContext({});

const CartProvider = ({ test, children }) => {

    const [products , setProducts] = React.useState([]);

    const countProducts = () => {
        let count = 0;
        products.forEach(product => {
            count += product.quantity;
        }   );
        return count;
    }
    
    const addProduct = (product) => {

        const newProducts = [...products];
        const index = newProducts.findIndex(p => p.id === product.id);
        if (index === -1) {
            newProducts.push({...product});
        } else {
            newProducts[index].quantity = newProducts[index].quantity + product.quantity;
        }

        setProducts(newProducts);
    }

    const isEmptyCart = () => {
        return products.length === 0;
    }

    const removeProduct = (product) => {
        const newProducts = [...products];
        const index = newProducts.findIndex(p => p.id === product.id);
        if (index !== -1) {
            newProducts[index].quantity--;
        }
        setProducts(newProducts);
    }

    const clearCart = () => {
        setProducts([]);
    }

    return (

        <CartContext.Provider 
        value={{products, addProduct, countProducts, removeProduct, isEmptyCart, clearCart}}>

        {children}

        </CartContext.Provider>

    )


}
export {CartProvider};
export {CartContext};