import s from "./WhatDates.module.scss";
import React from 'react'
import { useState } from "react";
const WhatDates = () => {
    const [isActive1, setIsActive1] = useState(false)
    const handleClick1 = () => {
        // 👇️ toggle
        setIsActive1(current => !current);
        if(isActive2===true){setIsActive1(current => !current)}
    
        // 👇️ or set to true
        // setIsActive(true);
      };
    const [isActive2, setIsActive2] = useState(false)
    const handleClick2 = () => {
        // 👇️ toggle
        setIsActive2(current => !current);
        if(isActive1===true){setIsActive2(current => !current)}
    
        // 👇️ or set to true
        // setIsActive(true);
      };
  return (
    <div className={`${s.wrapperContainer}`} ><p className={`${s.header}`}>What Dates you <br></br>going on ?</p>
        <div className={`${s.dateswrapper}`} >
            <div className={`${s.dates}`}  style={{
          backgroundColor: (isActive1) ? 'white' : '',
          color: (isActive1) ? 'black' : '',
          border:(isActive1)?"none":""
        }}onClick={handleClick1}>15th sept</div>
            <div className={`${s.dates}`}
            style={{
                backgroundColor: (isActive2) ? 'white' : '',
                color: (isActive2) ? 'black' : '',
                border:(isActive2)?"none":""
              }}onClick={handleClick2}>16th sept</div>
        </div>
    </div>
  )
}

export default WhatDates