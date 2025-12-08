import Link from "next/link";
import {
  Compass,
  Briefcase,
  Users,
  Mic,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Leadership Coaching",
    description:
      "One-on-one transformational coaching for emerging and established leaders ready to elevate their impact.",
    features: [
      "Personal leadership assessment",
      "Custom development plan",
      "Bi-weekly coaching sessions",
      "Accountability & support",
    ],
    href: "/services/leadership-coaching",
    color: "from-royal-500 to-royal-600",
  },
  {
    icon: Briefcase,
    title: "Executive Coaching",
    description:
      "Elite coaching for C-suite executives and senior leaders navigating complex organizational challenges.",
    features: [
      "Strategic thinking development",
      "360-degree feedback",
      "Executive presence coaching",
      "Board-level preparation",
    ],
    href: "/services/executive-coaching",
    color: "from-navy-600 to-navy-700",
  },
  {
    icon: Users,
    title: "Workshops & Training",
    description:
      "High-impact team workshops and leadership development programs that create lasting organizational change.",
    features: [
      "Custom workshop design",
      "Team dynamics training",
      "Leadership frameworks",
      "Implementation support",
    ],
    href: "/services/workshops",
    color: "from-gold-500 to-gold-600",
  },
  {
    icon: Mic,
    title: "Keynote Speaking",
    description:
      "Inspiring keynotes that energize audiences and catalyze leadership transformation at your events.",
    features: [
      "Customized content",
      "Engaging delivery",
      "Actionable insights",
      "Virtual & in-person",
    ],
    href: "/services/keynote-speaking",
    color: "from-royal-600 to-navy-600",
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Transform Your Leadership
            <span className="gradient-text"> Journey</span>
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed">
            Choose the path that aligns with your goals. Each service is
            designed to deliver measurable results and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group card hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className={`flex-shrink-0 p-4 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-navy-900 mb-3 group-hover:text-royal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-navy-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-navy-700"
                    >
                      <svg
                        className="h-5 w-5 text-royal-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-royal-600 font-semibold hover:text-royal-700 group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-navy-600 mb-6">
            Not sure which service is right for you?
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
