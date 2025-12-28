import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our team to book the venue, ask questions, or learn more about our services.",
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out with any questions or to book our venue."
        imageSrc="/images/contact-hero.jpg"
        imageAlt="Contact us"
        height="small"
      />

      {/* Contact Form & Info */}
      <Section spacing="large" background="dark">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="heading-md text-brand-50 mb-8">
              Send Us a Message
            </h2>

            {/*
              Note: This form uses Formspree/EmailJS in production.
              Replace action URL with your service endpoint.
            */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-200 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-brand-800 border border-brand-600 text-brand-50 placeholder:text-brand-400 rounded-sm focus:outline-none focus:border-accent-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-200 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-brand-800 border border-brand-600 text-brand-50 placeholder:text-brand-400 rounded-sm focus:outline-none focus:border-accent-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-200 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-brand-800 border border-brand-600 text-brand-50 placeholder:text-brand-400 rounded-sm focus:outline-none focus:border-accent-400 transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brand-200 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-brand-800 border border-brand-600 text-brand-50 rounded-sm focus:outline-none focus:border-accent-400 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Venue Booking Inquiry</option>
                  <option value="event">Event Information</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-brand-800 border border-brand-600 text-brand-50 placeholder:text-brand-400 rounded-sm focus:outline-none focus:border-accent-400 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent-500 text-brand-900 font-medium rounded-sm hover:bg-accent-400 active:bg-accent-600 transition-colors"
              >
                Send Message
              </button>

              <p className="text-xs text-brand-400">
                * Required fields. We&apos;ll respond to your inquiry within 1-2 business days.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="heading-md text-brand-50 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="text-sm font-semibold text-brand-200 uppercase tracking-wider mb-3">
                  Address
                </h3>
                <p className="text-brand-300">
                  123 Cultural Street<br />
                  City, State 12345<br />
                  United States
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-sm font-semibold text-brand-200 uppercase tracking-wider mb-3">
                  Phone
                </h3>
                <p className="text-brand-300">
                  <a href="tel:+1234567890" className="hover:text-accent-400 transition-colors">
                    (123) 456-7890
                  </a>
                </p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-semibold text-brand-200 uppercase tracking-wider mb-3">
                  Email
                </h3>
                <div className="space-y-2 text-brand-300">
                  <p>
                    General Inquiries:{' '}
                    <a href="mailto:info@venue.com" className="hover:text-accent-400 transition-colors">
                      info@venue.com
                    </a>
                  </p>
                  <p>
                    Bookings:{' '}
                    <a href="mailto:bookings@venue.com" className="hover:text-accent-400 transition-colors">
                      bookings@venue.com
                    </a>
                  </p>
                  <p>
                    Press:{' '}
                    <a href="mailto:press@venue.com" className="hover:text-accent-400 transition-colors">
                      press@venue.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-sm font-semibold text-brand-200 uppercase tracking-wider mb-3">
                  Office Hours
                </h3>
                <div className="space-y-1 text-brand-300">
                  <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                  <p>Saturday: 12:00 PM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-sm font-semibold text-brand-200 uppercase tracking-wider mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-brand-800 border border-brand-600 rounded-sm flex items-center justify-center text-brand-300 hover:text-accent-400 hover:border-accent-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-brand-800 border border-brand-600 rounded-sm flex items-center justify-center text-brand-300 hover:text-accent-400 hover:border-accent-400 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-brand-800 border border-brand-600 rounded-sm flex items-center justify-center text-brand-300 hover:text-accent-400 hover:border-accent-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section spacing="large" background="darker">
        <div className="text-center mb-8">
          <h2 className="heading-md text-brand-50 mb-6">
            Find Us
          </h2>
        </div>
        <div className="aspect-[21/9] bg-brand-700 rounded-sm overflow-hidden border border-brand-600">
          {/* Placeholder for map - integrate Google Maps or similar in production */}
          <div className="w-full h-full flex items-center justify-center text-brand-400">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Map integration placeholder</p>
              <p className="text-sm mt-2">Add Google Maps embed or similar service</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
