"use client";
import React from "react";
import Post from "@/app/components/Post/page";
import PostImage from "./PostImage/page";
import PostInfo from "./PostInfo/page";

const PostScreen = () => {
  return (
    <div>
      <PostImage />
      <PostInfo />
    </div>
  );
};

export default PostScreen;
