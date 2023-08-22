import React from "react";
import { FaRegBookmark, FaRegThumbsUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  hitLiked,
  hitSaved,
  hitUnSaved,
} from "../../../redux/features/Blog/blogSlice";

const DetailsPost = ({ blog }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <main className='post'>
        <img
          src={blog?.image}
          alt='githum'
          className='w-full rounded-md'
          id='lws-megaThumb'
        />
        <div>
          <h1 className='mt-6 text-2xl post-title' id='lws-singleTitle'>
            {blog?.title}
          </h1>
          <div className='tags' id='lws-singleTags'>
            {blog?.tags?.map((tag) => (
              <span> #{tag} </span>
            ))}
          </div>
          <div className='btn-group'>
            {/* <!-- handle like on button click --> */}
            <button
              onClick={() => dispatch(hitLiked())}
              className='like-btn flex items-center space-x-1'
              id='lws-singleLinks'
            >
              <FaRegThumbsUp /> <span>{blog?.likes}</span>
            </button>
            {/* <!-- handle save on button click --> */}
            {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
            <button
              onClick={() => {
                blog.isSaved ? dispatch(hitUnSaved()) : dispatch(hitSaved());
              }}
              className={`${
                blog?.isSaved
                  ? "active save-btn flex items-center space-x-1"
                  : "save-btn flex items-center space-x-1"
              }`}
              id='lws-singleSavedBtn'
            >
              <i>
                <FaRegBookmark />
              </i>{" "}
              {blog?.isSaved ? <span>Saved</span> : <span>Save</span>}
            </button>
          </div>
          <div className='mt-6'>
            <p>{blog?.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailsPost;
