const stats = [
  { value: "20+", label: "Years of Expertise", suffix: "" },
  { value: "500", label: "Leaders Coached", suffix: "+" },
  { value: "95", label: "Client Satisfaction", suffix: "%" },
  { value: "50", label: "Fortune 500 Clients", suffix: "+" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(30deg, #134EAD 12%, transparent 12.5%, transparent 87%, #134EAD 87.5%, #134EAD),
            linear-gradient(150deg, #134EAD 12%, transparent 12.5%, transparent 87%, #134EAD 87.5%, #134EAD),
            linear-gradient(30deg, #134EAD 12%, transparent 12.5%, transparent 87%, #134EAD 87.5%, #134EAD),
            linear-gradient(150deg, #134EAD 12%, transparent 12.5%, transparent 87%, #134EAD 87.5%, #134EAD)`,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-3">
                <span className="text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                  {stat.suffix}
                </span>
              </div>
              <p className="text-navy-200 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
