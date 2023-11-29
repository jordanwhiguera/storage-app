import React from "react";

const PartFour = () => {
  return (
    //HERO SECTION PART 1
    //Container div
    <div className="mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-white">
      <div className="flex flex-col-reverse lg:flex-row min-h-screen ">
        {/* Image Content */}
        <div className="flex-1 py-10 ">
          <img
            src="/images/car-airport.jpeg"
            alt="Uber Image"
            className=" w-full h-full rounded-lg object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6 text-black">
            Find affordable airport parking near you
          </h1>
          <p className="text-lg mb-8 text-black">
            Parking at the airport can be expensive. Instead, park your car at a
            local's house for a fraction of the price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartFour;
