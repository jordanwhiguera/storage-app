"use client";
import React, { useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import search from "@/app/assets/data/search";

const LocationSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Enter your text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md rounded-l-full text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      {inputValue && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <BsFillXCircleFill
            className="text-gray-500 cursor-pointer"
            onClick={clearInput}
          />
        </div>
      )}
      <div className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg">
        {inputValue &&
          search.map((item) => (
            <div key={item.id} className="px-4 py-2 border-b hover:bg-gray-100">
              {item.description}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LocationSearch;
