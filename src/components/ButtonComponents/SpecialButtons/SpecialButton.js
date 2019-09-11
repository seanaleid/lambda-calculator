import React from "react";

const SpecialButton = specialProps => {
  console.log(specialProps.special)
  return (
    <button className='specials-button'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <span>
      {specialProps.special}
    </span>
    </button>
  );
};

export default SpecialButton;
