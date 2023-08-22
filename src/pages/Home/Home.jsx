import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/HomePC/Sidebar/Sidebar";
import SignlePost from "../../components/HomePC/SignlePost/SignlePost";
import { getBlogs } from "../../redux/api/BlogsThunk/blogsApi";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <>
      <section class='wrapper'>
        <Sidebar />
        {/* <!-- posts container  --> */}
        <main className='post-container' id='lws-postContainer'>
          {data?.map((blog) => (
            <SignlePost key={blog.id} blog={blog} />
          ))}
        </main>
      </section>
    </>
  );
};

export default Home;
