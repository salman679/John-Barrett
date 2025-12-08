import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-royal-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-gold-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-royal-500/20 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative z-10 py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            Transforming Leaders Since 2003
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Become the Leader
            <br />
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
              Your Future Demands
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-navy-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Accelerate your growth through world-class leadership coaching and
            proven transformation frameworks. 20+ years of expertise helping
            executives, entrepreneurs, and teams reach their fullest potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/contact" className="btn-gold group">
              Book Your Leadership Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Success Stories
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-12 border-t border-white/10 animate-in fade-in duration-700 delay-500">
            <p className="text-navy-300 text-sm uppercase tracking-wider mb-8">
              Trusted By Leaders At
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {["Fortune 500", "Tech Startups", "Healthcare", "Finance"].map(
                (industry) => (
                  <div
                    key={industry}
                    className="text-white/70 font-semibold text-lg"
                  >
                    {industry}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
