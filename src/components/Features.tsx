
import React, { useEffect, useRef } from 'react';
import { Code, ImagePlus, BarChart4, Wand2, MessageSquareText, Database } from 'lucide-react';

const featureItems = [
  {
    icon: <Wand2 className="w-6 h-6 text-purple-500" />,
    title: "AI Content Creation",
    description: "Create high-quality content in seconds with our advanced AI algorithms trained on diverse data sources."
  },
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "Code Generation",
    description: "Automatically generate clean, efficient code in multiple programming languages with a simple prompt."
  },
  {
    icon: <ImagePlus className="w-6 h-6 text-green-500" />,
    title: "Image Processing",
    description: "Transform, enhance, and generate images using state-of-the-art computer vision techniques."
  },
  {
    icon: <MessageSquareText className="w-6 h-6 text-amber-500" />,
    title: "Natural Language Processing",
    description: "Understand, analyze, and generate human language with remarkable accuracy and context awareness."
  },
  {
    icon: <BarChart4 className="w-6 h-6 text-red-500" />,
    title: "Data Analysis",
    description: "Extract meaningful insights from your data through automated analysis and visualization tools."
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    title: "Knowledge Base",
    description: "Access a vast knowledge base that stays updated with the latest information and research."
  }
];

const Features = () => {
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
    <section className="py-24 bg-gradient-to-b from-background to-background/90 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll" ref={el => (elementsRef.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Powerful AI Features, <span className="heading-gradient">Simplified</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines multiple AI capabilities into one intuitive interface,
            making advanced technology accessible to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
              ref={el => (elementsRef.current[index + 1] = el)}
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
