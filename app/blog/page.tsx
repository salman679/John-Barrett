import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "Leadership Blog & Insights | John Barrett Leadership",
  description:
    "Expert insights on leadership development, executive coaching, team building, and organizational transformation.",
};

const categories = [
  "All",
  "Leadership",
  "Executive Development",
  "Team Building",
  "Communication",
  "Strategy",
];

const blogPosts = [
  {
    title: "5 Critical Leadership Skills for 2024",
    slug: "5-critical-leadership-skills-2024",
    excerpt:
      "Discover the essential capabilities every modern leader needs to thrive in today's rapidly changing business landscape.",
    category: "Leadership",
    readTime: "5 min read",
    date: "December 1, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    featured: true,
  },
  {
    title: "The Power of Executive Presence",
    slug: "power-of-executive-presence",
    excerpt:
      "Learn how to command attention, inspire confidence, and influence outcomes at the highest levels of leadership.",
    category: "Executive Development",
    readTime: "7 min read",
    date: "November 28, 2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    featured: true,
  },
  {
    title: "Building High-Performance Teams",
    slug: "building-high-performance-teams",
    excerpt:
      "A proven framework for creating teams that consistently deliver exceptional results and drive organizational success.",
    category: "Team Building",
    readTime: "6 min read",
    date: "November 25, 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    featured: true,
  },
  {
    title: "Mastering Difficult Conversations",
    slug: "mastering-difficult-conversations",
    excerpt:
      "Transform challenging discussions into opportunities for growth, alignment, and stronger relationships.",
    category: "Communication",
    readTime: "8 min read",
    date: "November 20, 2024",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800",
  },
  {
    title: "Strategic Thinking: A Leader's Superpower",
    slug: "strategic-thinking-leaders-superpower",
    excerpt:
      "Develop the ability to see the big picture, anticipate challenges, and make decisions that drive long-term success.",
    category: "Strategy",
    readTime: "6 min read",
    date: "November 15, 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
  {
    title: "Leading Through Change and Uncertainty",
    slug: "leading-through-change-uncertainty",
    excerpt:
      "Essential strategies for guiding your team through transitions while maintaining morale and productivity.",
    category: "Leadership",
    readTime: "7 min read",
    date: "November 10, 2024",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800",
  },
  {
    title: "The Art of Delegation",
    slug: "art-of-delegation",
    excerpt:
      "Learn how to delegate effectively to empower your team, free up your time, and multiply your impact.",
    category: "Leadership",
    readTime: "5 min read",
    date: "November 5, 2024",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
  },
  {
    title: "Creating a Culture of Accountability",
    slug: "creating-culture-accountability",
    excerpt:
      "Build a team culture where everyone takes ownership and delivers on their commitments.",
    category: "Team Building",
    readTime: "6 min read",
    date: "October 30, 2024",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
  },
  {
    title: "Emotional Intelligence in Leadership",
    slug: "emotional-intelligence-leadership",
    excerpt:
      "Why EQ matters more than IQ and how to develop this critical leadership competency.",
    category: "Executive Development",
    readTime: "8 min read",
    date: "October 25, 2024",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 to-royal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Leadership Insights
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-12 leading-relaxed">
              Practical wisdom and strategies to elevate your leadership
              effectiveness
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-navy-100 sticky top-20 z-40">
        <div className="section-container">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 bg-navy-100 text-navy-700 hover:bg-royal-500 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
            Featured Articles
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-0 overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-royal-600 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-navy-900 mb-3 group-hover:text-royal-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-navy-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-navy-100">
                      <div className="flex items-center gap-4 text-sm text-navy-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-navy-50">
        <div className="section-container">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
            All Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-0 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-royal-600 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-navy-900 mb-2 group-hover:text-royal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-navy-100">
                    <div className="flex items-center text-xs text-navy-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
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
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-royal-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Get Leadership Insights Delivered
            </h2>
            <p className="text-xl text-navy-100 mb-8">
              Join 5,000+ leaders receiving weekly strategies, tips, and
              inspiration directly to their inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button type="submit" className="btn-gold px-8 py-4">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-navy-300 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
