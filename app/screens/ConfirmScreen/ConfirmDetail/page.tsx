import React from "react";

const ConfirmDetail = () => {
  return (
    <div className=" px-6 w-full mx-auto md:mt-14">
      <div className="flex justify-between items-center border-t pt-4 md:border-t-0 md:pt-0 ">
        <div>
          <h2 className="text-lg font-semibold">Address</h2>
          <p>123 Main Street, San Francisco, CA</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">
            Delivery and Pick up address
          </h2>
          <p>855 main street, nyc, 22223</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Amount</h2>
          <p>$250.00</p>
        </div>
        <button className="text-blue-600 hover:text-blue-800">
          View receipt
        </button>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Reservation code</h2>
          <p>ABCDEFGHIJ</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center pb-8">
        <div>
          <h2 className="text-lg font-semibold">Leanne is your host</h2>
          <p className="">+1 (123) 456-7890</p>
          <p>Contact Leanne to coordinate arrival time and key exchange.</p>
        </div>
        <div>
          <button className="btn">Message</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDetail;
