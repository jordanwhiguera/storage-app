import React from "react";
import PayInfo from "./PayInfo/page";
import PayCard from "./PayCard/page";

const PayScreen = () => {
  return (
    <div className="flex justify-center lg:mx-40">
      <PayInfo />
      <div className=" ml-8 mt-16 hidden md:block">
        <PayCard />
      </div>
    </div>
  );
};
export default PayScreen;
