import React from "react";
import s from "./Summary.module.scss";
import { useEffect, useState } from "react";
type guestProps = {
  guest: any;
  GuestListArr: any;
  setGuestListArr: any;
};
type Guest = {
  id: any;
  name: string;

  phone: any;
  email: any;
};
const Summary= ({ guest, GuestListArr, setGuestListArr }: guestProps) => {
  // const guestloop=()=>{
  //   for (let index = 0; index <= guest; index++) {
  //     console.log("guest",index,guest)
  //     return(
  //     <div key={index}>
  //     <p>Guest {index}</p>
  //   </div>)

  //   }
  // }
  // const [GuestListArr, setGuestListArr] = useState<Guest[]>([])

  const arr = () => {
    let constArr = [];
    for (let index = 0; index < guest; index++) {
      // constArr.push(index + 1);
      let guestObj = {
        id: index + 1,
        name: "",

        phone: "",
        email: "",
      };
      constArr.push(guestObj);
    }
    return constArr;
  };
  // useEffect(() => {
  //   // console.log("arr", arr());
  //   let arra = arr();
  //   setGuestListArr(arra);
  // }, []);

  useEffect(() => {
    console.log("GuestListArr", GuestListArr);
  }, [GuestListArr]);

  // let arr1 = Array.apply(null, {length: guest:any}:any).map(Number.call, Number);

  const BigInputSetStateFunc = (event: any, elem: any) => {
    console.log("event,elem", event.target.value, event.target.name, elem);

    let mapped = GuestListArr.map((item: any) => {
      return item?.id == elem?.id
        ? { ...item, [event.target.name]: event.target.value }
        : item;
    });
    setGuestListArr(mapped);
  };
  
  return (
    <div className={s.container}>
      <p className={s.header}>Summary </p>

      {GuestListArr.map((elem: any) => {
        return (
          <div key={elem?.id} className={s.guestwrapper}>
            <p className={s.guest}>Guest {elem?.id}</p>
            <input
              className={s.textInputBig}
              type={"text"}
              placeholder="Name"
              value={elem?.name}
              // onChange={(e) => BigInputSetStateFunc(e, elem)}
              name={"name"}
              autoComplete="off"
              readOnly
            ></input>
            <div className={s.textInputSmallWrapper}>
              <input
                className={s.textInputSmall}
                type={"text"}
                placeholder="Mobile"
                name={"phone"}
                value={elem?.phone}
                autoComplete="off"
                // onChange={(e) => BigInputSetStateFunc(e, elem)}
                readOnly
              ></input>
              <input
                className={s.textInputSmall}
                type={"text"}
                placeholder="Email id"
                name={"email"}
                value={elem?.email}
                autoComplete="off"
                // onChange={(e) => BigInputSetStateFunc(e, elem)}
                readOnly
              ></input>
            </div>
            <div className={s.dashedborder}></div>
          </div>
        );
      })}

      <div className={s.totalamount} ><p className={s.totalamounttext}>Total Amount</p><p className={s.totalamounttext}>Rs.5000</p></div>
    </div>
  );
};

export default Summary;
