import React from "react";
import {CartContext} from "../Context/CartContext";
import { Link } from "react-router-dom";

function DataUserEnterContainer() {

    const { user, setUser , isEmptyUser} = React.useContext(CartContext);

    const [userReady, setUserReady] = React.useState(false);

    const getNameFromUser = (e) => {
        user.name = e.target.value;
    };

    const getPhoneFromUser = (e) => {
        user.phone = e.target.value;
    };

    const getEmailFromUser = (e) => {
        user.email = e.target.value;
    };

    const setDataUser = () => { 
        setUser(user);
    };



    return <div>
        <input onChange={getNameFromUser} placeholder="Name"></input>
        <input onChange={getEmailFromUser} placeholder="E-mail"></input>
        <input onChange={getPhoneFromUser} placeholder="Phone"></input>
        
        <Link to={`/cart/`}  onClick={()=> setDataUser()} 
                    className="btn btn-primary cart-item-list-button"> Enviar </Link>
    </div>;
}


export {DataUserEnterContainer}