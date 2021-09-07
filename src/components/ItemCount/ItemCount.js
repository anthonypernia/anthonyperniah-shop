import React from "react";


function ItemCount({dataCartCount, setDataCartCount, stock }) {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <h2 className="d-flex justify-content-center">{dataCartCount}</h2>
        </div>
        <div className="row justify-content-center">
            <button className="col-2 btn btn-outline-dark ml-4 mr-4" onClick={(() => stock>dataCartCount ? setDataCartCount(dataCartCount+1): alert("No hay mas Stock"))} > + </button>
            <button className="col-2 btn btn-outline-dark ml-4 mr-4" onClick={(() => dataCartCount>0 ? setDataCartCount(dataCartCount-1) : alert("Ya sacaste todos los productos de su carrito"))} > - </button>
        </div>

            
      </div>
      
  );
}

export {ItemCount};