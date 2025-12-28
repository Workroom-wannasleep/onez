import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import ImageGrid from "@/components/ui/ImageGrid";
import Button from "@/components/ui/Button";

export default function Home() {
  const featuredImages = [
    {
      src: "/images/gallery-1.jpg",
      alt: "Concert performance",
      title: "Live Performances",
      description: "World-class acoustics and intimate atmosphere",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Art exhibition",
      title: "Art Exhibitions",
      description: "Curated contemporary and classic works",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Community event",
      title: "Community Events",
      description: "Bringing people together through culture",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Where Culture Comes Alive"
        subtitle="Experience unforgettable moments in our premier cultural venue. From intimate performances to grand exhibitions, we create spaces for art, music, and community to flourish."
        imageSrc="/images/hero.jpg"
        imageAlt="Venue interior"
        height="full"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/events" variant="primary" size="large">
            Upcoming Events
          </Button>
          <Button href="/venue" variant="outline" size="large">
            Explore Our Space
          </Button>
        </div>
      </Hero>

      {/* Featured Section */}
      <Section spacing="large" background="dark">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-brand-50 mb-6">
            A Space for Every Occasion
          </h2>
          <p className="body-lg text-brand-200 max-w-3xl mx-auto">
            From concerts and performances to exhibitions and private events,
            our venue adapts to create the perfect atmosphere for your vision.
          </p>
        </div>

        <ImageGrid images={featuredImages} columns={3} gap="large" aspectRatio="portrait" />
      </Section>

      {/* About Preview Section */}
      <Section spacing="large" background="darker">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-md text-brand-50 mb-6">
              More Than Just a Venue
            </h2>
            <p className="body-md text-brand-200 mb-6">
              We are a cultural hub dedicated to fostering creativity, community,
              and connection. Our space has been thoughtfully designed to inspire
              and elevate every experience.
            </p>
            <p className="body-md text-brand-200 mb-8">
              With state-of-the-art facilities and a passionate team, we provide
              the perfect canvas for artists, performers, and cultural leaders to
              share their work with the world.
            </p>
            <Button href="/about" variant="secondary">
              Learn More About Us
            </Button>
          </div>
          <div className="relative aspect-square bg-brand-700 rounded-sm overflow-hidden">
            <img
              src="/images/about-preview.jpg"
              alt="Venue detail"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="medium" background="accent">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-6">
            Ready to Experience Something Special?
          </h2>
          <p className="body-md text-brand-100 mb-8">
            Browse our upcoming events or get in touch to book our space for your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/events" variant="primary" size="medium">
              View Events
            </Button>
            <Button href="/contact" variant="outline" size="medium">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
