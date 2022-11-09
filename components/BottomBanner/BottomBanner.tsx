import React from 'react'
import s from "./BottomBanner.module.scss";
type BottomBannerProps={
    nextCount:number
    setNumberCount:any
    
}
function BottomBanner ({nextCount,setNumberCount}:BottomBannerProps) {

    const nextTranslate3=()=>{
      
        if(nextCount==3){return {transform: "translateY(50px)"} }
        if(nextCount==4){return {transform: "translateY(70px)"} }
        
    }
    const nextTranslate3null={
        transform: "translateY(0px)" ,
    }
    const setYellowBar=()=>{
      if(nextCount===0) {return {backgroundColor:"rgba(255, 205, 0, 1)",width:"20%",borderRadius:"20px",height:"100%"} }
      if(nextCount===1) {return {backgroundColor:"rgba(255, 205, 0, 1)",width:"40%",borderRadius:"20px",height:"100%"} }
      if(nextCount===2) {return {backgroundColor:"rgba(255, 205, 0, 1)",width:"60%",borderRadius:"20px",height:"100%"} }
      if(nextCount===3) {return {backgroundColor:"rgba(255, 205, 0, 1)",width:"80%",borderRadius:"20px",height:"100%"} }
      if(nextCount===4) {return {backgroundColor:"rgba(255, 205, 0, 1)",width:"100%",borderRadius:"20px",height:"100%"} }
    }
  return (
    <div className={`${s.containerWrapper}`}><div className={`${s.container}`} ><p className={`${s.text}`} >100rs per day - <br/>Rs.50 Redemable at any stall</p></div>
    {(nextCount < 5) &&<div 
      className={`${s.next} ` } 
    onClick={()=>{setNumberCount()}} 
    style={nextTranslate3()}>
      <div style={setYellowBar() } ></div>
     {nextCount<=3&&<p> Next</p>}
     {nextCount==4&&<p> Pay</p>}
     </div>}</div>
  )
}

export default BottomBanner