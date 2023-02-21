import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-5 h-screen justify-center items-center text-3xl'>
      <span>Sorry, Not Found</span>
      <Link to='/' className='p-2 border-b'>
        go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
