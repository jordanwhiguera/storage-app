"use client";
import React from "react";

const PostHost = () => {
  return (
    <div className="flex items-center p-4 border-t border-gray-200">
      {/* Image container */}
      <div className="avatar placeholder mr-6">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
          <span className="text-2xl">K</span>
        </div>
      </div>

      {/* Text container */}
      <div className="flex flex-col mr-6">
        <span className="text-lg font-semibold">Stay with Daniel</span>
        <span className="text-sm text-gray-500">Joined August 2020</span>
      </div>
      <button className="btn">Contact Host</button>
    </div>
  );
};

export default PostHost;
