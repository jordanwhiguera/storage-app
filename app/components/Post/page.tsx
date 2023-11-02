import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaTruckPickup } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Post = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Storage"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">Storage Description</h2>
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500" /> 5 (13)
          </div>
        </div>
        <p>Storage Title</p>
        <p className="flex items-center">
          <GrLocation className="mr-2" /> 2 miles away
        </p>
        <p>$100 monthly before taxes</p>
        <div className="card-actions justify-start">
          <div className="badge badge-secondary">
            <FaTruckPickup className="mr-1" /> Courier+
          </div>
          <div className="badge badge-secondary">$40 per delivery</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
