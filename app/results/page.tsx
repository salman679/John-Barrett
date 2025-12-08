import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Client Results & Success Stories | John Barrett Leadership",
  description:
    "Discover how leaders and organizations have transformed through coaching. Real results, measurable outcomes, and inspiring success stories.",
};

const caseStudies = [
  {
    client: "Tech Startup CEO",
    industry: "Technology",
    challenge: "Scaling from 20 to 200 employees while maintaining culture",
    results: [
      "Increased employee engagement by 45%",
      "Reduced leadership team turnover to 0%",
      "Successfully raised Series B funding",
      "Built scalable leadership structure",
    ],
    testimonial:
      "John helped me transition from founder to CEO. His coaching was instrumental in our growth from startup to scale-up.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800",
  },
  {
    client: "Fortune 500 VP",
    industry: "Financial Services",
    challenge:
      "Preparing for C-suite promotion while leading major transformation",
    results: [
      "Promoted to SVP within 8 months",
      "Led $50M digital transformation",
      "Improved team performance by 60%",
      "Developed executive presence",
    ],
    testimonial:
      "The coaching gave me the confidence and skills to step into executive leadership. I'm now leading at a level I never thought possible.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
  },
  {
    client: "Nonprofit Executive Director",
    industry: "Nonprofit",
    challenge: "Rebuilding organization after leadership crisis",
    results: [
      "Restored board confidence",
      "Increased funding by 35%",
      "Rebuilt leadership team",
      "Doubled program impact",
    ],
    testimonial:
      "John's coaching helped me navigate the most challenging period of my career and emerge as a stronger, more effective leader.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800",
  },
];

const metrics = [
  {
    stat: "95%",
    label: "Client Satisfaction",
    description: "Clients rate their coaching experience as excellent",
  },
  {
    stat: "87%",
    label: "Promotion Rate",
    description: "Clients promoted within 12 months of coaching",
  },
  {
    stat: "3.5x",
    label: "ROI Average",
    description: "Return on investment in leadership development",
  },
  {
    stat: "500+",
    label: "Leaders Coached",
    description: "Executives and emerging leaders transformed",
  },
];

const outcomes = [
  "Increased leadership effectiveness and confidence",
  "Improved team performance and engagement",
  "Enhanced strategic thinking and decision-making",
  "Better work-life integration and stress management",
  "Stronger executive presence and communication",
  "Career advancement and promotions",
  "Successful organizational transformations",
  "Sustainable behavior change and growth",
];

export default function ResultsPage() {
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
              Real Leaders. Real Results.
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-12 leading-relaxed">
              Discover how coaching transforms leaders and organizations through
              measurable outcomes and lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="card text-center">
                <div className="text-5xl font-display font-bold text-royal-600 mb-3">
                  {metric.stat}
                </div>
                <div className="text-lg font-semibold text-navy-900 mb-2">
                  {metric.label}
                </div>
                <p className="text-navy-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-navy-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-navy-600">
              Real transformations from leaders across industries
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.client}
                className={`card grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="inline-flex px-4 py-2 bg-royal-100 text-royal-700 rounded-full text-sm font-semibold mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy-900 mb-3">
                    {study.client}
                  </h3>
                  <p className="text-navy-600 mb-6">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="font-semibold text-navy-900">
                      Results Achieved:
                    </div>
                    {study.results.map((result) => (
                      <div key={result} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-royal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-navy-700">{result}</span>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-gold-500 pl-4 italic text-navy-700">
                    &quot;{study.testimonial}&quot;
                  </blockquote>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.client}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Outcomes */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-12 text-center">
              What Clients Achieve
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-navy-700 font-medium">
                    {outcome}
                  </span>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-navy-100 mb-12 leading-relaxed">
              Join hundreds of leaders who have transformed their careers and
              organizations through world-class coaching.
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
