import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    content:
      "Working with John transformed not just my leadership style, but my entire organization. His insights helped us scale from 50 to 200 employees while maintaining our culture.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "VP of Operations, Global Healthcare",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    content:
      "John's coaching gave me the clarity and confidence I needed to navigate a major organizational restructuring. The frameworks he shared are now part of our leadership DNA.",
    rating: 5,
  },
  {
    name: "Jennifer Rodriguez",
    role: "Founder & President, Impact Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    content:
      "The ROI on leadership coaching with John was immediate and measurable. Our team engagement scores increased by 40% in just six months.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Executive Director, Nonprofit Alliance",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    content:
      "John helped me find my authentic leadership voice. His approach is both challenging and supportive—exactly what I needed to reach the next level.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Chief Marketing Officer, Retail Corp",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    content:
      "The workshop John delivered for our leadership team was transformational. Everyone left with actionable strategies they implemented immediately.",
    rating: 5,
  },
  {
    name: "Robert Williams",
    role: "Managing Partner, Law Firm",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    content:
      "John's executive coaching helped me navigate the most challenging period of my career. His wisdom and practical guidance were invaluable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Trusted by Leaders
            <span className="gradient-text"> Worldwide</span>
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what leaders say
            about their transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-6">
                <Quote className="h-10 w-10 text-gold-500 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-navy-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-navy-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-navy-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-navy-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-royal-600 mb-2">
              98%
            </div>
            <div className="text-sm text-navy-600">Client Satisfaction</div>
          </div>
          <div className="text-center border-x border-navy-200">
            <div className="text-4xl font-display font-bold text-royal-600 mb-2">
              4.9/5
            </div>
            <div className="text-sm text-navy-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-royal-600 mb-2">
              500+
            </div>
            <div className="text-sm text-navy-600">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
}
