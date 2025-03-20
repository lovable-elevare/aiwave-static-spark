
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Pricing Hero */}
        <section className="pt-32 pb-12 relative">
          <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent -z-10"></div>
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display">
                Simple, <span className="heading-gradient">Transparent</span> Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Choose the plan that fits your needs. All plans include our core AI features with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-8">
                {[
                  {
                    question: "Can I switch plans later?",
                    answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the changes will apply to your next billing cycle."
                  },
                  {
                    question: "What happens when I reach my monthly limits?",
                    answer: "When you reach your monthly AI completion or image generation limits, you have two options: wait until your limits reset the next month, or upgrade to a higher tier plan for immediate access to higher limits."
                  },
                  {
                    question: "Is there a free trial available?",
                    answer: "Yes, we offer a 14-day free trial of our Pro plan, with no credit card required. You'll get full access to all Pro features so you can evaluate if it meets your needs."
                  },
                  {
                    question: "Can I get a refund if I'm not satisfied?",
                    answer: "We offer a 30-day money-back guarantee for new subscribers. If you're not satisfied with our service, contact our support team within 30 days of your initial purchase for a full refund."
                  },
                  {
                    question: "Do you offer custom enterprise plans?",
                    answer: "Yes, we offer tailored enterprise solutions for organizations with specific requirements. Contact our sales team to discuss your needs and get a custom quote."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and for enterprise customers, we can arrange invoice-based payments."
                  },
                ].map((faq, index) => (
                  <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg mb-4">Still have questions?</p>
                <a
                  href="/contact"
                  className="text-primary font-medium hover:underline"
                >
                  Contact our support team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
