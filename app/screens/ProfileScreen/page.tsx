import React from "react";
import ProfileAbout from "./ProfileAbout/page";
import ProfileSum from "./ProfileSum/page";
import ProfileListing from "./ProfileListing/page";
import ProfileGuestReview from "./ProfileGuestReview/page";
import ProfileHostReview from "./ProfileHostReview/page";

const ProfileScreen = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <ProfileSum />
      <div className="border-b mx-4"></div>
      <ProfileAbout />

      <ProfileListing />
      <div className="border-b mx-4"></div>
      <ProfileGuestReview />
      <div className="border-b mx-4"></div>
      <ProfileHostReview />
    </div>
  );
};

export default ProfileScreen;
