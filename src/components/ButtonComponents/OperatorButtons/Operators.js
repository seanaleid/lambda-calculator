import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import OperatorButton from "./OperatorButton";
import { operators } from '../../../data.js';

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [operatorState] = useState(operators);
  console.log(useState(operators));

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       <div className="buttons">
         {operatorState.map( (operator, key) =>(
           <OperatorButton operator={operator} key={key} />
         ))}
       </div>
    </div>
  );
};

export default Operators;
