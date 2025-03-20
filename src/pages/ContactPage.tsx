
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Contact Hero Section */}
        <section className="pt-32 pb-12 relative">
          <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent -z-10"></div>
          <div className="container mx-auto px-6 md:px-12">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display">
                  Get in <span className="heading-gradient">Touch</span> With Us
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Have questions about our platform? Want to schedule a demo? Our team is here to help you get the most out of AIWave.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimateOnScroll animation="fade-up" delay={200}>
                <ContactInfo />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={400}>
                <ContactForm />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6 md:px-12">
            <AnimateOnScroll animation="fade-up">
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-96 w-full">
                  <iframe
                    title="AIWave Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599484871341!3d40.7112546952935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x74f914471c28a459!2s1%20World%20Trade%20Center%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1693999391442!5m2!1sen!2sus"
                    className="w-full h-full"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-display mb-12 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      question: "How quickly can I expect a response?",
                      answer: "Our customer support team typically responds to all inquiries within 24 hours during business days. For urgent matters, we recommend using the live chat feature on our dashboard."
                    },
                    {
                      question: "Can I schedule a product demo?",
                      answer: "Absolutely! You can request a demo by filling out the contact form above and selecting 'Request Demo' from the dropdown menu. One of our product specialists will get in touch to arrange a time that works for you."
                    },
                    {
                      question: "Do you offer custom enterprise solutions?",
                      answer: "Yes, we provide tailored enterprise solutions designed to meet the specific needs of larger organizations. Please contact our sales team through the form above, and we'll work with you to create a custom implementation plan."
                    },
                    {
                      question: "Is technical support included in all plans?",
                      answer: "Basic technical support is included with all plans. Premium and Enterprise plans include priority support with faster response times and dedicated support channels."
                    },
                  ].map((faq, index) => (
                    <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
