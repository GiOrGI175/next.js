'use client';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <div className='space-x-4'>
        <Link
          href='/login
        '
          className='px-4 py-2 bg-blue-500 text-white rounded'
        >
          login page{' '}
        </Link>

        <Link
          href='/register
        '
          className='px-4 py-2 bg-blue-500 text-white rounded'
        >
          login page{' '}
        </Link>

        <Link
          href='/forgot-paswword
        '
          className='px-4 py-2 bg-blue-500 text-white rounded'
        >
          login page{' '}
        </Link>
      </div>
    </div>
  );
};

export default Home;
