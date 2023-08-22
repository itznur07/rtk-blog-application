import React from "react";
import { Link } from "react-router-dom";

const RelatedPostListItem = ({ blog }) => {
  return (
    <div>
      <div className='card'>
        <Link to={`/post/${blog.id}`}>
          <img src={blog.image} className='card-image' alt='git-image' />
        </Link>
        <div className='p-4'>
          <Link
            to={`/post/${blog.id}`}
            className='text-lg post-title lws-RelatedPostTitle'
          >
            {blog.title}
          </Link>
          <div className='mb-0 tags'>
            {blog.tags.map((tag, i) => (
              <span key={i + 1}>#{tag} </span>
            ))}
          </div>
          <p>{blog.createAt}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostListItem;
