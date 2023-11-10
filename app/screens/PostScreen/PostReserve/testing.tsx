import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { UseCalendar } from "@/app/components/SearchButton/UseCalendar/page"; // Make sure this import path is correct

type EventHandler = (event: MouseEvent | TouchEvent) => void;

function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: EventHandler
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

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

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [deliveryOption, setDeliveryOption] = useState("no-delivery");
  const [showDropdown, setShowDropdown] = useState(false);
  const [address, setAddress] = useState("");

  useOnClickOutside(dropdownRef, () => setShowDropdown(false));

  const handleDeliveryOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setDeliveryOption(value);

    if (value === "no-delivery") {
      setAddress("");
      setShowDropdown(false);
    } else if (value === "Enter address") {
      setShowDropdown(true);
    }
  };

  const handleSelectAddress = (addressObject: any) => {
    const address = addressObject.label;
    setAddress(address);
    setShowDropdown(false);
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
          <label className="text-red-500 text-sm font-bold">Dates:</label>
        </div>
        <div ref={calendarRef} className="relative">
          <button
            className="border-2 bg-white text-black text-lg py-2 px-4 rounded w-full"
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
                  const [start, end] = dates;
                  setStartDate(start);
                  setEndDate(end);
                }}
                monthsShown={1}
                inline
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-4" ref={dropdownRef}>
        <label className="text-red-500 text-sm font-bold mb-2">
          Delivery & pickup location (optional):
        </label>
        <div className="relative">
          <button
            className="border-2 bg-white text-black text-lg py-2 px-4 rounded truncate w-full h-12"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {address || "No home delivery or pickup"}
          </button>
          {showDropdown && (
            <div className="absolute w-full z-50 left-0 mt-1 bg-white">
              <select
                value={deliveryOption}
                onChange={handleDeliveryOptionChange}
                className="w-full border-2 text-black text-lg rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500 bg-white overflow-hidden"
                size={2}
                style={{
                  backgroundColor: "white",
                  borderColor: "#e5e7eb",
                  // Here we attempt to remove the gray box by resetting browser defaults
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              >
                <option value="no-delivery">No home delivery or pickup</option>
                <option value="Enter address">Enter address</option>
              </select>
              {deliveryOption === "Enter address" && (
                <GooglePlacesAutocomplete
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                  selectProps={{
                    onChange: handleSelectAddress,
                    styles: {
                      input: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? "#f3f3f3" : "white",
                        color: "black",
                      }),
                      control: (provided, state) => ({
                        ...provided,
                        boxShadow: "none",
                        borderColor: state.isFocused ? "#e5e7eb" : "#e5e7eb",
                      }),
                    },
                    autoFocus: true,
                  }}
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
