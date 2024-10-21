// import Link from 'next/link';

// export default function AuthLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div>
//       <aside>
//         <nav>
//           <Link
//             href='/post/1'
//             className='block py-2 px-4 text-white rounded hover:bg-blue-700'
//           >
//             post1
//           </Link>
//           <Link
//             href='/post/2'
//             className='block py-2 px-4 text-white rounded hover:bg-blue-700'
//           >
//             post2
//           </Link>
//           <Link
//             href='/post/3'
//             className='block py-2 px-4 text-white rounded hover:bg-blue-700'
//           >
//             post3
//           </Link>
//         </nav>
//       </aside>
//       <main>{children}</main>
//     </div>
//   );
// }

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'forgot-password', href: '/forgot-paswword' },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const PathName = usePathname();

  console.log(PathName);

  return (
    <div>
      <nav className='flex flex-col gap-5 m-5'>
        {navLinks.map((link) => {
          const isActive = PathName.startsWith(link.href);

          return (
            <div>
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2  ${
                  isActive ? 'bg-blue-400' : 'bg-blue-700'
                }`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </nav>
      <main>{children}</main>
    </div>
  );
}
