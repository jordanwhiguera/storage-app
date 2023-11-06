"use client";
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FaSearch } from "react-icons/fa";
import LocationSearch from "./LocationSearch/page";

const SearchButton: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Toggle the visibility of the calendar
  const toggleCalendar = () => setIsOpen(!isOpen);

  // Format the dates for display
  const formattedStartDate = startDate
    ? format(startDate, "MM/dd/yyyy")
    : "Check in";
  const formattedEndDate = endDate
    ? format(endDate, "MM/dd/yyyy")
    : "Check out";
  const dateRangeText =
    startDate && endDate
      ? `${formattedStartDate} - ${formattedEndDate}`
      : "Check in - Check out";

  // Effect for handling clicks outside of the calendar to close it
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      // If the click is outside the calendar, close it
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when the calendar is open
    if (isOpen) {
      document.addEventListener("mousedown", handleDocumentClick);
    }

    // Cleanup: Remove event listener
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen]); // Only re-run if isOpen changes

  return (
    <div className="relative">
      <div className="flex items-center border rounded-full ">
        {/* Left side - Location input + Date range */}
        <div className="flex-1 flex">
          {" "}
          {/* This div will take half the space */}
          {/* Location input */}
          <div className="flex-1">
            {" "}
            {/* This input will take up the available space */}
            <LocationSearch />
          </div>
          {/* Divider */}
          <div className="w-px bg-gray-300"></div>
          {/* Date range button with calendar icon */}
          <div className="flex-1">
            {" "}
            {/* This button will take up the available space */}
            <button
              className="flex items-center px-4 py-2 whitespace-nowrap w-full"
              onClick={toggleCalendar}
            >
              <FaSearch className="mr-2" />
              {dateRangeText}
            </button>
          </div>
        </div>

        {/* Right side - Search button */}
        <div className="flex-none">
          {" "}
          {/* This div will not grow or shrink */}
          <button className="bg-red-500 text-white w-12 h-12 rounded-full flex justify-center items-center p-2">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Calendar */}
      {isOpen && (
        <div
          ref={calendarRef}
          className="calendar-container absolute z-50 left-0 mt-1"
          style={{
            top: `${calendarRef.current?.getBoundingClientRect().bottom}px`,
            left: `${calendarRef.current?.getBoundingClientRect().left}px`,
          }}
        >
          <DatePicker
            selectsRange
            inline
            monthsShown={2}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: [Date | null, Date | null]) => {
              setStartDate(update[0]);
              setEndDate(update[1]);
            }}
            onCalendarClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchButton;
