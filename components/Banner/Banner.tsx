import Image from "next/image";
import React from "react";
import s from "./Banner.module.scss";

const Banner = () => {
  return <div className={s.container}>

     <div className={s.titleImgDiv} ><Image
              src="/images/The_Happy_Door_Flea_Group.png"
              alt="theme toggle icon"
              width={
670}
              height={
                330}
              
            /></div>
     <div className={s.titleImgDiv2} ><Image
              src="/images/Group 131.png"
              alt="theme toggle icon"
              width={360}
              height={320}
              
            /></div>
  </div>;
};

export default Banner;
