import React from "react";
import  ReactDOM  from "react-dom";
import "./ModalLoading.css"


function ModalLoading({ children }){
    return ReactDOM.createPortal( 
        <div className="ModalBackground">
            {children}
        </div>,
            document.getElementById('modal')
    );
}

export {ModalLoading}