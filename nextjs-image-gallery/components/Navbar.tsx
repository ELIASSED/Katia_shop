import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Katia Shop
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
  );
};

const NavLink: React.FC<{ href: string; text: string; isActive: boolean }> = ({ href, text, isActive }) => (
  <Link
    href={href}
    className={`text-sm uppercase ${isActive ? 'text-black font-bold' : 'text-gray-600 hover:text-gray-900'}`}
    legacyBehavior>
    {text}
  </Link>
);

export default Navbar;