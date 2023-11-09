"use client";
import React from "react";
import { UseCalendar } from "../UseCalendar/page";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarButtonTest: React.FC = () => {
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

  return (
    <div ref={calendarRef} className="relative">
      <button className="bg-amber-600 ml-20" onClick={() => setIsOpen(!isOpen)}>
        {formatDate(startDate, "Check in")} - {formatDate(endDate, "Check out")}
      </button>
      {isOpen && (
        <div className="absolute z-50">
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(dates) => {
              const [start, end] = dates as [Date, Date];
              setStartDate(start);
              setEndDate(end);
            }}
            monthsShown={2} // Show two months side by side
            inline // This prop makes the DatePicker always visible
          />
        </div>
      )}
    </div>
  );
};

export default CalendarButtonTest;
