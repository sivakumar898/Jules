import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Protecting Your World, Securing Your Future.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          At Best Insurance Solution, we're more than just an insurance provider—we're your dedicated partner in safeguarding what matters most. For families, professionals, and businesses across India, we offer peace of mind.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="bg-brand-gold text-brand-blue font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 dark:hover:bg-yellow-500 transition duration-300">
            Get Your Free Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
