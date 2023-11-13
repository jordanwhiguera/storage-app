import React from "react";
import feedData from "@/app/assets/data/feed";

const ConfirmSum = () => {
  const imageUrl =
    feedData[0]?.image ||
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"; // Fallback to the provided URL if feedData[0]?.image is undefined
  return (
    <div className="w-full rounded overflow-hidden shadow-lg my-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4">
          Your reservation is confirmed
        </div>

        <img className="w-full rounded-lg" src={imageUrl} alt="Cozy SF Loft" />
      </div>

      <div className="px-6 py-1 flex justify-between items-center">
        <div>
          <h3 className="font-bold">20' x 20' Garage</h3>
          <p>Hosted by Michelle</p>
        </div>
        <div>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span className="text-xl">K</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between border-t border-b pb-4 pt-4">
          <div>
            <p className="font-bold">Friday, June 14, 2019</p>
            <p>Check-in</p>
          </div>
          <div>
            <p className="font-bold">Flexible (month-month)</p>
            <p>Check out</p>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white w-full h-10 font-bold  rounded">
          View listing
        </button>
      </div>
    </div>
  );
};
export default ConfirmSum;
