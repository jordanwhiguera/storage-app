import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaTruckPickup } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import feed from "@/app/assets/data/feed";

const Post = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={feed[0].image} alt="Storage Image" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title truncate">{feed[0].type}</h2>
          {/* Use "truncate" to cut off the text with an ellipsis */}
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500" /> {feed[0].stars} (
            {feed[0].numReviews})
          </div>
        </div>
        <p className="truncate">{feed[0].title}</p>
        <p className="flex items-center">
          <GrLocation className="mr-2" /> {feed[0].distance} miles away
        </p>
        <p>${feed[0].price} monthly before taxes</p>
        <div className="card-actions justify-start">
          <div className="badge badge-secondary">
            <FaTruckPickup className="mr-1" /> {feed[0].carType}
          </div>
          <div className="badge badge-secondary">
            ${feed[0].deliveryPrice} per delivery
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
