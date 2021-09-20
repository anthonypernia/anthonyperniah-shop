import React from "react";
import "./PaymentCard.css"
import {PaymentList} from "./PaymentList";

function PaymentCard(props){
    return (
        <div className="payment-card">
            <PaymentList products={props.products}/>
            <h1>Total = {props.totalPrice}</h1>
        </div>
    )
}
export {PaymentCard};