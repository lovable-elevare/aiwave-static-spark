
import React from 'react';
import { MapPin, Mail, Phone, Clock, GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <p className="text-muted-foreground mb-8">
          Reach out to us using any of the following methods. We're here to help answer your questions and provide the support you need.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Office Location</h4>
              <p className="text-muted-foreground">1 World Trade Center, New York, NY 10007, USA</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email Us</h4>
              <a href="mailto:info@aiwave.com" className="text-primary hover:underline">info@aiwave.com</a>
              <p className="text-muted-foreground text-sm mt-1">For general inquiries</p>
              
              <a href="mailto:support@aiwave.com" className="text-primary hover:underline block mt-2">support@aiwave.com</a>
              <p className="text-muted-foreground text-sm mt-1">For technical support</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Call Us</h4>
              <a href="tel:+12125551234" className="text-primary hover:underline">+1 (212) 555-1234</a>
              <p className="text-muted-foreground text-sm mt-1">Monday to Friday, 9am - 6pm EST</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Business Hours</h4>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a 
            href="https://twitter.com/aiwave" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a 
            href="https://linkedin.com/company/aiwave" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/aiwave" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
