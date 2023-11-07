import React from "react";

const PostInfo = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="border-b pb-4 mb-4">
        <h1 className="text-2xl font-semibold mb-2">
          Entire loft hosted by Samantha
        </h1>
        <div className="text-gray-600">
          7 guests · 3 bedrooms · 3 beds · 2.5 baths
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center mr-3"></div>
        <div>
          <div className="font-semibold">Samantha is a Superhost</div>
          <div className="text-gray-500 text-sm">
            Superhosts are experienced, highly rated Hosts.
          </div>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center mr-3"></div>
        <div>
          <div className="font-semibold">Great location</div>
          <div className="text-gray-500 text-sm">
            95% of recent guests gave the location a 5-star rating.
          </div>
        </div>
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
