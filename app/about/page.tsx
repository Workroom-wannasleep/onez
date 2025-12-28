import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission, history, and the team behind our cultural venue.",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="A passion for culture, community, and unforgettable experiences."
        imageSrc="/images/about-hero.jpg"
        imageAlt="About us"
        height="medium"
      />

      {/* Mission Section */}
      <Section spacing="large" background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md text-brand-50 mb-8">
            Our Mission
          </h2>
          <p className="body-lg text-brand-200 mb-6">
            We believe in the transformative power of art and culture to bring
            people together, spark conversation, and inspire change.
          </p>
          <p className="body-md text-brand-300">
            Our venue exists to provide a home for creativity in all its forms—
            from music and performance to visual art and community gatherings.
            We are committed to accessibility, diversity, and excellence in
            everything we do.
          </p>
        </div>
      </Section>

      {/* History Section */}
      <Section spacing="large" background="darker">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-md text-brand-50 mb-6">
              A Rich History
            </h2>
            <p className="body-md text-brand-200 mb-6">
              Established in 2010, our venue has been a cornerstone of the local
              cultural landscape for over a decade. What started as a small
              community space has grown into a premier destination for artists
              and audiences alike.
            </p>
            <p className="body-md text-brand-200">
              Over the years, we&apos;ve hosted thousands of events, welcomed
              countless artists, and created memories that will last a lifetime.
              Our commitment to quality and community has never wavered.
            </p>
          </div>
          <div className="relative aspect-[4/3] bg-brand-700 rounded-sm overflow-hidden">
            <img
              src="/images/history.jpg"
              alt="Venue history"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section spacing="large" background="dark">
        <div className="text-center mb-16">
          <h2 className="heading-md text-brand-50 mb-6">
            Our Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Value 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="heading-sm text-brand-50 mb-4">Community First</h3>
            <p className="text-brand-300">
              We exist to serve and uplift our community, creating spaces where
              everyone feels welcome.
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="heading-sm text-brand-50 mb-4">Creativity</h3>
            <p className="text-brand-300">
              We champion artistic expression and provide the resources artists
              need to bring their visions to life.
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="heading-sm text-brand-50 mb-4">Excellence</h3>
            <p className="text-brand-300">
              From our facilities to our programming, we maintain the highest
              standards in everything we do.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section spacing="large" background="darker">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-6">
            Meet Our Team
          </h2>
          <p className="body-md text-brand-200">
            Behind every great event is a dedicated team of professionals who
            care deeply about creating exceptional experiences. Our team brings
            together decades of experience in event production, arts management,
            and hospitality.
          </p>
        </div>
      </Section>
    </>
  );
}
