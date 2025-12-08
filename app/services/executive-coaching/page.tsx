import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Executive Coaching | John Barrett Leadership",
  description:
    "Elite coaching for C-suite executives and senior leaders. Navigate complex challenges, drive transformation, and maximize your leadership impact.",
};

const benefits = [
  "Develop strategic vision and execution capabilities",
  "Enhance executive presence and influence",
  "Navigate organizational politics effectively",
  "Build and lead high-performing executive teams",
  "Drive successful organizational transformation",
  "Achieve work-life integration at the executive level",
  "Prepare for board-level responsibilities",
  "Maximize your leadership legacy",
];

const process = [
  {
    step: "01",
    title: "Executive Assessment",
    description:
      "Comprehensive 360-degree feedback, psychometric assessments, and stakeholder interviews to understand your current state and aspirations.",
    duration: "Weeks 1-2",
  },
  {
    step: "02",
    title: "Strategic Development Plan",
    description:
      "Custom roadmap aligned with your business objectives, personal goals, and organizational context.",
    duration: "Week 3",
  },
  {
    step: "03",
    title: "Intensive Coaching Engagement",
    description:
      "Bi-weekly confidential sessions addressing real-time challenges, strategic decisions, and leadership development.",
    duration: "Months 1-6",
  },
  {
    step: "04",
    title: "Progress Reviews & Refinement",
    description:
      "Quarterly stakeholder check-ins and plan adjustments to ensure continued relevance and impact.",
    duration: "Ongoing",
  },
];

export default function ExecutiveCoachingPage() {
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
              <Award className="h-4 w-4 text-gold-400" />
              Elite Executive Development
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Executive Coaching
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-12 leading-relaxed">
              Confidential, strategic coaching for C-suite executives navigating
              complex challenges and driving organizational transformation.
            </p>
            <Link href="/contact" className="btn-gold text-lg px-10 py-5">
              Schedule Executive Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
                Leadership at the Highest Level
              </h2>
              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                Executive coaching is a confidential partnership designed for
                senior leaders who face unique challenges that can&apos;t be
                discussed with colleagues or direct reports. As a trusted
                advisor, I provide the strategic thinking partner you need to
                navigate complexity, make critical decisions, and maximize your
                impact.
              </p>
              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                Whether you&apos;re a CEO driving transformation, a CFO
                preparing for the C-suite, or a board member expanding your
                influence, this intensive coaching engagement delivers the
                insights, strategies, and support you need to excel.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-royal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">
                      C-Suite Executives
                    </div>
                    <div className="text-sm text-navy-600">
                      CEO, CFO, COO, CTO
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-royal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">
                      Senior Leaders
                    </div>
                    <div className="text-sm text-navy-600">
                      SVP, VP, Directors
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
                  alt="Executive Coaching"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-royal-500 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-navy-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              The Executive Coaching Process
            </h2>
            <p className="text-xl text-navy-600">
              A rigorous, confidential approach designed for senior leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item) => (
              <div
                key={item.step}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-royal-500 to-royal-600 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-display font-bold text-navy-900">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-navy-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.duration}
                      </div>
                    </div>
                    <p className="text-navy-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-12 text-center">
              Executive Outcomes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-royal-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-navy-700 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 card bg-gradient-to-br from-royal-50 to-navy-50 border-2 border-royal-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-navy-900 mb-3">
                    Confidential & Customized
                  </h3>
                  <p className="text-navy-700 leading-relaxed mb-4">
                    All executive coaching engagements are completely
                    confidential and tailored to your unique situation,
                    challenges, and goals. Pricing is customized based on scope,
                    duration, and specific needs.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-royal-600 font-semibold hover:text-royal-700 group"
                  >
                    Discuss Your Executive Coaching Needs
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
              Ready to Elevate Your Executive Leadership?
            </h2>
            <p className="text-xl text-navy-100 mb-12 leading-relaxed">
              Schedule a confidential consultation to discuss how executive
              coaching can help you navigate your most critical challenges and
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-gold text-lg px-10 py-5">
                Schedule Confidential Consultation
              </Link>
              <Link
                href="/results"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View Executive Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
