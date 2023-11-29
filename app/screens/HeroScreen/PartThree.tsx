import React from "react";

const PartThree = () => {
  return (
    //HERO SECTION PART 1
    //Container div
    <div className="mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen ">
        {/* Text Content */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6 text-black">
            Flexible storage solutions
          </h1>
          <p className="text-lg mb-8 text-black">
            Store your stuff in other people's garages and basements at an
            affordable and transparent price. You can rent a space for as little
            as a day or as long as you need.
          </p>

          <button className="bg-black text-white px-6 py-2 rounded-md">
            See prices
          </button>
        </div>
        {/* Image Content */}
        <div className="flex-1 py-10 ">
          <img
            src="/images/man-garage.jpeg"
            alt="Uber Image"
            className=" w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default PartThree;
