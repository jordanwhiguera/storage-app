"use client";
import React, { useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import search from "@/app/assets/data/search";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const LocationSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="relative w-full">
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_API_KEY}
        selectProps={{
          styles: {
            control: (provided) => ({
              ...provided,
              borderTopLeftRadius: "9999px", // 'rounded-tl-full' in Tailwind
              borderBottomLeftRadius: "9999px", // 'rounded-bl-full' in Tailwind
              borderTopRightRadius: "0", // Remove rounding from the right side if needed
              borderBottomRightRadius: "0", // Remove rounding from the right side if needed
            }),
            // ... other styles you want to override
          },
          // ... other selectProps you want to pass
        }}
      />
    </div>
  );
};

export default LocationSearch;
