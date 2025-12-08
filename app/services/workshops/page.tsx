import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Calendar,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Leadership Workshops & Training | John Barrett Leadership",
  description:
    "Transform your team with interactive workshops and training programs. Customized content for lasting impact.",
};

const workshops = [
  {
    title: "Leadership Foundations",
    duration: "Half-day or Full-day",
    participants: "15-30 people",
    description:
      "Essential leadership principles and practices for emerging leaders and new managers.",
    topics: [
      "Transitioning from individual contributor to leader",
      "Building trust and credibility",
      "Effective communication and feedback",
      "Delegation and accountability",
      "Leading through change",
    ],
  },
  {
    title: "High-Performance Team Building",
    duration: "Full-day",
    participants: "10-25 people",
    description:
      "Create cohesive, high-performing teams that deliver exceptional results.",
    topics: [
      "Understanding team dynamics",
      "Establishing clear goals and expectations",
      "Building psychological safety",
      "Effective collaboration strategies",
      "Conflict resolution and problem-solving",
    ],
  },
  {
    title: "Strategic Leadership",
    duration: "2 days",
    participants: "12-20 people",
    description:
      "Develop strategic thinking capabilities and learn to lead organizational transformation.",
    topics: [
      "Strategic thinking frameworks",
      "Vision and strategy development",
      "Leading organizational change",
      "Decision-making under uncertainty",
      "Creating alignment across teams",
    ],
  },
  {
    title: "Communication & Influence",
    duration: "Half-day",
    participants: "15-30 people",
    description:
      "Master the art of persuasive communication and stakeholder influence.",
    topics: [
      "Powerful presentation skills",
      "Influencing without authority",
      "Difficult conversations",
      "Executive presence",
      "Storytelling for leaders",
    ],
  },
];

export default function WorkshopsPage() {
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
              <Users className="h-4 w-4 text-gold-400" />
              Team Development Programs
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Workshops & Training
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-12 leading-relaxed">
              Interactive, engaging workshops that transform teams and build
              lasting leadership capabilities across your organization.
            </p>
            <Link href="/contact" className="btn-gold text-lg px-10 py-5">
              Request Workshop Information
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              Popular Workshop Topics
            </h2>
            <p className="text-xl text-navy-600">
              All workshops can be customized to your organization&apos;s
              specific needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <div
                key={workshop.title}
                className="card hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">
                  {workshop.title}
                </h3>

                <div className="flex gap-6 mb-6 pb-6 border-b border-navy-100">
                  <div className="flex items-center gap-2 text-sm text-navy-600">
                    <Calendar className="h-4 w-4 text-royal-500" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-600">
                    <Users className="h-4 w-4 text-royal-500" />
                    {workshop.participants}
                  </div>
                </div>

                <p className="text-navy-700 leading-relaxed mb-6">
                  {workshop.description}
                </p>

                <div className="space-y-3">
                  <div className="font-semibold text-navy-900">Key Topics:</div>
                  {workshop.topics.map((topic) => (
                    <div key={topic} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Workshops */}
      <section className="py-24 bg-navy-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 text-royal-500 mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              Custom Workshop Design
            </h2>
            <p className="text-xl text-navy-600 mb-12 leading-relaxed">
              Every organization is unique. I work with you to design workshops
              that address your specific challenges, culture, and goals. Whether
              you need a half-day session or a multi-day leadership development
              program, we&apos;ll create the perfect solution.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-5">
              Discuss Custom Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-royal-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Transform Your Team
            </h2>
            <p className="text-xl text-navy-100 mb-12 leading-relaxed">
              Let&#39;s discuss how a customized workshop can accelerate your
              team&#39;s development and drive measurable results.
            </p>
            <Link href="/contact" className="btn-gold text-lg px-10 py-5">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
