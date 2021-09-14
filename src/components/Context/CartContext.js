import React from "react";
//
const CartContext = React.createContext({});

const CartProvider = ({ test, children }) => {

    const [products , setProducts] = React.useState([]);

    const [order, setOrder] = React.useState({});

    const [user, setUser] = React.useState({
        id: null,
        name: null,
        email: null,
        phone: null,
    });

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

    const isEmptyUser = () => {
        if (user.email.length>2 && user.name.length>2 && user.phone.length>2) {
            return false;
        }else {
            return true;
        }
        
    }

    const removeProduct = (product) => {
        const newProducts = [...products];
        const index = newProducts.findIndex(p => p.id === product.id);
        if (index !== -1) {
            if (newProducts[index].quantity > 1) {
                newProducts[index].quantity = newProducts[index].quantity - 1;
            } else {
                newProducts.splice(index, 1);
            }
        }else{
            console.log("Product not found");
        }
        setProducts(newProducts);
    }

    const clearCart = () => {
        setProducts([]);
    }

    const totalPrice = () => {
        let total = 0;
        products.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    };

    const updateOrder = (order) => {
        setOrder(order);
    };


    return (
        <CartContext.Provider 
        value={{
                products, 
                addProduct, 
                countProducts, 
                removeProduct, 
                isEmptyCart, 
                clearCart, 
                totalPrice, 
                order, 
                updateOrder,
                setUser,
                isEmptyUser,
                user
                }}>
        {children}
        </CartContext.Provider>
    )

}
export {CartProvider};
export {CartContext};