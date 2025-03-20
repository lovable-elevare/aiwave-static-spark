
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
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
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent -z-10"></div>
      <div className="absolute top-20 left-1/2 w-[800px] h-[800px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-8 animate-on-scroll"
            ref={el => (elementsRef.current[0] = el)}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Rated 5.0 by over 1,000+ users</span>
          </div>
          
          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-display animate-on-scroll"
            ref={el => (elementsRef.current[1] = el)}
          >
            <span>Unleash Your</span>{' '}
            <span className="heading-gradient">Creativity</span>{' '}
            <span>with AI-Powered Tools</span>
          </h1>
          
          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto animate-on-scroll"
            ref={el => (elementsRef.current[2] = el)}
          >
            The ultimate AI platform that helps you create stunning content, generate code, analyze data, and more. Experience the power of artificial intelligence designed for the modern world.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-on-scroll"
            ref={el => (elementsRef.current[3] = el)}
          >
            <Link 
              to="/signup" 
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/demos" 
              className="bg-foreground/5 hover:bg-foreground/10 text-foreground font-medium px-8 py-3 rounded-lg transition-all"
            >
              View Demos
            </Link>
          </div>
          
          {/* Hero Image */}
          <div 
            className="relative mx-auto animate-on-scroll"
            ref={el => (elementsRef.current[4] = el)}
          >
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="AI Platform Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -left-10 top-1/3 glass-card p-4 rounded-lg shadow-lg max-w-[200px] animate-float hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs font-bold">+27%</span>
                </div>
                <span className="font-medium text-sm">Productivity</span>
              </div>
              <p className="text-xs text-muted-foreground">Users report 27% increase in productivity after using our AI tools</p>
            </div>
            
            <div className="absolute -right-10 bottom-1/4 glass-card p-4 rounded-lg shadow-lg max-w-[200px] animate-float delay-500 hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 text-xs font-bold">ML</span>
                </div>
                <span className="font-medium text-sm">Smart Learning</span>
              </div>
              <p className="text-xs text-muted-foreground">Our models continuously learn from your usage patterns</p>
            </div>
          </div>
          
          {/* Clients */}
          <div className="mt-16 animate-on-scroll" ref={el => (elementsRef.current[5] = el)}>
            <p className="text-sm text-muted-foreground mb-6">TRUSTED BY LEADING COMPANIES</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {['Microsoft', 'Google', 'Adobe', 'Spotify', 'IBM'].map((company, index) => (
                <div key={index} className="flex justify-center">
                  <span className="text-lg font-bold text-muted-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all cursor-pointer">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
