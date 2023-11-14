import React from "react";

const HostScreen = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-2xl font-semibold mb-6">Welcome back, Jordan</h1>
        <button className="px-4 py-2 rounded bg-gray-200 text-sm font-medium text-gray-700">
          Add listing
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-8">Your listings</h2>
        <div className="flex gap-2 mb-8">
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700">
            All listings (0)
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700">
            Currently booked (0)
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700">
            Available (0)
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700">
            Upcoming (0)
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700">
            Pending review (0)
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center p-36 border-2 border-dashed border-gray-300 rounded-lg">
        <p className="text-sm font-medium text-gray-700">
          You don’t have any guests checking out today or tomorrow.
        </p>
      </div>
    </div>
  );
};
export default HostScreen;
