import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Events",
  description: "Browse our upcoming events, concerts, exhibitions, and performances.",
};

// Mock event data - in a real app, this would come from a CMS or API
const upcomingEvents = [
  {
    id: 1,
    title: "Jazz Night: The Quintet",
    date: "March 15, 2024",
    time: "8:00 PM",
    category: "Music",
    image: "/images/event-1.jpg",
    description: "An intimate evening with renowned jazz musicians performing classic and contemporary pieces.",
    price: "$35",
  },
  {
    id: 2,
    title: "Contemporary Art Exhibition",
    date: "March 20 - April 15, 2024",
    time: "Opening Reception: 6:00 PM",
    category: "Art",
    image: "/images/event-2.jpg",
    description: "Featuring works from emerging local artists exploring themes of identity and place.",
    price: "Free",
  },
  {
    id: 3,
    title: "Theater: A Modern Classic",
    date: "April 5-7, 2024",
    time: "7:30 PM",
    category: "Theater",
    image: "/images/event-3.jpg",
    description: "A reimagined production of a beloved play by our resident theater company.",
    price: "$40",
  },
  {
    id: 4,
    title: "Electronic Music Festival",
    date: "April 22, 2024",
    time: "6:00 PM - 2:00 AM",
    category: "Music",
    image: "/images/event-4.jpg",
    description: "A full night of cutting-edge electronic music with international DJs and live acts.",
    price: "$50",
  },
  {
    id: 5,
    title: "Poetry Reading & Open Mic",
    date: "May 3, 2024",
    time: "7:00 PM",
    category: "Literary",
    image: "/images/event-5.jpg",
    description: "Join us for an evening of spoken word featuring special guests and open mic slots.",
    price: "$10",
  },
  {
    id: 6,
    title: "Film Screening: Indie Classics",
    date: "May 12, 2024",
    time: "8:00 PM",
    category: "Film",
    image: "/images/event-6.jpg",
    description: "A curated selection of independent films with director Q&A sessions.",
    price: "$15",
  },
];

export default function Events() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Upcoming Events"
        subtitle="Discover our calendar of concerts, exhibitions, performances, and community gatherings."
        imageSrc="/images/events-hero.jpg"
        imageAlt="Events at our venue"
        height="medium"
      />

      {/* Events Listing */}
      <Section spacing="large" background="dark">
        <div className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className={`grid md:grid-cols-3 gap-8 p-6 rounded-sm ${
                index % 2 === 0 ? 'bg-brand-800/50' : 'bg-brand-800/30'
              } border border-brand-700 hover:border-brand-600 transition-colors`}
            >
              {/* Event Image */}
              <div className="relative aspect-[4/3] bg-brand-700 rounded-sm overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Event Details */}
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent-400 uppercase tracking-wider">
                      {event.category}
                    </span>
                    <span className="text-sm text-brand-300">{event.date}</span>
                  </div>

                  <h3 className="heading-sm text-brand-50 mb-3">
                    {event.title}
                  </h3>

                  <p className="text-sm text-brand-400 mb-4">
                    {event.time}
                  </p>

                  <p className="text-brand-200 mb-6">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-accent-400">
                    {event.price}
                  </span>
                  <Button href="#" variant="primary" size="small">
                    Get Tickets
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Past Events Section */}
      <Section spacing="large" background="darker">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-6">
            Past Events
          </h2>
          <p className="body-md text-brand-200 mb-8">
            Take a look at some of the incredible events we&apos;ve hosted over the
            years. From sold-out concerts to groundbreaking exhibitions, we&apos;re
            proud of the memories we&apos;ve helped create.
          </p>
          <Button href="#" variant="secondary">
            View Archive
          </Button>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section spacing="medium" background="accent">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-6">
            Never Miss an Event
          </h2>
          <p className="body-md text-brand-100 mb-8">
            Subscribe to our newsletter to receive updates about upcoming events,
            special announcements, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-brand-800 border border-brand-600 text-brand-50 placeholder:text-brand-400 rounded-sm focus:outline-none focus:border-accent-400 transition-colors"
            />
            <Button variant="primary" size="medium">
              Subscribe
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
