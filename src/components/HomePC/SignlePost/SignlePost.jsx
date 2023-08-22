import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignlePost = ({ blog }) => {
  return (
    <div>
      <div className='lws-card'>
        <Link to='/post'>
          <img src={blog.image} className='lws-card-image' alt='' />
        </Link>
        <div className='p-4'>
          <div className='lws-card-header'>
            <p className='lws-publishedDate'>{blog.createdAt}</p>
            <p className='lws-likeCount flex items-center space-x-1'>
              <FaRegThumbsUp /> <span>{blog.likes}</span>
            </p>
          </div>
          <Link to='/post' className='lws-postTitle'>
            {" "}
            {blog.title}
          </Link>
          <div className='lws-tags'>
            {blog.tags.map((tag, index) => (
              <span key={index + 1}>#{tag}</span>
            ))}
          </div>
          {/* <!-- Show this element if post is saved --> */}
          <div className='flex gap-2 mt-4'>
            {" "}
            {blog.isSaved === true ? (
              <span className='lws-badge'>Saved </span>
            ) : (
              ""
            )}{" "}
          </div>
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
    </div>
  );
};

export default SignlePost;
