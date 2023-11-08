import React from "react";

const PostQuick = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
      <div className="flex flex-wrap -mx-2">
        {/* You can create an array and map through it for a cleaner component */}
        <div className="px-2 w-1/2">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded bg-gray-200 mr-2">
              {/* Use appropriate icons here */}
              <span>🍳</span>
            </div>
            Pickup truck delivery
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded bg-gray-200 mr-2">
              <span>🐾</span>
            </div>
            Appointment required before each visit
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded bg-gray-200 mr-2">
              <span>🐾</span>
            </div>
            Photograph inventory
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded bg-gray-200 mr-2">
              <span>🐾</span>
            </div>
            Daily | 24/7
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostQuick;
