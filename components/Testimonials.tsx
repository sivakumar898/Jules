const testimonials = [
  {
    quote: "Working with Best Insurance Solution was a breeze. They found me the perfect health plan for my family, and the process was so transparent. Highly recommended!",
    name: 'Priya Sharma',
    location: 'Bangalore',
  },
  {
    quote: "As a small business owner, I needed a comprehensive insurance package. Their team was incredibly knowledgeable and patient, guiding me to the right corporate plan. True professionals.",
    name: 'Amit Patel',
    location: 'Mumbai',
  },
  {
    quote: "The renewal process for my vehicle insurance was seamless. The automated reminders are a lifesaver, and their customer service is top-notch. I feel like a valued customer.",
    name: 'Rohan Gupta',
    location: 'Delhi',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <p className="text-brand-blue dark:text-white font-bold">{testimonial.name}</p>
              <p className="text-gray-500 dark:text-gray-400">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
