
import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "This AI platform has completely transformed our workflow. The code generation feature alone has saved us hundreds of development hours.",
    author: "Sarah Johnson",
    position: "CTO, TechSolutions Inc",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "The content creation capabilities are mind-blowing. What used to take our marketing team days now happens in minutes with better results.",
    author: "Michael Chen",
    position: "Marketing Director, Innovate Co",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    quote: "As a researcher, I've found the data analysis tools incredibly powerful. The platform handles complex datasets with ease and provides meaningful insights.",
    author: "Dr. Emily Rodriguez",
    position: "Lead Researcher, ScienceLab",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
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
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll" ref={el => (elementsRef.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Loved by <span className="heading-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what professionals across various industries are saying about our AI platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll" ref={el => (elementsRef.current[1] = el)}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 shadow-sm"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-slate-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
