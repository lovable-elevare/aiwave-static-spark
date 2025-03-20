
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';

const pricingPlans = {
  monthly: [
    {
      name: "Basic",
      price: 19,
      description: "Perfect for individuals and small projects",
      features: [
        "5,000 AI completions/mo",
        "100 image generations/mo",
        "Basic code generation",
        "Standard support",
        "Up to 3 users"
      ],
      cta: "Start Basic",
      highlight: false
    },
    {
      name: "Pro",
      price: 49,
      description: "Ideal for professionals and growing teams",
      features: [
        "20,000 AI completions/mo",
        "500 image generations/mo",
        "Advanced code generation",
        "Priority support",
        "Up to 10 users",
        "Custom model fine-tuning",
        "API access"
      ],
      cta: "Start Pro",
      highlight: true
    },
    {
      name: "Enterprise",
      price: 99,
      description: "For organizations with advanced needs",
      features: [
        "Unlimited AI completions",
        "Unlimited image generations",
        "Expert code generation",
        "Dedicated support",
        "Unlimited users",
        "Custom model fine-tuning",
        "Full API access",
        "SSO & advanced security",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ],
  yearly: [
    {
      name: "Basic",
      price: 15,
      description: "Perfect for individuals and small projects",
      features: [
        "5,000 AI completions/mo",
        "100 image generations/mo",
        "Basic code generation",
        "Standard support",
        "Up to 3 users"
      ],
      cta: "Start Basic",
      highlight: false
    },
    {
      name: "Pro",
      price: 39,
      description: "Ideal for professionals and growing teams",
      features: [
        "20,000 AI completions/mo",
        "500 image generations/mo",
        "Advanced code generation",
        "Priority support",
        "Up to 10 users",
        "Custom model fine-tuning",
        "API access"
      ],
      cta: "Start Pro",
      highlight: true
    },
    {
      name: "Enterprise",
      price: 79,
      description: "For organizations with advanced needs",
      features: [
        "Unlimited AI completions",
        "Unlimited image generations",
        "Expert code generation",
        "Dedicated support",
        "Unlimited users",
        "Custom model fine-tuning",
        "Full API access",
        "SSO & advanced security",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ]
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
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
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll" ref={el => (elementsRef.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Simple, <span className="heading-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Choose the perfect plan for your needs. All plans include core AI features.
          </p>

          <div className="flex items-center justify-center mb-12">
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full flex items-center">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-slate-700 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-white dark:bg-slate-700 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly <span className="text-green-600 text-xs font-bold">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll" ref={el => (elementsRef.current[1] = el)}>
          {pricingPlans[billingCycle].map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'border-2 border-primary shadow-lg shadow-primary/10 scale-105'
                  : 'border border-slate-200 dark:border-slate-800'
              }`}
            >
              {plan.highlight && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 bg-white dark:bg-slate-900">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                  {billingCycle === 'yearly' && (
                    <span className="block text-green-600 text-sm font-medium mt-1">
                      Billed annually (save 20%)
                    </span>
                  )}
                </div>
                <Link
                  to="/signup"
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors w-full ${
                    plan.highlight
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-foreground'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-950 flex-grow">
                <p className="text-sm font-medium text-foreground mb-4">Features include:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto animate-on-scroll" ref={el => (elementsRef.current[2] = el)}>
          <p className="text-lg mb-4">Need a custom plan for your enterprise?</p>
          <Link
            to="/contact"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Contact our sales team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
