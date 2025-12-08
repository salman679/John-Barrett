import { CheckCircle2 } from "lucide-react";

const transformationSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We start with a comprehensive assessment of your current leadership state, challenges, and aspirations.",
  },
  {
    step: "02",
    title: "Custom Strategy Design",
    description:
      "Together, we craft a personalized roadmap tailored to your unique goals and organizational context.",
  },
  {
    step: "03",
    title: "Implementation & Growth",
    description:
      "Through structured coaching sessions, you'll develop new capabilities and implement proven frameworks.",
  },
  {
    step: "04",
    title: "Sustainable Excellence",
    description:
      "Build lasting habits and systems that ensure continuous growth long after our engagement ends.",
  },
];

export default function Transformation() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-navy-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
              Your Path to
              <span className="gradient-text"> Leadership Excellence</span>
            </h2>
            <p className="text-xl text-navy-600 leading-relaxed mb-12">
              A proven, systematic approach that has transformed hundreds of
              leaders across industries. Here&apos;s how we&apos;ll work
              together:
            </p>

            <div className="space-y-8">
              {transformationSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="flex gap-6 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-royal-500 to-royal-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
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
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="lg:pl-8">
            <div className="card bg-gradient-to-br from-white to-navy-50 border-2 border-royal-100">
              <h3 className="text-2xl font-display font-bold text-navy-900 mb-8">
                What You&apos;ll Achieve
              </h3>
              <div className="space-y-4">
                {[
                  "Crystal-clear vision and strategic direction",
                  "Enhanced decision-making capabilities",
                  "Stronger executive presence and influence",
                  "Improved team performance and engagement",
                  "Better work-life integration",
                  "Measurable business results",
                  "Lasting personal transformation",
                  "Expanded professional network",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-navy-200">
                <div className="bg-gradient-to-r from-gold-50 to-gold-100 rounded-xl p-6">
                  <p className="text-navy-900 font-semibold mb-2">
                    Ready to start your transformation?
                  </p>
                  <p className="text-navy-600 text-sm">
                    Book a complimentary strategy session to explore how we can
                    accelerate your leadership journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
