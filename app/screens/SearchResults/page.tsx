import React from "react";
import feed from "@/app/assets/data/feed";
import Post from "@/app/components/Post/page";
import { FeedItem } from "@/app/assets/data/feed"; // Assuming you have a type defined for the feed items

const SearchResults = () => {
  return (
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {feed.map((item: FeedItem) => (
        <Post key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SearchResults;
