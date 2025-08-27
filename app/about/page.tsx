import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Best Insurance Solution',
  description: 'Learn more about our company, mission, and the dedicated team behind Best Insurance Solution.',
};

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Best Insurance Solution</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">Your trusted partner in protection and financial security.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue dark:text-white text-center mb-12">Our Story</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              Founded with the simple mission of making quality insurance accessible and understandable for everyone in India, Best Insurance Solution has grown from a small advisory firm into a leading name in the industry. We saw a need for a customer-first approach, where transparency and trust are the foundation of every relationship.
            </p>
            <p>
              For over a decade, we have been helping families, professionals, and businesses navigate the complexities of insurance. Our commitment is to provide not just policies, but also peace of mind and a secure future for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                To empower our clients with the best insurance solutions through expert advice, transparent processes, and unwavering support, ensuring their peace of mind at every stage of life.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                To be India's most trusted and respected insurance agency, renowned for our commitment to customer success and our contribution to a financially secure society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 (Placeholder) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 dark:bg-gray-700"></div>
              <h4 className="text-xl font-bold text-brand-blue dark:text-white">Team Member Name</h4>
              <p className="text-brand-gold">Founder & CEO</p>
            </div>
            {/* Team Member 2 (Placeholder) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 dark:bg-gray-700"></div>
              <h4 className="text-xl font-bold text-brand-blue dark:text-white">Team Member Name</h4>
              <p className="text-brand-gold">Head of Claims</p>
            </div>
            {/* Team Member 3 (Placeholder) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 dark:bg-gray-700"></div>
              <h4 className="text-xl font-bold text-brand-blue dark:text-white">Team Member Name</h4>
              <p className="text-brand-gold">Lead Financial Advisor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
