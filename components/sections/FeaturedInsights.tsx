import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

const insights = [
  {
    title: "5 Critical Leadership Skills for 2024",
    excerpt:
      "Discover the essential capabilities every modern leader needs to thrive in today&apos;s rapidly changing business landscape.",
    category: "Leadership",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    href: "/blog/5-critical-leadership-skills",
  },
  {
    title: "The Power of Executive Presence",
    excerpt:
      "Learn how to command attention, inspire confidence, and influence outcomes at the highest levels of leadership.",
    category: "Executive Development",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    href: "/blog/executive-presence",
  },
  {
    title: "Building High-Performance Teams",
    excerpt:
      "A proven framework for creating teams that consistently deliver exceptional results and drive organizational success.",
    category: "Team Building",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    href: "/blog/high-performance-teams",
  },
];

export default function FeaturedInsights() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-navy-50">
      <div className="section-container">
        <div className="flex items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-4">
              Latest Leadership
              <span className="gradient-text"> Insights</span>
            </h2>
            <p className="text-xl text-navy-600">
              Practical wisdom and strategies to elevate your leadership
              effectiveness.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center text-royal-600 font-semibold hover:text-royal-700 group"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Link
              key={insight.title}
              href={insight.href}
              className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-0 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-royal-600 text-xs font-semibold rounded-full">
                    {insight.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-navy-900 mb-3 group-hover:text-royal-600 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-navy-600 leading-relaxed mb-4">
                  {insight.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-navy-100">
                  <div className="flex items-center text-sm text-navy-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {insight.readTime}
                  </div>
                  <span className="text-royal-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center text-royal-600 font-semibold hover:text-royal-700 group"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
