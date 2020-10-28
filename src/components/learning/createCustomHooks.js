import React, {useState, useEffect} from 'react';
import useDocumentCount from "../../useDocumentCount";
import useBackgroundColor from "../../useBackgroundColor";
export function CreateCustomHooks(){

const {count,increment,decrement} = useDocumentCount();
useBackgroundColor('blue');


return (
  <>
  <h1> {count}</h1>
  <div>
    <button onClick={()=> increment()}>Increment</button>
    <button onClick={()=> decrement()}> Decrement </button>
    </div>

  </>
)

}
