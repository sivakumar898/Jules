const services = [
  {
    icon: (
      <svg className="h-12 w-12 text-brand-blue dark:text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 01-9-9 9 9 0 019-9m9 9a9 9 0 01-9 9m-9-9h18" /></svg>
    ),
    title: 'Life Insurance',
    description: 'Secure your family\'s future with our comprehensive life insurance plans.',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-brand-blue dark:text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Health Insurance',
    description: 'Access the best healthcare without financial worries. Your health is your wealth.',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-brand-blue dark:text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    ),
    title: 'Vehicle Insurance',
    description: 'From cars to heavy vehicles, we provide complete protection for your wheels.',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-brand-blue dark:text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    title: 'Corporate Insurance',
    description: 'Tailored group and industrial insurance solutions to protect your business.',
  },
];

const ServicesHighlight = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-4">Insurance That Puts You First</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          We offer a wide range of tailored insurance solutions for every stage of your life and business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
