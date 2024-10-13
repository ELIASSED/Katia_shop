import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-gray-700 text-lg font-semibold mb-4">Katia Art</h2>
            <p className="text-gray-600 text-sm">
              Explorez l'univers artistique de Katia à travers ses œuvres uniques et expressives.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-700 font-semibold mb-4">Liens rapides</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/expo" className="text-gray-600 hover:text-gray-800">
                  Expositions
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/shop" className="text-gray-600 hover:text-gray-800">
                  Boutique
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/biography" className="text-gray-600 hover:text-gray-800">
                  Biographie
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-700 font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 text-sm mb-2">Email: katia@art.com</p>
            <p className="text-gray-600 text-sm mb-2">Tél: +33 1 23 45 67 89</p>
            <p className="text-gray-600 text-sm">
              123 Rue de l'Art, 75001 Paris, France
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-gray-700 font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Katia Art. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;