import React from "react";
import "./PaySimulator.css"


function PaySimulator() {
  return (
    <div className="loading-pay-simulator-div container ">
        <div className="row">
            <div className="col-md-12">
                <h1 className="title-pay-simulator">Thanks for your order!</h1>
                <h2 className="subtitle-pay-simulator">You will recieve a mail with details</h2>
                <h3 className="subtitle-pay-simulator">Wait.. 3 secs</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 spinner-center ">
            <div>
            <div class="spinner-grow" role="status">
            </div> 
            <div class=" spinner-grow" role="status">
            </div> 
            <div class="  spinner-grow" role="status">
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export  {PaySimulator};