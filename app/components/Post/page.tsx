"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaTruckPickup } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FeedItem } from "@/app/assets/data/feed";

const Post: React.FC<FeedItem> = ({
  image,
  type,
  title,
  distance,
  price,
  carType,
  deliveryPrice,
  stars,
  numReviews,
  coordinate, // Not used in the component, can be omitted
}) => {
  return (
    <div className="mt-8 w-full bg-base-100 shadow-xl">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt="Listing Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card-body p-0">
        <div className="flex justify-between items-center px-0 pt-2">
          {" "}
          {/* Adjusted padding */}
          <h2 className="card-title truncate">{type}</h2>
          <div className="flex items-center space-x-1 min-w-max">
            <AiFillStar className="text-yellow-500" />
            <span>
              {stars} ({numReviews})
            </span>
          </div>
        </div>
        <div className="px-0">
          {" "}
          {/* Add horizontal padding here if necessary */}
          <p className="truncate">{title}</p>
          <p className="flex items-center">
            <GrLocation className="mr-2" /> {distance} miles away
          </p>
          <p className="truncate">${price} monthly before taxes</p>
          <div className="card-actions justify-start">
            <div className="badge badge-secondary">
              <FaTruckPickup className="mr-1" /> {carType}
            </div>
            <div className="badge badge-secondary">
              ${deliveryPrice} per delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
