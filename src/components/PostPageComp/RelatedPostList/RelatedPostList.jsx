import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedBlogs } from "../../../redux/api/RelatedBlogsThunk/relatedBlogsApi";
import RelatedPostListItem from "../RelatedPostListItem/RelatedPostListItem";

const RelatedPostList = ({ blog }) => {
  const { tags, id } = blog;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.relatedBlogs);

  useEffect(() => {
    dispatch(getRelatedBlogs({ tags, id: id }));
  }, [dispatch, tags, id]);

  return (
    <aside>
      <h4 className='mb-4 text-xl font-medium' id='lws-relatedPosts'>
        Related Posts
      </h4>
      <div className='space-y-4 related-post-container'>
        {data?.map((blog) => (
          <RelatedPostListItem key={blog.id} blog={blog} />
        ))}
      </div>
    </aside>
  );
};

export default RelatedPostList;
