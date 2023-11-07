"use client";
import React from "react";
import feedData from "@/app/assets/data/feed";

const PostImage = () => {
  const imageUrl =
    feedData[0]?.image ||
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"; // Fallback to the provided URL if feedData[0]?.image is undefined

  return (
    <div className="flex justify-center">
      {" "}
      {/* Only center horizontally */}
      <div
        className="grid grid-cols-3 grid-rows-2 gap-2 bg-black rounded-2xl overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="row-span-2 col-span-2 bg-gray-300 overflow-hidden">
          <img
            src={imageUrl}
            alt="Post"
            className="object-cover w-full h-full transform scale-150"
            style={{ transformOrigin: "top left" }}
          />
        </div>
        <div className="bg-gray-300 overflow-hidden">
          <img
            src={imageUrl}
            alt="Post"
            className="object-cover w-full h-full transform scale-150"
            style={{ transformOrigin: "top right" }}
          />
        </div>
        <div className="bg-gray-300 overflow-hidden">
          <img
            src={imageUrl}
            alt="Post"
            className="object-cover w-full h-full transform scale-150"
            style={{ transformOrigin: "center right" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostImage;
