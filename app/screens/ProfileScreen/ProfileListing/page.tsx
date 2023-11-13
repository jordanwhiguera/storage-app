import React from "react";
import feed from "@/app/assets/data/feed";
import Post from "@/app/components/Post/page";
import { FeedItem } from "@/app/assets/data/feed";
const ProfileListing = () => {
  const firstItem: FeedItem | undefined = feed[0];
  return (
    <div className=" px-4  mx-auto pb-4">
      <p className="text-lg font-bold">Julia Listing's</p>
      <div className="w-1/2 -mt-4 mb-2">
        {/* Render only the first Post if it exists */}
        {firstItem && <Post key={firstItem.id} {...firstItem} />}
      </div>
    </div>
  );
};

export default ProfileListing;
