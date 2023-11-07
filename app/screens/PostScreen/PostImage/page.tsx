"use client";
import React from "react";
import feedData from "@/app/assets/data/feed"; // Ensure this path is correct
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const PostImage = () => {
  const imageUrl = feedData[0].image; // Access the image URL of the first item
  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Container for the image and icons */}
      <div className="relative">
        {/* Image */}
        <img src={imageUrl} alt="Post" className="w-full h-auto" />

        {/* Left Arrow inside the image */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <AiFillLeftCircle className="text-white text-4xl" />
        </div>

        {/* Right Arrow inside the image */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <AiFillRightCircle className="text-white text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default PostImage;
