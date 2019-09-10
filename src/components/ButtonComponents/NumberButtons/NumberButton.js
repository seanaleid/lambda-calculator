import React from "react";

const NumberButton = props => {
  console.log(props.number);
  return (
    <button className='numbers-button'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span> 
        {props.number}
      </span>
    </button>
  );
};

export default NumberButton; 
