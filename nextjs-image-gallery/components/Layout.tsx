// components/Layout.tsx
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => {
    const router = useRouter();

    const isActive = (pathname: string) => router.pathname === pathname;
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header>
       <Navbar/>
      </header>
      <main className="container mx-auto p-4 pt-20"> {/* Ajout de pt-20 pour compenser le header fixe */}
        {children}
      </main>
    
    </div>
  );
};




const NavLink: React.FC<{ href: string; text: string; isActive: boolean }> = ({ href, text, isActive }) => (
    <Link href={href} legacyBehavior>
      <a className={`text-sm uppercase ${isActive ? 'text-black font-bold' : 'text-gray-600 hover:text-gray-900'}`}>
        {text}
      </a>
    </Link>
  );
  
  export default Layout;