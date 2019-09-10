import React from "react";

const OperatorButton = operatorProps => {
  console.log(operatorProps.operator);
  return (
    <button className='operator-button'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {operatorProps.operator.char}
      </span>
    </button>
  );
}

export default OperatorButton;