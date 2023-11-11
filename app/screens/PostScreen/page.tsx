"use client";
import React from "react";
import PostImage from "./PostImage/page";
import PostInfo from "./PostInfo/page";
import PostReserve from "./PostReserve/page";

const PostScreen = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-screen-lg">
        <PostImage />
        <div className="flex justify-between w-full">
          <div className="flex-grow flex-shrink min-w-0">
            <PostInfo />
          </div>
          {/* Make PostReserve disappear on small screens */}
          <div className="hidden md:flex md:flex-shrink lg:ml-auto lg:mr-3 pt-6 items-start">
            <PostReserve />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostScreen;
