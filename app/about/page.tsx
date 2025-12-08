import { Award, BookOpen, Users, Target, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About John Barrett | Leadership Coach & Speaker",
  description:
    "Meet John Barrett - a world-class leadership coach with 20+ years of experience transforming executives, entrepreneurs, and teams worldwide.",
};

const credentials = [
  "Certified Executive Coach (ICF)",
  "Master's in Organizational Leadership",
  "Published Author - 3 Leadership Books",
  "20+ Years Coaching Experience",
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every engagement is focused on measurable outcomes and sustainable transformation.",
  },
  {
    icon: Users,
    title: "People-Centered",
    description:
      "Leadership is about people. I help you unlock the potential in yourself and others.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "The best leaders never stop growing. I bring cutting-edge research and proven frameworks.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Commitment to the highest standards in coaching, speaking, and leadership development.",
  },
];

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Meet John Barrett
              </h1>
              <p className="text-xl text-navy-100 leading-relaxed mb-8">
                Transforming leaders and organizations through proven
                frameworks, authentic coaching, and 20+ years of real-world
                experience.
              </p>
              <div className="flex flex-wrap gap-3">
                {credentials.map((credential) => (
                  <div
                    key={credential}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-gold-400" />
                    {credential}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
                  alt="John Barrett"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-royal-500 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-8">
              My Journey in Leadership Development
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-navy-700 leading-relaxed mb-6">
                For over two decades, I've had the privilege of walking
                alongside leaders as they navigate their most challenging
                moments and celebrate their greatest victories. My journey began
                in corporate America, where I quickly learned that technical
                skills alone don't make great leaders— it's the ability to
                inspire, influence, and empower others that truly matters.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                After experiencing my own leadership transformation through
                coaching, I knew I had found my calling. I dedicated myself to
                mastering the art and science of leadership development, earning
                my certification as an executive coach and completing advanced
                studies in organizational psychology.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Today, I work with executives, entrepreneurs, and emerging
                leaders across industries—from Fortune 500 companies to
                high-growth startups. Each engagement is unique, but the core
                mission remains the same: to help leaders discover and unleash
                their fullest potential.
              </p>
              <p className="text-navy-700 leading-relaxed">
                My approach combines proven frameworks with personalized
                strategies, always grounded in practical application. Because at
                the end of the day, leadership isn't about theory— it's about
                results, relationships, and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-navy-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              What Drives My Work
            </h2>
            <p className="text-xl text-navy-600">
              These core values guide every coaching engagement, workshop, and
              keynote I deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-royal-500 to-royal-600 rounded-2xl shadow-lg mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">
              Let's Start Your Transformation
            </h2>
            <p className="text-xl text-navy-600 mb-8">
              Ready to take your leadership to the next level? Schedule a
              complimentary strategy session to explore how we can work
              together.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-5">
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
