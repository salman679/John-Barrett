import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Users,
  Target,
  ArrowRight,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "Leadership Programs | John Barrett Leadership",
  description:
    "Comprehensive leadership development programs designed to accelerate your growth. From emerging leaders to executive teams.",
};

const programs = [
  {
    name: "Executive Leadership Intensive",
    tagline: "For C-Suite & Senior Executives",
    duration: "6 months",
    format: "One-on-one + Group Sessions",
    participants: "1-on-1",
    price: "Custom",
    description:
      "An immersive program for senior executives navigating complex challenges and driving organizational transformation.",
    features: [
      "Bi-weekly 1-on-1 executive coaching sessions",
      "Monthly peer mastermind groups",
      "360-degree leadership assessment",
      "Personalized development plan",
      "Strategic thinking workshops",
      "Executive presence training",
      "Unlimited email support",
      "Quarterly progress reviews",
    ],
    ideal: [
      "C-suite executives",
      "Senior vice presidents",
      "Business unit leaders",
      "Those preparing for board roles",
    ],
  },
  {
    name: "Emerging Leaders Program",
    tagline: "For High-Potential Managers",
    duration: "4 months",
    format: "Cohort-based",
    participants: "8-12 leaders",
    price: "$4,500",
    description:
      "Accelerate your leadership journey with foundational skills, peer learning, and practical application.",
    features: [
      "Weekly group coaching sessions",
      "Monthly 1-on-1 coaching calls",
      "Leadership assessment & debrief",
      "Peer accountability partnerships",
      "Real-world leadership challenges",
      "Communication & influence training",
      "Access to resource library",
      "Certificate of completion",
    ],
    ideal: [
      "First-time managers",
      "Team leads & supervisors",
      "Individual contributors moving into leadership",
      "High-potential employees",
    ],
  },
  {
    name: "Team Leadership Transformation",
    tagline: "For Leadership Teams",
    duration: "3-6 months",
    format: "Team Workshops + Individual Coaching",
    participants: "5-10 team members",
    price: "Custom",
    description:
      "Transform your entire leadership team with aligned vision, improved collaboration, and enhanced performance.",
    features: [
      "Team assessment & alignment workshop",
      "Monthly team coaching sessions",
      "Individual coaching for each leader",
      "Custom leadership framework",
      "Communication protocols",
      "Conflict resolution training",
      "Strategic planning facilitation",
      "Ongoing team support",
    ],
    ideal: [
      "Executive teams",
      "Department leadership",
      "Project leadership teams",
      "Organizations in transition",
    ],
  },
  {
    name: "Leadership Accelerator",
    tagline: "Fast-Track Development",
    duration: "90 days",
    format: "Intensive Coaching",
    participants: "1-on-1",
    price: "$6,500",
    description:
      "Rapid leadership development for those facing immediate challenges or opportunities.",
    features: [
      "Weekly intensive coaching sessions",
      "Unlimited text/email support",
      "Leadership assessment",
      "Customized action plan",
      "Skills workshops (2 sessions)",
      "Accountability check-ins",
      "Resource toolkit",
      "30-day post-program support",
    ],
    ideal: [
      "New executives in first 90 days",
      "Leaders facing urgent challenges",
      "Those preparing for promotion",
      "Career transition support",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "Free 30-minute consultation to discuss your goals and determine the best program fit.",
  },
  {
    step: "02",
    title: "Assessment",
    description:
      "Complete leadership assessments and receive detailed insights into your strengths and growth areas.",
  },
  {
    step: "03",
    title: "Program Launch",
    description:
      "Begin your journey with a comprehensive kickoff session and personalized development plan.",
  },
  {
    step: "04",
    title: "Active Development",
    description:
      "Engage in coaching sessions, workshops, and practical application of new skills.",
  },
  {
    step: "05",
    title: "Integration",
    description:
      "Solidify learning with ongoing support and accountability to ensure lasting change.",
  },
];

export default function ProgramsPage() {
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
              Leadership Development Programs
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-12 leading-relaxed">
              Comprehensive programs designed to accelerate your leadership
              journey and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.name}
                className="card hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-navy-900 mb-2">
                      {program.name}
                    </h3>
                    <p className="text-royal-600 font-semibold">
                      {program.tagline}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold-600">
                      {program.price}
                    </div>
                  </div>
                </div>

                <p className="text-navy-700 leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-navy-100">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-royal-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-navy-900">
                      {program.duration}
                    </div>
                    <div className="text-xs text-navy-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-royal-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-navy-900">
                      {program.participants}
                    </div>
                    <div className="text-xs text-navy-600">Format</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-5 w-5 text-royal-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-navy-900">
                      {program.format}
                    </div>
                    <div className="text-xs text-navy-600">Type</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="font-semibold text-navy-900 mb-3">
                    What&apos;s Included:
                  </div>
                  <div className="space-y-2">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-navy-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="font-semibold text-navy-900 mb-3">
                    Ideal For:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {program.ideal.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-navy-50 text-navy-700 text-xs rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-navy-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-navy-600">
              A proven process to ensure your success from day one
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-royal-600 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-display font-bold text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-navy-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 mt-20 w-0.5 h-8 bg-navy-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-royal-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Not Sure Which Program Is Right?
            </h2>
            <p className="text-xl text-navy-100 mb-12 leading-relaxed">
              Schedule a free consultation to discuss your goals and find the
              perfect program for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-gold text-lg px-10 py-5">
                Book Free Consultation
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
