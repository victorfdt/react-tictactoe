import React from 'react';

//It was a class component, now it is a function component
const Square = (props) => {
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>  
  );
}

export default Square;