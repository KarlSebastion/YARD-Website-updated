import { Wind, Target, MapPin, Zap } from "lucide-react";
import bootcampBg from "@/assets/bootcamp-bg.png";

const WhyYard = () => {
  const reasons = [
    {
      icon: Wind,
      title: "EXPOSED TO ELEMENTS",
      description:
        "Train in conditions that build real-world resilience. Rain, wind, cold — they're all part of the transformation.",
    },
    {
      icon: Target,
      title: "ZERO DISTRACTIONS",
      description:
        "No mirrors to pose in. No TVs to zone out. No crowds to navigate. Pure, focused training.",
    },
    {
      icon: Zap,
      title: "FUNCTIONAL RESULTS",
      description:
        "Movement patterns that transfer to real life. Strength that's useful, not just visible.",
    },
    {
      icon: MapPin,
      title: "BARNET LOCATION",
      description:
        "Convenient for North London professionals. Easy parking. Quick in, intense session, out.",
    },
  ];

  return (
    <section
      id="why"
      className="py-20 md:py-32 relative bg-cover bg-center bg-no-repeat overflow-hidden border-b border-white/5"
      style={{ backgroundImage: `url(${bootcampBg})` }}
    >
      <div className="absolute inset-0 bg-black/65 z-0" />

      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0c0c0e] to-transparent z-0" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0c0e] to-transparent z-0" />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '92px 92px',
          backgroundPosition: 'center center'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-500 text-xs font-black tracking-[0.35em] font-sans mb-4">
            THE DIFFERENCE
          </p>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase">
            WHY <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)] drop-shadow-[0_0_40px_rgba(220,38,38,0.3)]">THE YARD</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto font-sans">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="p-6 border border-white/5 bg-[#08080a]/80 backdrop-blur-xs hover:border-red-600/40 transition-all duration-300 group rounded-sm shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <reason.icon className="w-8 h-8 text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(220,38,38,0.3)]" />
              <h3 className="text-base font-black tracking-wider text-white mb-3">{reason.title}</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center font-sans">
          <p className="text-lg md:text-xl text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
            "The YARD isn't just where I train.
            <span className="text-white font-bold not-italic"> It's where I became someone different.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyYard;