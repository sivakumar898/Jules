import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggleButton } from './ThemeToggleButton';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="https://placehold.co/180x50/0D244F/FFFFFF?text=Best+Insurance"
            alt="Best Insurance Solution Logo"
            width={180}
            height={50}
            className="h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-brand-gold">Home</Link>
            <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-brand-gold">Services</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-brand-gold">About Us</Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-brand-gold">Blog</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-brand-gold">Contact</Link>
          </nav>
          <ThemeToggleButton />
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <ThemeToggleButton />
          <button className="text-gray-700 dark:text-gray-300 focus:outline-none ml-4">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
