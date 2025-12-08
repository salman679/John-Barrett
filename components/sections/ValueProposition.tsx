import { Target, Zap, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Clarity & Direction",
    description:
      "Cut through the noise and gain crystal-clear focus on what truly matters for your leadership and organization.",
  },
  {
    icon: Zap,
    title: "Accelerated Growth",
    description:
      "Fast-track your development with proven frameworks and personalized strategies that deliver measurable results.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Success",
    description:
      "Build lasting leadership capabilities that compound over time, creating exponential impact for years to come.",
  },
  {
    icon: Users,
    title: "Team Transformation",
    description:
      "Elevate not just yourself, but your entire team through cascading leadership excellence and cultural change.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-navy-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Why Leaders Choose
            <span className="gradient-text"> John Barrett</span>
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed">
            Transform your leadership journey with a proven system designed for
            executives, entrepreneurs, and high-performers who refuse to settle
            for average.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="card h-full hover:border-royal-200 border-2 border-transparent transition-all duration-300 group-hover:-translate-y-2">
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-royal-500 to-royal-600 rounded-2xl shadow-lg group-hover:shadow-royal-500/50 transition-shadow">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
