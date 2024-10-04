import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import BadgeCart from './BadgeCart';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          E-Commerce Grupo-5
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <BadgeCart />
          </div>
        </div>
      </div>
    </nav>
  );
}