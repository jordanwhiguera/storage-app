"use client";
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

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
      <div className="flex space-x-2">
        {/* Input and buttons */}
        <div>
          <input
            className="input input-bordered"
            placeholder="Address, city, or airport"
          />
        </div>
        <div>
          <button className="btn" onClick={toggleCalendar}>
            {dateRangeText}
          </button>
        </div>
        <div>
          <button className="btn">Search</button>
        </div>
      </div>

      {/* Calendar */}
      {isOpen && (
        <div
          ref={calendarRef} // Attach ref to the calendar container
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
