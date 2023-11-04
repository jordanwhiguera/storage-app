"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchButton: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleCalendarClose = () => setIsOpen(false);
  const handleCalendarOpen = () => setIsOpen(true);

  return (
    <div>
      <button type="button" onClick={handleCalendarOpen}>
        Select Date Range
      </button>
      {isOpen && (
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update: [Date | null, Date | null]) => {
            setStartDate(update[0]);
            setEndDate(update[1]);
          }}
          onCalendarClose={handleCalendarClose}
        />
      )}
    </div>
  );
};

export default SearchButton;
