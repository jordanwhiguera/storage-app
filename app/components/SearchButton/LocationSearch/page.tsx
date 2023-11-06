"use client";
import React, { useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import search from "@/app/assets/data/search";

const LocationSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Enter your text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      {inputValue && (
        <BsFillXCircleFill
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={clearInput}
        />
      )}
    </div>
  );
};

export default LocationSearch;
