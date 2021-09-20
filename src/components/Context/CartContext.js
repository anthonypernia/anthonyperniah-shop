import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const CartContext = React.createContext({});

const CartProvider = ({  children }) => {

    const {
        items : products,
        saveItems: setProducts ,
      } = useLocalStorage( "cart", []);

      const {
        items : user,
        saveItems: setUser ,
      } = useLocalStorage( "user", {
        name: "",
        email: "",
        phone: "",
    });

    const [openLoadingModal, setOpenLoadingModal] = React.useState(true);
    const [openFormModal, setOpenFormModal] = React.useState(false);

    const [order, setOrder] = React.useState({
        id: "",
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
    };

    const clearUser = () => {
        setUser({
            name: "",
            email: "",
            phone: "",
        });
    };

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
                user,
                clearUser,
                openLoadingModal,
                setOpenLoadingModal,
                openFormModal, 
                setOpenFormModal
                }}>
        {children}
        </CartContext.Provider>
    )

}
export {CartProvider};
export {CartContext};