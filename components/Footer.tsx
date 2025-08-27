import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const address = "49/172, F Block, C-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101";
  const phone = "+91 9629203273";

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <Image
                src="https://placehold.co/180x50/FFFFFF/0D244F?text=Best+Insurance"
                alt="Best Insurance Solution Logo"
                width={180}
                height={50}
                className="h-auto mb-4"
              />
            </Link>
            <p className="max-w-sm">{address}</p>
            <p className="mt-2">
              <a href={`tel:${phone}`} className="hover:text-blue-600 dark:hover:text-brand-gold">{phone}</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/services" className="hover:text-blue-600 dark:hover:text-brand-gold">Our Services</Link>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-brand-gold">About Us</Link>
              <Link href="/blog" className="hover:text-blue-600 dark:hover:text-brand-gold">Blog</Link>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-brand-gold">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-4">Connect With Us</h3>
            {/* Placeholder for social media icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-brand-gold">Facebook</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-brand-gold">Twitter</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-brand-gold">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Best Insurance Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
