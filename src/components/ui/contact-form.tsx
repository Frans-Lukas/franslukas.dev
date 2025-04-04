import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzzejkve");

  if (state.succeeded) {
    return (
      <div className="text-center p-6 bg-primary/10 rounded-lg">
        <h3 className="text-xl font-medium mb-2">Thank you for your message!</h3>
        <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="mt-1 text-sm text-destructive"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-destructive"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-destructive"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm; 