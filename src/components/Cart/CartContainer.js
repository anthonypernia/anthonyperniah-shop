import React from "react";

import {Cart} from "./Cart"
import { CartContext } from "../Context/CartContext";


function CartContainer(){
    
    const {setOpenLoadingModal} = React.useContext(CartContext);
        setOpenLoadingModal(false);
    return(
            <Cart/>
    )
}

export {CartContainer};