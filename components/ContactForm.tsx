import Link from 'next/link';

const ContactForm = () => {
  const whatsappNumber = "919629203273";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in your insurance solutions.")}`;

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div>
            <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-4">Ready to Feel Secure?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Send us a message, and one of our expert advisors will get back to you shortly.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Contact Column */}
          <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-lg">
            {/* WhatsApp Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Need an Instant Response?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Click the button below to chat with our team directly on WhatsApp.
              </p>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition duration-300">
                  Chat on WhatsApp
              </Link>
            </div>

            {/* AI Assistant Placeholder */}
            <div className="text-center border-t border-gray-300 dark:border-gray-700 mt-10 pt-10">
              <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Try Our AI Assistant</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get instant answers to common questions from our AI-powered assistant.
              </p>
              <button disabled className="inline-block bg-brand-blue text-white font-bold py-4 px-8 rounded-lg opacity-50 cursor-not-allowed">
                  Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
