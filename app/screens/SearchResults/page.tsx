import React from "react";
import feed from "@/app/assets/data/feed";
import Post from "@/app/components/Post/page";

const SearchResults = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {feed.map((item) => (
        <Post key={item.id} {...item} /> // Spread the item props to the Post component
      ))}
    </div>
  );
};
export default SearchResults;
