"use client";
import React, { useRef } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const TabSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll the container by a certain amount to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };

  // Scroll the container by a certain amount to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black w-full flex items-center mt-2 p-4 relative">
      {/* Left scroll icon */}
      <button onClick={scrollLeft} className="mr-2">
        <AiFillLeftCircle size={30} color="white" />
      </button>

      {/* Container for the buttons with a max-width and overflow-hidden */}
      <div
        ref={scrollContainerRef}
        className="flex flex-nowrap overflow-x-hidden"
      >
        <button className="btn mr-2">Delivery</button>
        <button className="btn mr-2">Self-Storage</button>
        <button className="btn mr-2">Vehicle Storage</button>
        <button className="btn mr-2">Airport Parking</button>
        {/* Right scroll icon */}
      </div>
      <button onClick={scrollRight} className=" mr-2">
        <AiFillRightCircle size={30} color="white" />
      </button>

      {/* Filter button */}
      <button className="btn">Filter</button>
    </div>
  );
};
export default TabSlider;
