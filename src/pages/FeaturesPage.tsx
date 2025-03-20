
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { CheckIcon, Code, ImagePlus, BarChart4, Wand2, MessageSquareText, Database, Zap, Lock, Globe } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Features Hero */}
        <section className="pt-32 pb-20 relative">
          <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent -z-10"></div>
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display">
                Powerful <span className="heading-gradient">AI Features</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover the full range of capabilities that make AIWave the most comprehensive
                AI platform for creators, developers, and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            {[
              {
                icon: <Wand2 className="w-8 h-8 text-purple-500" />,
                title: "AI Content Creation",
                description: "Create high-quality content in seconds with our advanced AI algorithms trained on diverse data sources.",
                benefits: [
                  "Generate blog posts, articles, and marketing copy",
                  "Create SEO-optimized content that ranks",
                  "Rewrite and improve existing content",
                  "Adapt tone and style to match your brand voice",
                  "Support for 25+ languages"
                ],
                image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              },
              {
                icon: <Code className="w-8 h-8 text-blue-500" />,
                title: "Code Generation",
                description: "Automatically generate clean, efficient code in multiple programming languages with a simple prompt.",
                benefits: [
                  "Support for 20+ programming languages",
                  "Generate complete functions or code snippets",
                  "Explain existing code and suggest improvements",
                  "Debug and fix issues in your code",
                  "Generate unit tests automatically"
                ],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              },
              {
                icon: <ImagePlus className="w-8 h-8 text-green-500" />,
                title: "Image Processing",
                description: "Transform, enhance, and generate images using state-of-the-art computer vision techniques.",
                benefits: [
                  "Generate custom images from text descriptions",
                  "Enhance and restore low-quality images",
                  "Remove backgrounds and objects from images",
                  "Convert sketches to polished designs",
                  "Create variations of existing images"
                ],
                image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                } py-16 ${
                  index !== 0 ? 'border-t border-slate-200 dark:border-slate-800' : ''
                }`}
              >
                <div className={`animate-fade-up ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h2 className="text-3xl font-bold font-display">{feature.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  
                  <h3 className="font-semibold text-lg mb-4">Key Benefits:</h3>
                  <ul className="space-y-3 mb-8">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`relative rounded-xl overflow-hidden shadow-xl animate-fade-up ${
                  index % 2 !== 0 ? 'lg:col-start-1' : ''
                }`}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Features */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl font-bold font-display mb-6">More Powerful Features</h2>
              <p className="text-muted-foreground">
                Explore the additional capabilities that make AIWave a comprehensive AI solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquareText className="w-6 h-6 text-amber-500" />,
                  title: "Natural Language Processing",
                  description: "Understand, analyze, and generate human language with context awareness."
                },
                {
                  icon: <BarChart4 className="w-6 h-6 text-red-500" />,
                  title: "Data Analysis",
                  description: "Extract meaningful insights from your data with automated analysis tools."
                },
                {
                  icon: <Database className="w-6 h-6 text-indigo-500" />,
                  title: "Knowledge Base",
                  description: "Access a vast knowledge base that stays updated with the latest information."
                },
                {
                  icon: <Zap className="w-6 h-6 text-yellow-500" />,
                  title: "API Integrations",
                  description: "Connect AIWave with your existing tools and workflows seamlessly."
                },
                {
                  icon: <Lock className="w-6 h-6 text-slate-500" />,
                  title: "Enterprise Security",
                  description: "Advanced security features to protect your data and intellectual property."
                },
                {
                  icon: <Globe className="w-6 h-6 text-teal-500" />,
                  title: "Multilingual Support",
                  description: "Work with content in over 95 languages with high accuracy and context awareness."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-950 rounded-xl p-6 shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
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

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
