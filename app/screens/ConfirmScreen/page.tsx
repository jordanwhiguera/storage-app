import React from "react";
import ConfirmSum from "./ConfirmSum/page";
import ConfirmDetail from "./ConfirmDetail/page";

const ConfirmScreen = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mx-24">
      <ConfirmSum />
      <ConfirmDetail />
    </div>
  );
};

export default ConfirmScreen;
