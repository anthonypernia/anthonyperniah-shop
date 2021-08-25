import React from "react";


function ItemCount(props) {
  return (
      <button className="btn btn-outline-dark ml-4 mr-4" onClick={props.onClickButton}>{props.data_button}</button>
  );
}

export {ItemCount};