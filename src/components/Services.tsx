import { User, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "PERSONAL TRANSFORMATION",
      subtitle: "1-1 Personal Training",
      description:
        "Focused sessions for professionals who demand results. Functional training tailored to your goals, your schedule, your transformation.",
      features: [
        "Customised programming",
        "Flexible scheduling",
        "Nutritional guidance",
        "Progress tracking",
      ],
      cta: "Book Your Consultation",
      href: "#contact",
      isSolid: false,
    },
    {
      icon: Users,
      title: "YARD BOOTCAMPS",
      subtitle: "Small Group Training",
      description:
        "High-intensity circuit sessions in a tight-knit group. Push limits together. Build community. Get results.",
      features: [
        "Circuit-style training",
        "Small groups (max 6)",
        "Community energy",
        "Competitive atmosphere",
      ],
      cta: "Join a Bootcamp",
      href: "#contact",
      isSolid: true,
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-background border-b border-border overflow-hidden">
      {/* Scaled Structural Cage Mesh Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '92px 92px',
          backgroundPosition: 'center center'
        }}
      />

      {/* Subtle background glow anchoring the cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] w-[800px] h-[400px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] mb-4">SERVICES</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            CHOOSE YOUR <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.55)]">PATH</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 md:p-10 border border-border bg-[#08080a] hover:border-primary/50 transition-all duration-500 rounded-sm shadow-xl"
            >
              <service.icon className="w-10 h-10 text-primary mb-6 drop-shadow-[0_0_10px_rgba(220,38,38,0.2)]" />

              <p className="text-sm text-primary tracking-wider mb-2 font-semibold">
                {service.subtitle}
              </p>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-primary drop-shadow-[0_0_4px_rgba(220,38,38,0.6)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href={service.href}
                  className={`inline-block px-6 py-3 text-sm font-semibold tracking-wider transition-all duration-300 uppercase rounded-sm text-center min-w-[200px] ${service.isSolid
                      ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.25)] hover:bg-red-700 hover:text-white"
                      : "border border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                    }`}
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;