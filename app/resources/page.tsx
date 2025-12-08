import Link from "next/link";
import {
  Download,
  FileText,
  Video,
  Headphones,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Free Leadership Resources | John Barrett Leadership",
  description:
    "Download free guides, templates, and resources to accelerate your leadership development.",
};

const resources = [
  {
    title: "The Leadership Assessment Toolkit",
    type: "PDF Guide",
    icon: FileText,
    description:
      "A comprehensive self-assessment tool to identify your leadership strengths and growth areas.",
    includes: [
      "360-degree feedback template",
      "Leadership competency framework",
      "Personal development plan template",
      "Progress tracking worksheets",
    ],
  },
  {
    title: "10 Difficult Conversations Scripts",
    type: "PDF Guide",
    icon: FileText,
    description:
      "Word-for-word scripts and frameworks for navigating challenging leadership conversations.",
    includes: [
      "Performance feedback templates",
      "Conflict resolution frameworks",
      "Delegation conversation guides",
      "Career development discussions",
    ],
  },
  {
    title: "The Strategic Thinking Playbook",
    type: "PDF Workbook",
    icon: FileText,
    description:
      "Develop your strategic thinking capabilities with this practical workbook and exercises.",
    includes: [
      "Strategic analysis frameworks",
      "Decision-making tools",
      "Scenario planning templates",
      "Vision and strategy worksheets",
    ],
  },
  {
    title: "Building High-Performance Teams",
    type: "Video Masterclass",
    icon: Video,
    description:
      "A 45-minute masterclass on creating teams that consistently deliver exceptional results.",
    includes: [
      "Team assessment framework",
      "Trust-building exercises",
      "Goal-setting templates",
      "Performance tracking tools",
    ],
  },
];

const podcasts = [
  {
    title: "The Leadership Edge Podcast",
    episodes: "50+ Episodes",
    description:
      "Weekly insights on leadership, executive development, and organizational transformation.",
  },
];

export default function ResourcesPage() {
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
              Free Leadership Resources
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-12 leading-relaxed">
              Practical tools, guides, and insights to accelerate your
              leadership development.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.title}
                  className="card hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-royal-500 to-royal-600 rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-royal-600 mb-1">
                        {resource.type}
                      </div>
                      <h3 className="text-2xl font-display font-bold text-navy-900">
                        {resource.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-navy-700 leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  <div className="mb-6">
                    <div className="font-semibold text-navy-900 mb-3">
                      Includes:
                    </div>
                    <ul className="space-y-2">
                      {resource.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-navy-700"
                        >
                          <Download className="h-4 w-4 text-royal-500 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="btn-primary w-full justify-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download Free Resource
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-navy-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              Get Weekly Leadership Insights
            </h2>
            <p className="text-xl text-navy-600 mb-8">
              Join 5,000+ leaders receiving practical strategies, tips, and
              inspiration delivered to their inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-royal-500"
              />
              <button type="submit" className="btn-primary px-8 py-4">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-navy-500">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-royal-50 to-navy-50 border-2 border-royal-100">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Headphones className="h-10 w-10 text-royal-600" />
                    <div>
                      <h3 className="text-2xl font-display font-bold text-navy-900">
                        The Leadership Edge Podcast
                      </h3>
                      <p className="text-royal-600 font-semibold">
                        50+ Episodes
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-navy-700 leading-relaxed mb-6">
                    Weekly insights on leadership, executive development, and
                    organizational transformation. Available on all major
                    podcast platforms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-white border-2 border-royal-500 text-royal-600 font-semibold rounded-lg hover:bg-royal-50 transition-colors">
                      Apple Podcasts
                    </button>
                    <button className="px-6 py-3 bg-white border-2 border-royal-500 text-royal-600 font-semibold rounded-lg hover:bg-royal-50 transition-colors">
                      Spotify
                    </button>
                    <button className="px-6 py-3 bg-white border-2 border-royal-500 text-royal-600 font-semibold rounded-lg hover:bg-royal-50 transition-colors">
                      YouTube
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-royal-500 to-royal-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Headphones className="h-24 w-24 text-white" />
                  </div>
                </div>
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
              Ready for Personalized Coaching?
            </h2>
            <p className="text-xl text-navy-100 mb-12 leading-relaxed">
              While these resources are valuable, nothing compares to
              personalized coaching tailored to your unique challenges and
              goals.
            </p>
            <Link href="/contact" className="btn-gold text-lg px-10 py-5">
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
