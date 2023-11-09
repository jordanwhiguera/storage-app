"use client";
import React, { useState } from "react";
import { UseCalendar } from "@/app/components/SearchButton/UseCalendar/page";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LocationSearch from "@/app/components/SearchButton/LocationSearch/page";

const PostReserve: React.FC = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isOpen,
    setIsOpen,
    calendarRef,
    formatDate,
  } = UseCalendar();
  const [deliveryOption, setDeliveryOption] = useState("no-delivery");
  const [showDropdown, setShowDropdown] = useState(false);
  const [address, setAddress] = useState(""); // State to store the entered address

  // Function to handle the delivery option change
  const handleDeliveryOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setDeliveryOption(value);
    if (value !== "Enter address") {
      setShowDropdown(false);
    }
  };

  return (
    <div className="max-w-sm rounded shadow-lg bg-white p-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          $100 total before taxes
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-700 text-sm font-bold">Dates:</label>
        </div>
        <div ref={calendarRef} className="relative">
          <button
            className="bg-amber-600 text-white text-lg py-2 px-4 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {formatDate(startDate, "Check in")} -{" "}
            {formatDate(endDate, "Check out")}
          </button>
          {isOpen && (
            <div className="absolute z-50 left-0 right-0">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(dates) => {
                  const [start, end] = dates as [Date, Date];
                  setStartDate(start);
                  setEndDate(end);
                }}
                monthsShown={2}
                inline
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <label className="text-gray-700 text-sm font-bold mb-2">
          Delivery & pickup location (optional):
        </label>
        <div className="relative">
          <button
            className="bg-amber-600 text-white text-lg py-2 px-4 rounded"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {deliveryOption === "no-delivery"
              ? "No home delivery or pickup"
              : deliveryOption === "Enter address"
              ? "Enter address"
              : "Delivery Option Selected"}
          </button>
          {showDropdown && (
            <div className="absolute w-full z-50 left-0 mt-1 bg-white">
              <select
                value={deliveryOption}
                onChange={handleDeliveryOptionChange}
                className="w-full border border-gray-300 text-white text-lg rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500 overflow-hidden bg-amber-600"
                size={2}
              >
                <option value="no-delivery">No home delivery or pickup</option>
                <option value="Enter address">Enter address</option>
                {/* Add additional options here */}
              </select>
              {deliveryOption === "Enter address" && (
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 text-gray-900 text-lg rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500 mt-1"
                />
              )}
            </div>
          )}
        </div>
      </div>
      <button className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
        Reserve
      </button>
      <p className="text-center text-gray-600 text-xs mt-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default PostReserve;
