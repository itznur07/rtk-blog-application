import React from "react";
import { FaRegBookmark, FaRegThumbsUp } from "react-icons/fa";
import mernImg from "../../../assets/images/mern.webp";

const DetailsPost = () => {
  return (
    <div>
      <main className='post'>
        <img
          src={mernImg}
          alt='githum'
          className='w-full rounded-md'
          id='lws-megaThumb'
        />
        <div>
          <h1 className='mt-6 text-2xl post-title' id='lws-singleTitle'>
            MERN stack for Web Development
          </h1>
          <div className='tags' id='lws-singleTags'>
            <span>#python,</span> <span>#tech,</span> <span>#git</span>
          </div>
          <div className='btn-group'>
            {/* <!-- handle like on button click --> */}
            <button
              className='like-btn flex items-center space-x-1'
              id='lws-singleLinks'
            >
              <FaRegThumbsUp /> <span>100</span>
            </button>
            {/* <!-- handle save on button click --> */}
            {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
            <button
              className='active save-btn flex items-center space-x-1'
              id='lws-singleSavedBtn'
            >
              <i>
                <FaRegBookmark />
              </i>{" "}
              <span>Saved</span>
            </button>
          </div>
          <div className='mt-6'>
            <p>
              A MERN stack comprises a collection of four frameworks (MongoDB,
              ExpressJs, ReactJs and NodeJs) used to develop full-stack
              javascript solutions for rapid, scalable, and secure applications.
              Each framework serves a different purpose in creating successful
              web applications. It is an excellent choice for companies looking
              to develop high-quality responsive applications quickly using just
              one language.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailsPost;
