import Link from 'next/link';

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <aside>
        <nav>
          <Link
            href='/post/1'
            className='block py-2 px-4 text-white rounded hover:bg-blue-700'
          >
            post1
          </Link>
          <Link
            href='/post/2'
            className='block py-2 px-4 text-white rounded hover:bg-blue-700'
          >
            post2
          </Link>
          <Link
            href='/post/3'
            className='block py-2 px-4 text-white rounded hover:bg-blue-700'
          >
            post3
          </Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
