import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Leadership Coaching | John Barrett Leadership",
  description:
    "Transform your leadership capabilities with personalized one-on-one coaching. Proven frameworks for emerging and established leaders.",
};

const benefits = [
  "Develop authentic leadership presence",
  "Master strategic decision-making",
  "Build high-performing teams",
  "Enhance communication effectiveness",
  "Navigate complex challenges with confidence",
  "Accelerate career progression",
  "Create lasting organizational impact",
  "Achieve sustainable work-life integration",
];

const process = [
  {
    step: "01",
    title: "Initial Assessment",
    description:
      "Comprehensive leadership evaluation including 360-degree feedback, personality assessments, and goal-setting session.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Custom Development Plan",
    description:
      "Personalized coaching roadmap aligned with your specific goals, challenges, and organizational context.",
    duration: "Week 2",
  },
  {
    step: "03",
    title: "Bi-Weekly Coaching Sessions",
    description:
      "Deep-dive coaching conversations focused on real-world challenges, skill development, and accountability.",
    duration: "Ongoing",
  },
  {
    step: "04",
    title: "Progress Reviews",
    description:
      "Regular milestone assessments to measure growth, celebrate wins, and adjust strategies as needed.",
    duration: "Monthly",
  },
];

const faqs = [
  {
    question: "How long does a typical coaching engagement last?",
    answer:
      "Most leadership coaching engagements run for 6-12 months, with bi-weekly sessions. This timeframe allows for meaningful transformation while maintaining momentum.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "Expect 1-2 hours per session, plus time for reflection and implementing strategies between sessions. Most clients dedicate 3-4 hours per month total.",
  },
  {
    question: "Is coaching confidential?",
    answer:
      "Absolutely. All coaching conversations are completely confidential. I adhere to ICF (International Coach Federation) ethical guidelines.",
  },
  {
    question: "How is coaching different from consulting?",
    answer:
      "Coaching focuses on developing YOU as a leader, not just solving problems. I help you discover your own solutions rather than prescribing answers.",
  },
  {
    question: "What if I'm not sure coaching is right for me?",
    answer:
      "That's what the free strategy call is for! We'll discuss your goals and challenges to determine if coaching is the best fit for your needs.",
  },
];

export default function LeadershipCoachingPage() {
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
              <Target className="h-4 w-4 text-gold-400" />
              One-on-One Leadership Development
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Leadership Coaching
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-12 leading-relaxed">
              Unlock your full leadership potential through personalized
              coaching designed to accelerate your growth and amplify your
              impact.
            </p>
            <Link href="/contact" className="btn-gold text-lg px-10 py-5">
              Book Your Free Strategy Call
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
                Transform Your Leadership Journey
              </h2>
              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                Leadership coaching is a powerful partnership designed to help
                you become the leader you're capable of being. Through
                one-on-one sessions, we'll work together to identify your
                strengths, overcome obstacles, and develop the skills needed to
                lead with confidence and authenticity.
              </p>
              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                Whether you're stepping into your first leadership role or
                navigating C-suite challenges, this personalized approach
                ensures you get exactly what you need to succeed.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-royal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">
                      For Emerging Leaders
                    </div>
                    <div className="text-sm text-navy-600">
                      Building foundational skills
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-royal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">
                      For Established Leaders
                    </div>
                    <div className="text-sm text-navy-600">
                      Elevating to next level
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                  alt="Leadership Coaching Session"
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
              How Leadership Coaching Works
            </h2>
            <p className="text-xl text-navy-600">
              A proven, systematic approach to leadership development
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
              What You'll Achieve
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
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-navy-900 mb-3">
                    Investment in Your Future
                  </h3>
                  <p className="text-navy-700 leading-relaxed mb-4">
                    Leadership coaching is an investment in yourself and your
                    organization. Most clients see measurable improvements in
                    their effectiveness within the first 90 days.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-royal-600 font-semibold hover:text-royal-700 group"
                  >
                    Discuss Your Custom Program
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-navy-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-display font-bold text-navy-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-navy-700 leading-relaxed">{faq.answer}</p>
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
              Ready to Elevate Your Leadership?
            </h2>
            <p className="text-xl text-navy-100 mb-12 leading-relaxed">
              Schedule a complimentary 30-minute strategy call to discuss your
              goals and explore how leadership coaching can accelerate your
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-gold text-lg px-10 py-5">
                Book Your Free Strategy Call
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
