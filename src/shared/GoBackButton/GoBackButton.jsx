import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const GoBackButton = () => {
  return (
    <div className='container mt-8'>
      <Link
        to='/'
        class='text-gray-600 home-btn flex items-center space-x-1'
        id='lws-goHome'
      >
        <FaHouseUser /> <span>Go Home</span>
      </Link>
    </div>
  );
};

export default GoBackButton;
