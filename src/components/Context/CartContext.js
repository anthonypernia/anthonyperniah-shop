import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import {orderCreator} from "../../Orders/orderCreator"

const CartContext = React.createContext({});

const CartProvider = ({  children }) => {

    const {
        items : products,
        saveItems: setProducts ,
      } = useLocalStorage( "cart", []);

//      const {
//        items : user,
//        saveItems: setUser ,
//      } = useLocalStorage( "user", {
//        name: "",
//        email: "",
//        phone: "",
//    });

    const [ user,setUser ] = React.useState( {
        name: "",
        email: "",
        phone: "",
    });


    const [paySimulator, setPaySimulator] = React.useState(false);

    const [openLoadingModal, setOpenLoadingModal] = React.useState(true);
    const [openFormModal, setOpenFormModal] = React.useState(false);

    const [order, setOrder] = React.useState({id:""});

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
        onUpdateProdducts(newProducts)
    }

    const getUserId = ()=> {
        return user.id;
    }

    const getOrderId = ()=> {
        return order.id;
    }

    const isEmptyCart = () => {
        try {
            return products.length === 0;
        }catch(e) {
            return true;
        }
    }

    const onUpdateProdducts = (newProducts) => {
        orderCreator(
            "pending",
            newProducts, 
          order, 
          setOrder, 
          totalPrice,
          user,
          setOpenLoadingModal
          )
      }

    const isEmptyUser = () => {
        try {
            if (user.email.length>2 && user.name.length>2 && user.phone.length>2) {
                return false;
            }else {
                return true;
            }
        }catch(e) {
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
        onUpdateProdducts(newProducts);
    }

    const clearCart = () => {
        setProducts([]);
        onUpdateProdducts();
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
                setOrder,
                setUser,
                isEmptyUser,
                user,
                clearUser,
                openLoadingModal,
                setOpenLoadingModal,
                openFormModal, 
                setOpenFormModal,
                paySimulator, 
                getUserId,
                getOrderId,
                setPaySimulator
                }}>
        {children}
        </CartContext.Provider>
    )

}
export {CartProvider};
export {CartContext};