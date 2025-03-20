
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // This would normally send data to a server
    // Simulating API call with timeout
    setTimeout(() => {
      console.log('Form data:', data);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="john@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <select
            id="subject"
            className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50`}
            {...register('subject', { required: 'Please select a subject' })}
            defaultValue=""
          >
            <option value="" disabled>Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="billing">Billing Question</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="demo">Request Demo</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="Tell us how we can help you..."
            {...register('message', { 
              required: 'Message is required',
              minLength: {
                value: 20,
                message: 'Message should be at least 20 characters',
              }
            })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin h-4 w-4 mr-2 border-t-2 border-white rounded-full"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
