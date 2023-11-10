// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { UseCalendar } from "@/app/components/SearchButton/UseCalendar/page";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";

// type EventHandler = (event: MouseEvent | TouchEvent) => void;

// function useOnClickOutside(
//   ref: React.RefObject<HTMLElement>,
//   handler: EventHandler
// ) {
//   useEffect(() => {
//     const listener = (event: MouseEvent | TouchEvent) => {
//       if (!ref.current || ref.current.contains(event.target as Node)) {
//         return;
//       }
//       handler(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, handler]);
// }

// const PostReserve: React.FC = () => {
//   const {
//     startDate,
//     setStartDate,
//     endDate,
//     setEndDate,
//     isOpen,
//     setIsOpen,
//     calendarRef,
//     formatDate,
//   } = UseCalendar();

//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [deliveryOption, setDeliveryOption] = useState("no-delivery");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [address, setAddress] = useState("");
//   const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState(false);

//   useOnClickOutside(dropdownRef, () => {
//     setShowDropdown(false);
//     setIsCustomDropdownOpen(false);
//   });

//   const handleDeliveryOptionChange = (value: string) => {
//     setDeliveryOption(value);
//     if (value === "no-delivery") {
//       setAddress("");
//     } else if (value === "Enter address") {
//       // Open Google Places Autocomplete or your address input method here
//     }
//     setIsCustomDropdownOpen(false);
//   };

//   return (
//     <div className="max-w-sm rounded shadow-lg bg-white p-6">
//       <div className="flex justify-between items-center">
//         <div className="text-2xl font-bold text-gray-900">
//           $100 total before taxes
//         </div>
//       </div>
//       <div className="mt-4">
//         <div className="flex justify-between items-center mb-2">
//           <label className="text-red-500 text-sm font-bold">Dates:</label>
//         </div>
//         <div ref={calendarRef} className="relative">
//           <button
//             className="border-2 bg-white text-black text-lg py-2 px-4 rounded w-full"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {formatDate(startDate, "Check in")} -{" "}
//             {formatDate(endDate, "Check out")}
//           </button>
//           {isOpen && (
//             <div className="absolute z-50 left-0 right-0">
//               <DatePicker
//                 selectsRange={true}
//                 startDate={startDate}
//                 endDate={endDate}
//                 onChange={(dates) => {
//                   const [start, end] = dates;
//                   setStartDate(start);
//                   setEndDate(end);
//                 }}
//                 monthsShown={1}
//                 inline
//               />
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="mt-4" ref={dropdownRef}>
//         <label className="text-red-500 text-sm font-bold mb-2">
//           Delivery & pickup location (optional):
//         </label>
//         <div className="relative">
//           <button
//             className="border-2 bg-white text-black text-lg py-2 px-4 rounded truncate w-full h-12"
//             onClick={() => setIsCustomDropdownOpen(!isCustomDropdownOpen)}
//           >
//             {address || "No home delivery or pickup"}
//           </button>
//           {isCustomDropdownOpen && (
//             <div className="absolute w-full z-50 left-0 mt-1 bg-white border-2 border-gray-300 rounded">
//               <div
//                 className="text-black text-lg py-2 px-4 border-b-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleDeliveryOptionChange("no-delivery")}
//               >
//                 No home delivery or pickup
//               </div>
//               <div
//                 className=" text-black text-lg py-2 px-4 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleDeliveryOptionChange("Enter address")}
//               >
//                 Enter address
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <button className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
//         Reserve
//       </button>
//       <p className="text-center text-gray-600 text-xs mt-4">
//         You won't be charged yet
//       </p>
//     </div>
//   );
// };

// export default PostReserve;
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { UseCalendar } from "@/app/components/SearchButton/UseCalendar/page";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";

// const PostReserve = () => {
//   const {
//     startDate,
//     setStartDate,
//     endDate,
//     setEndDate,
//     isOpen,
//     setIsOpen,
//     calendarRef,
//     formatDate,
//   } = UseCalendar();

//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState(false);
//   const [address, setAddress] = useState("");
//   const [deliveryOption, setDeliveryOption] = useState("no-delivery");

//   useEffect(() => {
//     const listener = (event: MouseEvent | TouchEvent) => {
//       // Ensure the target is of type Node before checking if it's contained within the ref
//       if (
//         !dropdownRef.current ||
//         !event.target ||
//         !(event.target as Node).isConnected ||
//         dropdownRef.current.contains(event.target as Node)
//       ) {
//         return;
//       }
//       setIsCustomDropdownOpen(false);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, []);

//   const handleSelect = (selectedAddress: any) => {
//     // You might want to define a more specific type for selectedAddress if possible
//     setAddress(selectedAddress.label);
//     setIsCustomDropdownOpen(false);
//   };
//   const handleDeliveryOptionChange = (value: string) => {
//     setDeliveryOption(value);
//     if (value === "no-delivery") {
//       setAddress("");
//     } else if (value === "Enter address") {
//       // Open Google Places Autocomplete or your address input method here
//     }
//     setIsCustomDropdownOpen(false);
//   };

//   return (
//     <div className="max-w-sm rounded shadow-lg bg-white p-6">
//       <div className="flex justify-between items-center">
//         <div className="text-2xl font-bold text-gray-900">
//           $100 total before taxes
//         </div>
//       </div>
//       <div className="mt-4">
//         <div className="flex justify-between items-center mb-2">
//           <label className="text-red-500 text-sm font-bold">Dates:</label>
//         </div>
//         <div ref={calendarRef} className="relative">
//           <button
//             className="border-2 bg-white text-black text-lg py-2 px-4 rounded w-full"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {formatDate(startDate, "Check in")} -{" "}
//             {formatDate(endDate, "Check out")}
//           </button>
//           {isOpen && (
//             <div className="absolute z-50 left-0 right-0">
//               <DatePicker
//                 selectsRange={true}
//                 startDate={startDate}
//                 endDate={endDate}
//                 onChange={(dates) => {
//                   const [start, end] = dates;
//                   setStartDate(start);
//                   setEndDate(end);
//                 }}
//                 monthsShown={1}
//                 inline
//               />
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="mt-4" ref={dropdownRef}>
//         <label className="text-red-500 text-sm font-bold mb-2">
//           Delivery & pickup location (optional):
//         </label>
//         <div className="relative">
//           <button
//             className="border-2 bg-white text-black text-lg py-2 px-4 rounded truncate w-full h-12"
//             onClick={() => setIsCustomDropdownOpen(!isCustomDropdownOpen)}
//           >
//             {address || "No home delivery or pickup"}
//           </button>
//           {isCustomDropdownOpen && (
//             <div className="absolute w-full z-50 left-0 mt-1 bg-white border-2 border-gray-300 rounded">
//               <div
//                 className="text-black text-lg py-2 px-4 border-b-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleDeliveryOptionChange("no-delivery")}
//               >
//                 No home delivery or pickup
//               </div>
//               <div
//                 className=" text-black text-lg py-2 px-4 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleDeliveryOptionChange("Enter address")}
//               >
//                 Enter address
//               </div>
//               <GooglePlacesAutocomplete
//                 selectProps={{
//                   isClearable: true,
//                   onChange: handleSelect,
//                 }}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//       <button className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
//         Reserve
//       </button>
//       <p className="text-center text-gray-600 text-xs mt-4">
//         You won't be charged yet
//       </p>
//     </div>
//   );
// };

// export default PostReserve;

"use client";
import React, { useState, useRef, useEffect } from "react";
import { UseCalendar } from "@/app/components/SearchButton/UseCalendar/page";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const PostReserve = () => {
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
  const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("no-delivery");

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Ensure the target is of type Node before checking if it's contained within the ref
      if (
        !dropdownRef.current ||
        !event.target ||
        !(event.target as Node).isConnected ||
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setIsCustomDropdownOpen(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  const handleSelect = (selectedAddress: any) => {
    // You might want to define a more specific type for selectedAddress if possible
    setAddress(selectedAddress.label);
    setIsCustomDropdownOpen(false);
  };
  const handleDeliveryOptionChange = (value: string) => {
    setDeliveryOption(value);
    if (value === "no-delivery") {
      setAddress("");
    } else if (value === "Enter address") {
      // Open Google Places Autocomplete or your address input method here
    }
    setIsCustomDropdownOpen(false);
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
            onClick={() => setIsCustomDropdownOpen(!isCustomDropdownOpen)}
          >
            {address || "No home delivery or pickup"}
          </button>
          {isCustomDropdownOpen && (
            <div className="absolute w-full z-50 left-0 mt-1 bg-white border-2 border-gray-300 rounded">
              <div
                className="text-black text-lg py-2 px-4 border-b-2 hover:bg-gray-100 cursor-pointer h-12"
                onClick={() => handleDeliveryOptionChange("no-delivery")}
              >
                No home delivery or pickup
              </div>
              <div
                className=" text-black text-lg py-2 px-4 hover:bg-gray-100 cursor-pointer h-12"
                onClick={() => handleSelect}
              >
                <GooglePlacesAutocomplete
                  selectProps={{
                    isClearable: true,
                    onChange: handleSelect,
                    styles: {
                      control: (provided, state) => ({
                        ...provided,
                        border: "none",
                        boxShadow: "none",
                        backgroundColor: state.isFocused
                          ? "white"
                          : "transparent",
                        "&:hover": {
                          backgroundColor: "gray", // Change background color on hover
                        },
                      }),
                    },
                  }}
                />
              </div>
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
