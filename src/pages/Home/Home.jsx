import React from "react";
import Sidebar from "../../components/HomePC/Sidebar/Sidebar";
import SignlePost from "../../components/HomePC/SignlePost/SignlePost";

const Home = () => {
  return (
    <>
      <section class='wrapper'>
        <Sidebar />
        {/* <!-- posts container  --> */}
        <main className='post-container' id='lws-postContainer'>
          <SignlePost />
          <SignlePost />
        </main>
      </section>
    </>
  );
};

export default Home;
