const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-background border-b border-white/5 overflow-hidden">
      {/* Continuous Cage Mesh Blueprint Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '92px 92px',
          backgroundPosition: 'center center'
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500 text-xs font-black tracking-[0.35em] font-sans mb-4">ABOUT</p>

          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase mb-10 leading-none">
            THIS IS <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)] drop-shadow-[0_0_40px_rgba(220,38,38,0.3)]">THE YARD</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 font-sans">
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Forget the chrome machines and mirror walls. The YARD is a converted
                double-garage in Barnet — raw concrete, iron, and open to the elements.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                When it rains, you feel it. When it's cold, you push harder.
                This isn't about comfort. It's about <span className="text-white font-bold">transformation</span>.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Training here strips away the noise. No queues. No distractions.
                No excuses. Just you, the weights, and the work.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                The exposure to elements doesn't just build physical resilience —
                it creates <span className="text-white font-bold">mental fortitude</span> that
                carries into every aspect of your life.
              </p>
            </div>
          </div>

          {/* Hardened Industrial Stat Matrix Panels */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 font-sans">
            {[
              { value: "RAW", label: "Environment" },
              { value: "REAL", label: "Results" },
              { value: "1:1", label: "Attention" },
              { value: "100%", label: "Commitment" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 border border-white/5 bg-[#08080a] shadow-xl rounded-sm group hover:border-red-600/30 transition-colors duration-300">
                <p className="text-3xl font-black font-display text-red-500 mb-1 drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]">{stat.value}</p>
                <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;