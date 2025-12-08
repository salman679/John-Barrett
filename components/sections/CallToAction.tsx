import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-navy-900 via-royal-900 to-navy-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block mt-2 bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              Leadership Journey?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-navy-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of leaders who have accelerated their growth and
            achieved extraordinary results through world-class coaching.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact" className="btn-gold group text-lg px-10 py-5">
              <Calendar className="mr-2 h-6 w-6" />
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Programs
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gold-400 mb-2">
                100%
              </div>
              <div className="text-navy-200">Confidential</div>
            </div>
            <div className="text-center md:border-x border-white/10">
              <div className="text-3xl font-display font-bold text-gold-400 mb-2">
                No Risk
              </div>
              <div className="text-navy-200">Free Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gold-400 mb-2">
                24/7
              </div>
              <div className="text-navy-200">Support Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
