import React from "react";
import {CartContext} from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./DataUserEnterContainer.css"
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';

function DataUserEnterContainer() {

    const { user, setUser , setOpenLoadingModal, openFormModal, setOpenFormModal, clearUser} = React.useContext(CartContext);

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
        }

      };

      const validateUser = () => {
        if (user.name.length<1 && user.phone.length<1 && user.email.length<1) {
            return true;
        }else{
            return false;
        }
      };

      
      return ( 
        <React.Fragment>
          { validateUser ? 
              <form onSubmit={onSubmit}>
              <label>Enter your data</label>
              <input
                type="text"
                onChange={getNameFromUser}
                placeholder="Name"
              />
              <input
                type="mail"
                onChange={getEmailFromUser}
                placeholder="Email"
              />
              <input
                type="text"
                onChange={getPhoneFromUser}
                placeholder="Phone"
              />
              <div className="TodoForm-buttonContainer">
                <button
                  type="button"
                  className="TodoForm-button TodoForm-button-cancel"
                  onClick={onCancel}
                >
                  Cancel
                </button>

                <button className="TodoForm-button TodoForm-button-add" type="submit">
                  Accept
                </button>
              </div>
              </form> 
              : 
              <div>
                  <button className="TodoForm-button TodoForm-button-add" onClick={()=>{onCancel()}} >Cancel</button>
                  <button className="TodoForm-button TodoForm-button-add" onClick={()=>{clearUser()}} >Delete user</button>
                  
              </div>
              
        }

        </React.Fragment>
      );
    }

export {DataUserEnterContainer}