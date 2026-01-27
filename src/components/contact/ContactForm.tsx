'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        organization: formData.get('organization'),
        message: formData.get('message'),
        phonenumber: formData.get('phonenumber'),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again or email us directly at info@deepfeat.ai');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-green-500/10 mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Message Sent
        </h3>
        <p className="text-[#7a8a99]">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-[#b8c5d0] mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 rounded-sm bg-[#0a1628] border border-[#162a42] text-white placeholder-[#7a8a99] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-[#b8c5d0] mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 rounded-sm bg-[#0a1628] border border-[#162a42] text-white placeholder-[#7a8a99] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#b8c5d0] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-sm bg-[#0a1628] border border-[#162a42] text-white placeholder-[#7a8a99] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phonenumber"
            className="block text-sm font-medium text-[#b8c5d0] mb-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            className="w-full px-4 py-3 rounded-sm bg-[#0a1628] border border-[#162a42] text-white placeholder-[#7a8a99] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label
            htmlFor="organization"
            className="block text-sm font-medium text-[#b8c5d0] mb-2"
          >
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="w-full px-4 py-3 rounded-sm bg-[#0a1628] border border-[#162a42] text-white placeholder-[#7a8a99] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-colors"
            placeholder="Your organization"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#b8c5d0] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-sm bg-[#0a1628] border border-[#162a42] text-white placeholder-[#7a8a99] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-colors resize-none"
            placeholder="Tell us about your project or inquiry..."
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
