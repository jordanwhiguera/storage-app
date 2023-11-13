import React from "react";
import PostReview from "../../PostScreen/PostReview/page";

const ProfileGuestReview = () => {
  return (
    <div className="pl-4">
      <div className="text-lg font-bold max-w-2xl mx-auto pt-4">
        Reviews by guests
      </div>
      <PostReview />
    </div>
  );
};

export default ProfileGuestReview;
