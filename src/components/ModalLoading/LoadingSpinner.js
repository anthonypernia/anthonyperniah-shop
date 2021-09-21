import React from "react";

import "./LoadingSpinner.css"

function LoadingSpinner() {
  return (
    <div className="loading-div container ">
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

export {LoadingSpinner};