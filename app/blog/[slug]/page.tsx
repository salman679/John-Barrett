import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

// This would normally come from a CMS or database
const blogPost = {
  title: "5 Critical Leadership Skills for 2024",
  excerpt:
    "Discover the essential capabilities every modern leader needs to thrive in today's rapidly changing business landscape.",
  category: "Leadership",
  readTime: "5 min read",
  date: "December 1, 2024",
  author: "John Barrett",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
};

export default function BlogPostPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy-900 to-royal-900">
        <div className="section-container">
          <Link
            href="/blog"
            className="inline-flex items-center text-navy-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="inline-flex px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-6">
              {blogPost.category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {blogPost.title}
            </h1>

            <p className="text-xl text-navy-100 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            <div className="flex items-center gap-6 text-navy-200">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center">By {blogPost.author}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-navy-700 leading-relaxed mb-8">
                The landscape of leadership is evolving faster than ever before.
                What worked yesterday may not work tomorrow. As we navigate 2024
                and beyond, leaders must develop new capabilities to stay
                relevant and effective.
              </p>

              <h2 className="text-3xl font-display font-bold text-navy-900 mt-12 mb-6">
                1. Adaptive Leadership
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                In an era of constant change, the ability to adapt quickly is no
                longer optional—it&apos;s essential. Adaptive leaders can pivot
                strategies, adjust communication styles, and modify approaches
                based on evolving circumstances.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                This skill requires developing comfort with ambiguity,
                maintaining flexibility in your thinking, and being willing to
                challenge your own assumptions. The most successful leaders
                I&apos;ve coached have learned to view change not as a threat,
                but as an opportunity for growth and innovation.
              </p>

              <h2 className="text-3xl font-display font-bold text-navy-900 mt-12 mb-6">
                2. Emotional Intelligence
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Technical skills may get you in the door, but emotional
                intelligence (EQ) determines how far you&apos;ll go. Leaders
                with high EQ can read the room, manage their own emotions, and
                respond appropriately to the emotions of others.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Key components include self-awareness, self-regulation, empathy,
                and social skills. In today&apos;s collaborative work
                environments, your ability to connect with and understand your
                team members directly impacts your effectiveness as a leader.
              </p>

              <h2 className="text-3xl font-display font-bold text-navy-900 mt-12 mb-6">
                3. Strategic Thinking
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Great leaders don&apos;t just react to what&apos;s happening
                today—they anticipate what&apos;s coming tomorrow. Strategic
                thinking involves seeing the big picture, identifying patterns,
                and making decisions that position your organization for
                long-term success.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                This skill requires stepping back from day-to-day operations to
                consider broader trends, competitive dynamics, and future
                possibilities. It means asking &quot;what if&quot; questions and
                scenario planning for multiple potential futures.
              </p>

              <h2 className="text-3xl font-display font-bold text-navy-900 mt-12 mb-6">
                4. Digital Fluency
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                You don&apos;t need to be a tech expert, but you do need to
                understand how technology is reshaping your industry and
                organization. Digital fluency means being comfortable with
                digital tools, understanding data analytics, and recognizing how
                technology can drive business value.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Leaders who embrace digital transformation and help their teams
                navigate technological change will have a significant
                competitive advantage in the years ahead.
              </p>

              <h2 className="text-3xl font-display font-bold text-navy-900 mt-12 mb-6">
                5. Inclusive Leadership
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Creating an environment where everyone feels valued, heard, and
                empowered to contribute their best work is critical. Inclusive
                leaders actively seek diverse perspectives, challenge their own
                biases, and create psychological safety for their teams.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                This isn&apos;t just about doing the right thing—it&apos;s about
                driving better business outcomes. Diverse, inclusive teams
                consistently outperform homogeneous ones in innovation,
                problem-solving, and decision-making.
              </p>

              <h2 className="text-3xl font-display font-bold text-navy-900 mt-12 mb-6">
                Developing These Skills
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                The good news is that all of these skills can be developed with
                intentional practice and the right support. Here are some
                practical steps to get started:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-navy-700">
                <li>
                  Seek feedback regularly from peers, team members, and mentors
                </li>
                <li>Invest in professional development and coaching</li>
                <li>
                  Practice self-reflection and maintain a leadership journal
                </li>
                <li>
                  Take on stretch assignments that push you outside your comfort
                  zone
                </li>
                <li>Build a network of fellow leaders for peer learning</li>
              </ul>

              <div className="bg-royal-50 border-l-4 border-royal-500 p-6 my-12 rounded-r-lg">
                <p className="text-lg text-navy-800 font-semibold mb-2">
                  Key Takeaway
                </p>
                <p className="text-navy-700">
                  Leadership excellence in 2024 requires a combination of
                  timeless principles and new capabilities. By focusing on these
                  five critical skills, you&apos;ll be well-positioned to lead
                  effectively in an increasingly complex and dynamic business
                  environment.
                </p>
              </div>

              <p className="text-navy-700 leading-relaxed mb-6">
                Remember, becoming a great leader is a journey, not a
                destination. The most effective leaders I work with are those
                who commit to continuous learning and growth. They understand
                that leadership development is an ongoing process that requires
                dedication, self-awareness, and a willingness to evolve.
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-navy-200">
              <div className="flex items-center justify-between">
                <div className="text-navy-700 font-semibold">
                  Share this article:
                </div>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-royal-500 text-white rounded-lg hover:bg-royal-600 transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 card bg-navy-50">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-royal-500 to-royal-600 rounded-full flex items-center justify-center text-white text-2xl font-display font-bold">
                    JB
                  </div>
                </div>
                <div>
                  <div className="text-xl font-display font-bold text-navy-900 mb-2">
                    About {blogPost.author}
                  </div>
                  <p className="text-navy-700 leading-relaxed mb-4">
                    John Barrett is a leadership coach, keynote speaker, and
                    author with over 20 years of experience helping executives
                    and organizations achieve extraordinary results. He
                    specializes in leadership development, executive coaching,
                    and organizational transformation.
                  </p>
                  <Link
                    href="/about"
                    className="text-royal-600 font-semibold hover:text-royal-700"
                  >
                    Learn more about John →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-navy-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/blog/power-of-executive-presence"
                className="card hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2 hover:text-royal-600">
                  The Power of Executive Presence
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Learn how to command attention and influence outcomes at the
                  highest levels.
                </p>
                <div className="text-royal-600 font-semibold text-sm">
                  Read More →
                </div>
              </Link>
              <Link
                href="/blog/building-high-performance-teams"
                className="card hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2 hover:text-royal-600">
                  Building High-Performance Teams
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  A proven framework for creating teams that deliver exceptional
                  results.
                </p>
                <div className="text-royal-600 font-semibold text-sm">
                  Read More →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-navy-900 to-royal-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Ready to Develop Your Leadership Skills?
            </h2>
            <p className="text-xl text-navy-100 mb-8">
              Work with John one-on-one to accelerate your leadership
              development.
            </p>
            <Link href="/contact" className="btn-gold text-lg px-10 py-5">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
