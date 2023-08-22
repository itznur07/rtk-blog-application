import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsPost from "../../components/PostPageComp/DetailsPost/DetailsPost";
import RelatedPostList from "../../components/PostPageComp/RelatedPostList/RelatedPostList";
import { getBlog } from "../../redux/api/BlogThunk/blogApi";
import GoBackButton from "../../shared/GoBackButton/GoBackButton";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch]);

  return (
    <>
      <GoBackButton />
      <section className='post-page-container'>
        <DetailsPost blog={data} />
        <RelatedPostList />
      </section>
    </>
  );
};

export default Post;
