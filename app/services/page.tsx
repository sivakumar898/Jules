import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Best Insurance Solution',
  description: 'Explore our wide range of insurance products: Life, Health, Car, Bike, Commercial, Travel, Home, Property, and more.',
};

const services = [
    { name: 'Life Insurance', description: 'Secure your family\'s future with our comprehensive life insurance plans.', href: '#' },
    { name: 'Health Portable', description: 'Keep your health coverage, no matter where your career takes you.', href: '#' },
    { name: 'Car Insurance', description: 'Complete protection for your car against all risks.', href: '#' },
    { name: 'Bike Insurance', description: 'Ride worry-free with our two-wheeler insurance policies.', href: '#' },
    { name: 'Commercial Insurance', description: 'Tailored solutions to protect your business assets and operations.', href: '#' },
    { name: 'Travel Insurance', description: 'Enjoy your trips with peace of mind, knowing you are covered.', href: '#' },
    { name: 'Transit Insurance', description: 'Safeguard your goods and cargo while they are on the move.', href: '#' },
    { name: 'Home Insurance', description: 'Protect your home and belongings from unforeseen events.', href: '#' },
    { name: 'Property Insurance', description: 'Comprehensive coverage for your valuable residential or commercial properties.', href: '#' },
    { name: 'Workmen Compensation', description: 'Cover for your employees in case of workplace accidents.', href: '#' },
    { name: 'Personal Accident', description: 'Financial protection against accidental death or disability.', href: '#' },
];

const ServicesPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Insurance Services</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">Comprehensive solutions for every aspect of your life and business.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link href={service.href} key={service.name}>
                <div className="block bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-3">{service.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                  <span className="text-brand-gold font-semibold mt-4 inline-block">Learn More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
