"use client";
import React from "react";
import GoogleMapReact from "google-map-react";

interface IAnyReactComponentProps {
  text: string;
  lat: number;
  lng: number;
}

const AnyReactComponent = ({ text, lat, lng }: IAnyReactComponentProps) => (
  <div className="absolute -translate-x-1/2 -translate-y-1/2">
    {/* Use more standard size classes */}
    <div className="h-32 w-32 bg-purple-500 rounded-full flex justify-center items-center text-white border-2 border-white opacity-50"></div>
  </div>
);

export default function PostMap() {
  const defaultProps = {
    center: {
      lat: 27.29569,
      lng: -80.39398,
    },
    zoom: 14,
  };
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";
  const createMapOptions = () => {
    return {
      draggable: false, // Disable map dragging
      zoomControl: false, // Disable zoom controls
      scrollwheel: false, // Disable map zooming with the scroll wheel
      disableDoubleClickZoom: true, // Disable map zooming with double click
      gestureHandling: "none", // Disable touch gestures
      keyboardShortcuts: false, // Disable keyboard shortcuts for map navigation
      // Add any other options you need here
    };
  };

  return (
    <div className="h-96 w-full mt-8 mb-4 rounded-2xl overflow-hidden ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={createMapOptions}
      >
        <AnyReactComponent lat={27.29569} lng={-80.39398} text="" />
      </GoogleMapReact>
    </div>
  );
}
