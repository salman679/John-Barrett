import Link from "next/link";
import { CheckCircle2, ArrowRight, Mic, Users, Star } from "lucide-react";

export const metadata = {
  title: "Keynote Speaking | John Barrett Leadership",
  description:
    "Inspire and energize your audience with powerful keynotes on leadership, transformation, and peak performance.",
};

const topics = [
  {
    title: "The Art of Leading: Mastering Modern Leadership",
    description:
      "A dynamic exploration of what it takes to lead effectively in today&apos;s complex, fast-paced business environment.",
    keyPoints: [
      "The 5 pillars of exceptional leadership",
      "Building trust and psychological safety",
      "Leading through change and uncertainty",
      "Creating a culture of accountability",
    ],
    ideal: "Leadership conferences, annual meetings, management retreats",
  },
  {
    title: "Unleashing Your Leadership Potential",
    description:
      "An inspiring journey into discovering and developing your unique leadership capabilities.",
    keyPoints: [
      "Identifying your leadership strengths",
      "Overcoming self-limiting beliefs",
      "Developing authentic leadership presence",
      "Creating your leadership legacy",
    ],
    ideal: "Professional development events, emerging leader programs",
  },
  {
    title: "Building High-Performance Teams",
    description:
      "Practical strategies for creating teams that consistently deliver exceptional results.",
    keyPoints: [
      "The anatomy of high-performing teams",
      "Creating alignment and shared purpose",
      "Fostering collaboration and innovation",
      "Navigating conflict productively",
    ],
    ideal: "Team offsites, organizational development conferences",
  },
  {
    title: "Leading Transformation: Change That Sticks",
    description:
      "How to successfully lead organizational change and drive sustainable transformation.",
    keyPoints: [
      "The psychology of change",
      "Building change readiness",
      "Overcoming resistance",
      "Sustaining momentum",
    ],
    ideal: "Change management events, executive forums",
  },
];

export default function KeynoteSpeakingPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8">
              <Mic className="h-4 w-4 text-gold-400" />
              Inspiring & Actionable
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Keynote Speaking
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-12 leading-relaxed">
              Energize your audience with powerful, practical insights that
              inspire action and drive lasting change.
            </p>
            <Link href="/contact" className="btn-gold text-lg px-10 py-5">
              Book John for Your Event
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              Keynotes That Make an Impact
            </h2>
            <p className="text-xl text-navy-600 leading-relaxed">
              With over 20 years of leadership experience and hundreds of
              speaking engagements, John delivers keynotes that are both
              inspiring and immediately actionable. Your audience will leave
              energized, equipped, and ready to lead at a higher level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Star className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-navy-900 mb-3">
                Engaging Delivery
              </h3>
              <p className="text-navy-600">
                Dynamic, interactive presentations that captivate audiences and
                maintain energy throughout.
              </p>
            </div>
            <div className="card text-center">
              <Users className="h-12 w-12 text-royal-500 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-navy-900 mb-3">
                Customized Content
              </h3>
              <p className="text-navy-600">
                Every keynote is tailored to your audience, industry, and
                organizational goals.
              </p>
            </div>
            <div className="card text-center">
              <CheckCircle2 className="h-12 w-12 text-royal-500 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-navy-900 mb-3">
                Actionable Takeaways
              </h3>
              <p className="text-navy-600">
                Practical strategies and tools that attendees can implement
                immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 bg-navy-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              Popular Keynote Topics
            </h2>
            <p className="text-xl text-navy-600">
              All keynotes can be customized to your event theme and audience
            </p>
          </div>

          <div className="space-y-8">
            {topics.map((topic) => (
              <div key={topic.title} className="card">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">
                      {topic.title}
                    </h3>
                    <p className="text-lg text-navy-700 leading-relaxed mb-6">
                      {topic.description}
                    </p>
                    <div className="space-y-3">
                      <div className="font-semibold text-navy-900">
                        Key Points:
                      </div>
                      {topic.keyPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-navy-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-royal-50 rounded-xl p-6">
                      <div className="text-sm font-semibold text-royal-700 mb-2">
                        Ideal For:
                      </div>
                      <p className="text-navy-700">{topic.ideal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-12 text-center">
              What to Expect
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-display font-bold text-navy-900 mb-4">
                  Pre-Event Preparation
                </h3>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Consultation call to understand your goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Customized content for your audience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Professional marketing materials</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-display font-bold text-navy-900 mb-4">
                  Day of Event
                </h3>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Professional, engaging delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Interactive audience engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Q&A and networking opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-display font-bold text-navy-900 mb-4">
                  Post-Event Follow-Up
                </h3>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Downloadable resources for attendees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Optional follow-up coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Continued support and resources</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-gradient-to-br from-royal-50 to-navy-50 border-2 border-royal-100">
                <h3 className="text-xl font-display font-bold text-navy-900 mb-4">
                  Flexible Formats
                </h3>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>30-90 minute keynotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Half-day or full-day workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>Virtual or in-person delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-royal-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Inspire Your Audience?
            </h2>
            <p className="text-xl text-navy-100 mb-12 leading-relaxed">
              Let&apos;s discuss how a customized keynote can energize your
              event and deliver lasting value to your attendees.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-gold text-lg px-10 py-5">
                Check Availability
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Learn More About John
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
