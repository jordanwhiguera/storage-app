import React from "react";

const PayInfo = () => {
  return (
    <div className="flex flex-col p-4 w-full">
      <div className="text-2xl font-semibold mb-4">Confirm and pay</div>

      <div className="mb-8 border-b pb-8">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-medium">Your booking</div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div>Dates</div>
          <button className="text-sm text-blue-600">Edit</button>
        </div>
        <div className=" font-medium mb-4">Nov 16 – 17</div>

        <div className="flex justify-between items-center mb-2">
          <div>Delivery and pickup location(optional)</div>
          <button className="text-sm text-blue-600">Edit</button>
        </div>
        <div className=" font-medium">No Delivery and pickup</div>
      </div>

      <div className="mb-4 border-b pb-10">
        <div className="text-lg font-medium mb-2">Pay with</div>
        <div className="flex space-x-2">
          {/* Replace these with actual logos or SVGs */}
          <div className="bg-gray-200 p-2">VISA</div>
          <div className="bg-gray-200 p-2">AMEX</div>
          <div className="bg-gray-200 p-2">DISCOVER</div>
          <div className="bg-gray-200 p-2">PayPal</div>
          <div className="bg-gray-200 p-2">G Pay</div>
        </div>
      </div>

      {/* Add additional payment options and a submit button here */}
      <button className="btn">Confirm and pay</button>
    </div>
  );
};
export default PayInfo;
