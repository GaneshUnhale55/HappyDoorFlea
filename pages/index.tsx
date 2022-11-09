import Banner from "@components/Banner";
import BottomBanner from "@components/BottomBanner";
import { Footer, Header } from "@components/common";
import Congratulations from "@components/Congratulations";
import Form from "@components/Form";
import GuestDetails from "@components/GuestDetails";
import NumberOfComponents from "@components/NumberOfComponents/NumberOfComponents";
import Summary from "@components/Summary";

import WhatDates from "@components/WhatDates";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const [nextCount, setNextCount] = useState(0);
  const [guest, setGuest] = useState(0);
  const [GuestListArr, setGuestListArr] = useState([]);
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header />
      <div style={{ width: "100%", display: "flex" }}>
        <Banner />
        {nextCount === 0 && <Form></Form>}
        {/* {(nextCount===1)&&<div style={{color:"white",height:"auto",width:"40%", backgroundColor:"rgba(21, 161, 184, 1)"}}>my name is ganesh</div>} */}
        {nextCount === 1 && (
          <NumberOfComponents
            guest={guest}
            setGuest={setGuest}
          ></NumberOfComponents>
        )}
        {nextCount === 2 && <WhatDates></WhatDates>}
        {nextCount === 3 && (
          <GuestDetails
            guest={guest}
            GuestListArr={GuestListArr}
            setGuestListArr={setGuestListArr}
          ></GuestDetails>
        )}
        {nextCount === 4 && (
          <Summary guest={guest} nextCount={nextCount}
          GuestListArr={GuestListArr}
            setGuestListArr={setGuestListArr}
          ></Summary>
        )}
        {nextCount === 5 && <Congratulations></Congratulations>}
      </div>
      {console.log("nextcount", nextCount)}

      <BottomBanner
        nextCount={nextCount}
        setNumberCount={() => {
          setNextCount(nextCount + 1);
        }}
      ></BottomBanner>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
