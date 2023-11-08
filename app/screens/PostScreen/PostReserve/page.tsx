import React from "react";

const PostReserve: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          $100 total before taxes
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-700 text-sm font-bold">CHECK-IN</label>
          <label className="text-gray-700 text-sm font-bold">CHECKOUT</label>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-900 text-lg">11/19/2023</span>
          <span className="text-gray-900 text-lg">11/24/2023</span>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-gray-700 text-sm font-bold mb-2">GUESTS</label>
        <div className="text-gray-900 text-lg">1 guest</div>
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
