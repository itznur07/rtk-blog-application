import React from "react";
import RelatedPostListItem from "../RelatedPostListItem/RelatedPostListItem";

const RelatedPostList = () => {
  return (
    <aside>
      <h4 className='mb-4 text-xl font-medium' id='lws-relatedPosts'>
        Related Posts
      </h4>
      <div className='space-y-4 related-post-container'>
        <RelatedPostListItem />
        <RelatedPostListItem />
      </div>
    </aside>
  );
};

export default RelatedPostList;
