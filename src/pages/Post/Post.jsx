import React from "react";
import DetailsPost from "../../components/PostPageComp/DetailsPost/DetailsPost";
import RelatedPostList from "../../components/PostPageComp/RelatedPostList/RelatedPostList";
import GoBackButton from "../../shared/GoBackButton/GoBackButton";

const Post = () => {
  return (
    <>
     
      <GoBackButton />
      <section className='post-page-container'>
        <DetailsPost />
        <RelatedPostList />
      </section>
    </>
  );
};

export default Post;
