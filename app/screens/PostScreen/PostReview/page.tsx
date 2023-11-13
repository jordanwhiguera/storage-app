"use client";
import React from "react";

const PostReview = () => {
  return (
    <div className="max-w-2xl mx-auto py-6">
      <div className="flex items-center space-x-3">
        <div className="avatar placeholder mr-2">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span className="text-xl">K</span>
          </div>
        </div>
        <div>
          {/* Star Rating */}
          <div className="flex text-blue-500">
            {/* Repeat the star for the number of ratings you have */}
            <span>⭐️⭐️⭐️⭐️⭐️</span>
          </div>
          <div className="flex">
            <p className="text-white font-bold text-sm mr-1">Howard </p>
            <p className="text-gray-400 text-sm"> November 1, 2023</p>
          </div>

          <p className="text-white">
            Amazing car, great communication and really friendly! Would
            recommend to anyone!
          </p>
        </div>
      </div>
      {/* Another User Review */}
    </div>
  );
};

export default PostReview;
