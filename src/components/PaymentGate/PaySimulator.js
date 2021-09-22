import React from "react";
import "./PaySimulator.css"
import {CartContext} from "../Context/CartContext";

function PaySimulator() {
  const {user, order} = React.useContext(CartContext);
  return (
    <div className="loading-pay-simulator-div container ">
        <div className="row">
            <div className="col-md-12">
                <h1 className="title-pay-simulator">Thanks for your order {user.name}!</h1>
                <h2 className="subtitle-pay-simulator">You will recieve a mail with details</h2>
                <h2 className="subtitle-pay-simulator">Your order is : {order.id}</h2>
                <h2 className="subtitle-pay-simulator">Wait.. 3 secs</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 spinner-center ">
            <div>
            <div className="spinner-grow" role="status">
            </div> 
            <div className=" spinner-grow" role="status">
            </div> 
            <div className="  spinner-grow" role="status">
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export  {PaySimulator};