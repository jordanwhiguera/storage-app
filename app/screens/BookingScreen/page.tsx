import React from "react";
import feedData from "@/app/assets/data/feed";

const BookingScreen = () => {
  const imageUrl =
    feedData[0]?.image ||
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"; //
  return (
    <div className="max-w-sm rounded overflow-hidden ">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-8">Bookings</div>
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-lg mr-4"
            src={imageUrl}
            alt="Room Image"
          />
          <div className="text-sm">
            <p className=" leading-none">20' x 20' Garage</p>
            <p className="text-gray-600">Hosted by Mary</p>
            <p className="text-gray-600">Oct 20, 2021-Oct 20, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;
