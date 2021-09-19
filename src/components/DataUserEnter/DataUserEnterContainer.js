import React from "react";
import {CartContext} from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./DataUserEnterContainer.css"
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';

function DataUserEnterContainer() {

    const { user, setUser , setOpenLoadingModal, openFormModal, setOpenFormModal} = React.useContext(CartContext);

    setOpenLoadingModal(false);
    const history = useHistory();
    const userCurrent ={
        name: "",
        email: "",
        phone: "",
    }

    const getNameFromUser = (e) => {
        userCurrent.name = e.target.value;
    };

    const getPhoneFromUser = (e) => {
        userCurrent.phone = e.target.value;
    };

    const getEmailFromUser = (e) => {
        userCurrent.email = e.target.value;
    };

    const onCancel = () => {
        setOpenFormModal(false);
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        if (userCurrent.name.length>1 && userCurrent.phone.length>1 && userCurrent.email.length>1) {
            setUser(userCurrent);
            setOpenFormModal(false);
            //history.push("/cart/");
        }else{
            console.log("Error")
        }

      };
    
      return (
        <form onSubmit={onSubmit}>
          <label>Ingrese sus datos de usuario</label>
          <input
            type="text"
            onChange={getNameFromUser}
            placeholder="Nombre"
          />
        <input
            type="mail"
            onChange={getEmailFromUser}
            placeholder="Mail"
          />
        <input
            type="text"
            onChange={getPhoneFromUser}
            placeholder="telefono"
          />
          <div className="TodoForm-buttonContainer">
            <button
              type="button"
              className="TodoForm-button TodoForm-button-cancel"
              onClick={onCancel}
            >
              Cancelar
            </button>
    
            <button className="TodoForm-button TodoForm-button-add" type="submit">
              Añadir
            </button>
          </div>
        </form>
      );
    }

export {DataUserEnterContainer}