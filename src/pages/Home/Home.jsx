import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/HomePC/Sidebar/Sidebar";
import SignlePost from "../../components/HomePC/SignlePost/SignlePost";
import { getBlogs } from "../../redux/api/BlogsThunk/blogsApi";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.blogs);
  const { status, sort } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const filteredByStatus = (blog) => {
    if (status === "saved") {
      return blog?.isSaved;
    }
    return true;
  };

  const sortedBlogs = (a, b) => {
    if (sort === "newest") {
      return new Date(b?.createdAt) - new Date(a?.createdAt);
    }
    if (sort === "most_liked") {
      return b?.likes - a?.likes;
    }
    return 0;
  };

  return (
    <>
      <section class='wrapper'>
        <Sidebar />
        {/* <!-- posts container  --> */}
        <main className='post-container' id='lws-postContainer'>
          {data
            ?.slice()
            ?.sort(sortedBlogs)
            .filter(filteredByStatus)
            .map((blog) => (
              <SignlePost key={blog.id} blog={blog} />
            ))}
        </main>
      </section>
    </>
  );
};

export default Home;
