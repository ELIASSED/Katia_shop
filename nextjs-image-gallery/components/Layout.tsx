// components/Layout.tsx
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
        <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" passHref className="text-2xl font-bold text-gray-800">
                Katia Art
              </Link>
              <div className="hidden md:flex space-x-6">
                <NavLink href="/" text="Accueil" isActive={isActive('/')} />
                <NavLink href="/expo" text="Expo" isActive={isActive('/expo')} />
                <NavLink href="/biography" text="Biographie" isActive={isActive('/biography')} />
                <NavLink href="/contact" text="Contact" isActive={isActive('/contact')} />
                <NavLink href="/shop" text="Shop" isActive={isActive('/shop')} />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </nav>
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