
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* About Hero */}
        <section className="pt-32 pb-20 relative">
          <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent -z-10"></div>
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display">
                About <span className="heading-gradient">AIWave</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                We're on a mission to democratize artificial intelligence and make 
                advanced technology accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl font-bold font-display mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2020, AIWave began with a simple idea: what if AI tools were 
                  as intuitive to use as everyday apps? Our founders, former researchers 
                  at leading tech companies, saw a gap between cutting-edge AI capabilities 
                  and practical, user-friendly applications.
                </p>
                <p className="text-muted-foreground mb-4">
                  We started with a small team of passionate engineers and designers, 
                  working to build AI tools that anyone could use without specialized training. 
                  Three years later, we've grown into a team of over 100 professionals dedicated 
                  to making AI accessible to individuals and businesses of all sizes.
                </p>
                <p className="text-muted-foreground">
                  Today, AIWave serves over 50,000 users worldwide, from individual creators 
                  to Fortune 500 companies, all using our platform to enhance their work and unlock new possibilities.
                </p>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl animate-fade-up">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="AIWave Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl font-bold font-display mb-6">Our Values</h2>
              <p className="text-muted-foreground">
                These core principles guide everything we do at AIWave.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Accessibility",
                  description: "We believe advanced technology should be accessible to everyone, regardless of technical background.",
                },
                {
                  title: "Innovation",
                  description: "We continuously push the boundaries of what's possible with AI, always seeking better solutions.",
                },
                {
                  title: "Transparency",
                  description: "We're committed to ethical AI practices and being open about how our technology works.",
                },
                {
                  title: "User-Centered",
                  description: "Everything we build starts with user needs, ensuring our tools solve real problems effectively.",
                },
                {
                  title: "Quality",
                  description: "We're obsessed with details and delivering a premium experience in every aspect of our product.",
                },
                {
                  title: "Collaboration",
                  description: "We believe the best AI tools enhance human capabilities rather than replacing them.",
                },
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-950 rounded-xl p-6 shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl font-bold font-display mb-6">Meet Our Team</h2>
              <p className="text-muted-foreground">
                The passionate people behind AIWave's success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Sarah Johnson",
                  role: "CTO",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Michael Lee",
                  role: "Head of AI Research",
                  image: "https://randomuser.me/api/portraits/men/68.jpg",
                },
                {
                  name: "Jessica Wong",
                  role: "Lead Designer",
                  image: "https://randomuser.me/api/portraits/women/65.jpg",
                },
                {
                  name: "David Park",
                  role: "Head of Engineering",
                  image: "https://randomuser.me/api/portraits/men/22.jpg",
                },
                {
                  name: "Anika Patel",
                  role: "Product Manager",
                  image: "https://randomuser.me/api/portraits/women/28.jpg",
                },
                {
                  name: "James Wilson",
                  role: "Marketing Director",
                  image: "https://randomuser.me/api/portraits/men/42.jpg",
                },
                {
                  name: "Emma Garcia",
                  role: "Customer Success Lead",
                  image: "https://randomuser.me/api/portraits/women/33.jpg",
                },
              ].map((member, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-950 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center animate-fade-up">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Join our team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
