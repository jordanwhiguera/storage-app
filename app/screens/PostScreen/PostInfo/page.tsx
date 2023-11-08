import React from "react";
import PostQuick from "../PostQuick/page";

const PostInfo = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="border-b pb-4 mb-4">
        <h1 className="text-2xl font-semibold mb-2">
          20' x 20' garage hosted by Sam
        </h1>
        <div className="text-gray-600">
          4.4 (11 reviews) • Port Saint Lucie, FL • 7.6 mi
        </div>
      </div>
      <div className="flex items-center mb-4">
        <PostQuick />
      </div>
      <div className="border-t border-b pt-4">
        <p className="mb-2">
          Kentucky charm meets modern luxury in this spacious loft featuring 3
          bedrooms, and 2.5 bathrooms. The loft has private elevator access, and
          is right next to the waterfront park, the KFC Yum! Center, and
          multiple stops on the Kentucky Bourbon trail!
        </p>
        <button className="text-blue-500 hover:underline mb-6">
          Show more
        </button>
      </div>
    </div>
  );
};

export default PostInfo;
