import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0c0c0e] overflow-hidden">
      {/* Intense Crimson Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.22)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Massive 92px Industrial Cage Mesh Layout */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '92px 92px',
          backgroundPosition: 'center center'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500 text-xs md:text-sm font-black tracking-[0.35em] font-sans uppercase mb-6 drop-shadow-[0_0_8px_rgba(239,68,68,0.2)]">
            BARNET'S RAW TRAINING EXPERIENCE
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white uppercase mb-6 leading-[0.95]">
            TRANSFORM IN <br />
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.75)] drop-shadow-[0_0_40px_rgba(220,38,38,0.4)]">
              THE YARD
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            A converted double-garage. Open to the elements. <span className="text-white font-semibold">No distractions. Just results.</span>
          </p>

          {/* Core Layout CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-[0.2em] py-4 px-8 transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.35)] transform hover:scale-[1.02] active:scale-[0.98]">
              START YOUR TRANSFORMATION
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:border-red-600 text-white hover:text-red-500 text-xs font-black uppercase tracking-[0.2em] py-4 px-8 bg-transparent transition-all duration-300 rounded-sm">
              EXPLORE TRAINING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;