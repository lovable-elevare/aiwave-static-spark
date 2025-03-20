
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-80"></div>
        <div className="absolute top-0 left-1/4 bg-blue-200 dark:bg-blue-900/30 w-1/3 h-1/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 bg-indigo-200 dark:bg-indigo-900/30 w-1/3 h-1/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 animate-on-scroll" ref={el => (elementsRef.current[0] = el)}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Transform Your Workflow with AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of individuals and businesses already using our platform to boost productivity,
              creativity, and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-foreground/5 hover:bg-foreground/10 text-foreground font-medium px-8 py-3 rounded-lg transition-all"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 text-center md:text-left">
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">No credit card required</h4>
              <p className="text-muted-foreground">Start with our free plan and upgrade when you're ready.</p>
            </div>
            <div className="h-px w-full md:h-16 md:w-px bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">Cancel anytime</h4>
              <p className="text-muted-foreground">No long-term contracts or hidden fees.</p>
            </div>
            <div className="h-px w-full md:h-16 md:w-px bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p className="text-muted-foreground">Our team is always available to help you succeed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
