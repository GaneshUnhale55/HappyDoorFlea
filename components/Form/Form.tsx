import React from 'react'
import s from "./Form.module.scss";
import { useState } from "react";
// type Guest = {
  
//   name: any,
      
//   mobile: any,
//   email: any
// };
function Form() {
  const [Input, setInput] = useState({
    name:"",
    mobile:"",
    email:""
  })
//   const inputFunc=()=>{
//   const mapped=Input.map(()=>{
//     return(item?.id==elem?.id)?{...item,[event.target.name]:event.target.value}:item
//   })
// }
const nameInput=(e:any)=>{
  let name=e.target.name
  let inputStore={...Input,[name]:e.target.value}
setInput(inputStore)
}
console.log("input",Input);


  return (
    <div className={s.container}>
        <p  className={s.header}>Enter Details Here!</p>
        <div className={s.textInputdiv}>
            <input className={s.textInput} type={'text'} placeholder="Name"
            name="name"
            onChange={(e)=>nameInput(e)}
            autoComplete="off"
            ></input>
        <input className={s.textInput} type={'number'} placeholder="Mobile" 
        name="mobile"
        autoComplete="off"
        onChange={(e)=>nameInput(e)} ></input>
        <input className={s.textInput} type={'email'} placeholder="Email id"
        name="email"
        autoComplete="off"
        onChange={(e)=>nameInput(e)}></input>
        </div></div>
  )
}

export default Form