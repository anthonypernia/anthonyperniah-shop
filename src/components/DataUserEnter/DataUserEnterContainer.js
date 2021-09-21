import React from "react";
import {CartContext} from "../Context/CartContext";
import "./DataUserEnterContainer.css"

function DataUserEnterContainer() {

    const {setUser , setOpenLoadingModal, setOpenFormModal, isEmptyUser ,clearUser} = React.useContext(CartContext);

    setOpenLoadingModal(false);
    const userCurrent ={
        id: "99999999",
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
    const getEmailFromUserValidate = (e) => {
      userCurrent.emailValidate = e.target.value;
    };

    const onCancel = () => {
        setOpenFormModal(false);
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        if (userCurrent.name.length>1 && userCurrent.phone.length>1 && userCurrent.email.length>1 && userCurrent.emailValidate === userCurrent.email){
            setUser(userCurrent);
            setOpenFormModal(false);
        }

      };

      return ( 
        <React.Fragment>
          { isEmptyUser() ? 
              <form onSubmit={onSubmit}>
              <label>Enter your data</label>
              <input
                type="text"
                onChange={getNameFromUser}
                placeholder="Name"
              />
              <input
                type="email"
                onChange={getEmailFromUser}
                placeholder="Please enter Email"
              />
              <input
                type="email"
                onChange={getEmailFromUserValidate}
                placeholder="Please enter Email again"
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