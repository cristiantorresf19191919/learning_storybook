import React, { useState } from 'react'
import './learningTest.css'
const STATUS = {
    NORMAL:"normal",
    HOVER:"hover"
}
export const LearningTest = (props) => {
    const [clase, setClase] = useState(STATUS.NORMAL);

    const mouseEntro = () => {
        setClase(STATUS.HOVER);
      }
    
    const mouseSalio = () => {
        setClase(STATUS.NORMAL);
      }

    return (
        <>
           <a
        className={clase}
        href={props.page || '#'}
        onMouseEnter={mouseEntro}
        onMouseLeave={mouseSalio}
      >
        {props.children}
      </a>
        </>
    )
}


