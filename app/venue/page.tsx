import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import ImageGrid from "@/components/ui/ImageGrid";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Venue",
  description: "Explore our state-of-the-art facilities and versatile event spaces.",
};

export default function Venue() {
  const venueImages = [
    {
      src: "/images/venue-main.jpg",
      alt: "Main hall",
      title: "Main Hall",
      description: "Capacity: 500 | World-class acoustics",
    },
    {
      src: "/images/venue-gallery.jpg",
      alt: "Gallery space",
      title: "Gallery Space",
      description: "Perfect for exhibitions and receptions",
    },
    {
      src: "/images/venue-lounge.jpg",
      alt: "Lounge area",
      title: "Lounge Area",
      description: "Intimate setting for small gatherings",
    },
    {
      src: "/images/venue-terrace.jpg",
      alt: "Outdoor terrace",
      title: "Outdoor Terrace",
      description: "Open-air venue with city views",
    },
    {
      src: "/images/venue-stage.jpg",
      alt: "Performance stage",
      title: "Performance Stage",
      description: "Professional lighting and sound systems",
    },
    {
      src: "/images/venue-backstage.jpg",
      alt: "Backstage facilities",
      title: "Backstage",
      description: "Artist-friendly green rooms and amenities",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Venue"
        subtitle="A versatile space designed for unforgettable experiences."
        imageSrc="/images/venue-hero.jpg"
        imageAlt="Venue overview"
        height="medium"
      />

      {/* Overview Section */}
      <Section spacing="large" background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md text-brand-50 mb-8">
            State-of-the-Art Facilities
          </h2>
          <p className="body-lg text-brand-200 mb-6">
            Our venue combines cutting-edge technology with timeless design to
            create the perfect environment for any event.
          </p>
          <p className="body-md text-brand-300">
            From intimate gatherings to large-scale productions, our flexible
            spaces and professional-grade equipment ensure your event exceeds
            expectations.
          </p>
        </div>
      </Section>

      {/* Spaces Gallery */}
      <Section spacing="large" background="darker">
        <div className="text-center mb-12">
          <h2 className="heading-md text-brand-50 mb-6">
            Explore Our Spaces
          </h2>
        </div>
        <ImageGrid images={venueImages} columns={3} gap="large" aspectRatio="landscape" />
      </Section>

      {/* Features Section */}
      <Section spacing="large" background="dark">
        <div className="text-center mb-16">
          <h2 className="heading-md text-brand-50 mb-6">
            World-Class Amenities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-brand-800/50 rounded-sm border border-brand-700">
            <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0a5 5 0 007.072 0" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-50 mb-2">Pro Audio</h3>
            <p className="text-sm text-brand-300">
              Industry-leading sound system with expert technicians
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-brand-800/50 rounded-sm border border-brand-700">
            <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-50 mb-2">Video & Lighting</h3>
            <p className="text-sm text-brand-300">
              Professional lighting rigs and projection systems
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-brand-800/50 rounded-sm border border-brand-700">
            <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-50 mb-2">Connectivity</h3>
            <p className="text-sm text-brand-300">
              High-speed WiFi and live streaming capabilities
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center p-6 bg-brand-800/50 rounded-sm border border-brand-700">
            <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-50 mb-2">Accessibility</h3>
            <p className="text-sm text-brand-300">
              Fully accessible with inclusive facilities
            </p>
          </div>
        </div>
      </Section>

      {/* Specifications Section */}
      <Section spacing="large" background="darker">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-sm text-brand-50 mb-6">
              Technical Specifications
            </h2>
            <ul className="space-y-4 text-brand-200">
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Main Hall: 8,000 sq ft with 20 ft ceilings</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Stage: 40 ft wide x 30 ft deep</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Seating: Flexible configurations up to 500 capacity</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Green rooms: 3 private dressing rooms</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Load-in: Direct ground-level access</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="heading-sm text-brand-50 mb-6">
              Available Services
            </h2>
            <ul className="space-y-4 text-brand-200">
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Professional sound and lighting technicians</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Event planning and coordination</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Catering partnerships and bar service</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Box office and ticketing support</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 mr-3">•</span>
                <span>Marketing and promotional assistance</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="medium" background="accent">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-6">
            Book Our Venue
          </h2>
          <p className="body-md text-brand-100 mb-8">
            Ready to bring your event to life? Get in touch with our team to
            discuss availability and pricing.
          </p>
          <Button href="/contact" variant="primary" size="large">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
