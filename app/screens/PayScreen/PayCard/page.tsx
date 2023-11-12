import React from "react";
import feedData from "@/app/assets/data/feed";

const PayCard = () => {
  const imageUrl =
    feedData[0]?.image ||
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"; // Fallback to the provided URL if feedData[0]?.image is undefined
  return (
    <div className="w-80 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex">
          <img
            className="w-20 h-20 object-cover rounded-lg"
            src={imageUrl}
            alt="Tent"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-900">
              Overlanding parking Spot.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between border-t pt-4">
          <span className="text-lg font-semibold text-gray-900">
            Price details
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">$24.00 x 1 night</span>
          <span className="text-sm font-semibold text-gray-900">$24.00</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-sm text-gray-500">Airbnb service fee</span>
          <span className="text-sm font-semibold text-gray-900">$3.39</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-sm text-gray-500">Taxes</span>
          <span className="text-sm font-semibold text-gray-900">$1.68</span>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <span className="text-lg font-semibold text-gray-900">
            Total (USD)
          </span>
          <span className="text-lg font-semibold text-gray-900">$29.07</span>
        </div>
      </div>
    </div>
  );
};

export default PayCard;
