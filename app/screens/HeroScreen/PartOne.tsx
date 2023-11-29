import React from "react";

const PartOne = () => {
  return (
    //HERO SECTION PART 1
    //Container div
    <div className="mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-black">
      <div className="flex flex-col lg:flex-row min-h-screen ">
        {/* Text Content */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Making storing your stuff easy
          </h1>
          <p className="text-lg mb-8 text-white">
            Request a pickup, and have your things stored for you
          </p>
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Enter location"
              className="form-input px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-md">
            See prices
          </button>
        </div>
        {/* Image Content */}
        <div className="flex-1 py-10 ">
          <img
            src="/images/lady-phone.jpg"
            alt="Uber Image"
            className=" w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PartOne;
