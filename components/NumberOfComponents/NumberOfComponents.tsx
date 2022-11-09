import { Image } from 'antd';
import React, { useState } from 'react'
import s from "./NumberOfComponents.module.scss";
type guestProps={
    guest:number
    setGuest:any
}
const NumberOfComponents = ({guest,setGuest}:guestProps) => {
    
  return (<div className={`${s.wrapperContainer}`}>
    <div className={`${s.container}`}><p  className={`${s.title}`}>Number of Guest?</p>
    <div className={`${s.incDecDiv}`} >
        <button className={`${s.incrementDrecrement}`} onClick={()=>{guest>0&&setGuest(guest - 1)}} >-</button>
        {/* <div>
            <button className={`${s.incrementDrecrement}`}onClick={()=>{setGuest((prev)=>prev - 1)}}>-<button></div> */}
    <div className={`${s.guestNumber}`}>{guest}</div>
    {/* <div><input className={`${s.incrementDrecrement}`} type={'button'} onClick={()=>{setGuest((prev)=>prev + 1)}}>+</input></div> */}
    <button className={`${s.incrementDrecrement}`} onClick={()=>{setGuest(guest + 1)}} >+</button>
    </div>
    
    
    </div>
    <div className={`${s.flashimgAndOffer}`}>
    <Image
                src="/images/Group.svg"
                alt="flash logo"
                className={`${s.flashimg}`}
                // layout="fill"
              />
              <p className={`${s.offtext}`}>10% off on 10 or more tickets</p>
    </div>
    </div>
  )
}

export default NumberOfComponents