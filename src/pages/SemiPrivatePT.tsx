import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SignUpModal from "@/components/sgpt/SignUpModal";

const SemiPrivatePT = () => {
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <SignUpModal open={signUpOpen} onOpenChange={setSignUpOpen} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/sgpt-hero.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary/12 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-xs tracking-[0.3em] mb-6 animate-fade-up">
              📍 BARNET · WHETSTONE · N20
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              SMALL GROUP.
              <span className="block text-gradient">SERIOUS RESULTS.</span>
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-4 space-y-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p>This is not a gym class.</p>
              <p>This is not a casual workout.</p>
            </div>

            <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              This is <span className="text-gradient">coaching.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: '0.35s' }}>
              <span className="px-3 py-1.5 border border-border">👥 Max 6 people</span>
              <span className="px-3 py-1.5 border border-border">📅 2x per week</span>
              <span className="px-3 py-1.5 border border-border">📋 Structured</span>
              <span className="px-3 py-1.5 border border-border">🚫 No passengers</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#apply"
                className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wider hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                CLAIM YOUR SPACE — £120/mo
              </a>
              <a
                href="#what"
                className="px-8 py-4 border border-border text-foreground text-sm tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
              >
                HOW IT WORKS
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              🔒 Limited spaces — only 6 per group
            </p>
          </div>
        </div>
      </section>


      {/* What Is SGPT */}
      <section id="what" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-sm tracking-[0.3em] mb-4">WHAT IS SGPT?</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              THE FOCUS OF 1-1. <span className="text-gradient">THE DRIVE OF A GROUP.</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Small Group Personal Training at The YARD gives you the focus of 1-1 coaching with the drive and energy of a small, committed group.
              </p>
              <div>
                <p>You train in our converted garage gym — raw, functional, open to the elements.</p>
                <p className="text-foreground font-medium">Concrete. Iron. Open air. 🏗️</p>
              </div>
              <p>But your programme is adapted to <span className="text-foreground font-medium">you.</span></p>
              <p className="text-foreground font-medium">
                💪 Strength. 🔥 Fat loss. ⚡ Performance.<br />
                Whatever your goal — you train with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-sm tracking-[0.3em] mb-4">WHAT YOU GET</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-10">
              STRUCTURED. <span className="text-gradient">COACHED. TRACKED.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { emoji: "✅", title: "2 coached sessions/week", desc: "Monday to Friday" },
                { emoji: "📝", title: "Tailored programme", desc: "Built for your goals" },
                { emoji: "📊", title: "Progress tracking", desc: "Measured, not guessed" },
                { emoji: "🎯", title: "Direct coaching", desc: "Real-time form & accountability" },
              ].map((item) => (
                <div key={item.title} className="p-5 border border-border bg-card">
                  <span className="text-2xl block mb-2">{item.emoji}</span>
                  <p className="text-foreground font-medium mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-primary pl-6 space-y-2 text-muted-foreground">
              <p>This is not random circuits or generic programming.</p>
              <p className="text-foreground font-medium">It's structured training inside a small, disciplined group.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-sm tracking-[0.3em] mb-4">WHO THIS IS FOR</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              BARNET <span className="text-gradient">PROFESSIONALS</span> WHO:
            </h2>

            <ul className="space-y-4 mb-10">
              {[
                { emoji: "⏱️", text: "Want results without wasting time" },
                { emoji: "🧠", text: "Prefer coaching over guesswork" },
                { emoji: "📈", text: "Train to improve — not just to sweat" },
                { emoji: "🏆", text: "Value structure, standards and accountability" },
                { emoji: "🏠", text: "Have tried gyms before but lacked consistency" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-4 text-base md:text-lg text-foreground">
                  <span className="text-xl">{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 border border-border bg-background">
              <p className="text-muted-foreground">If you want comfort, go elsewhere.</p>
              <p className="text-foreground font-medium mt-1">If you want change — step into <span className="text-gradient">The YARD.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule + Investment Side-by-Side */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Schedule */}
            <div>
              <p className="text-primary text-sm tracking-[0.3em] mb-4">SCHEDULE</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                TUESDAYS & <span className="text-gradient">THURSDAYS</span>
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  { time: "6:30–7:30am & 7:30-8:30am", emoji: "🌅", label: "Mornings" },
                  { time: "11–12pm & 12-1pm", emoji: "☀️", label: "Late Mornings & Lunchtime" },
                  { time: "6pm–7pm & 7pm-8pm", emoji: "🌆", label: "Evenings" },
                ].map((slot) => (
                  <div key={slot.time} className="flex items-center gap-4 p-4 border border-border bg-card">
                    <span className="text-2xl">{slot.emoji}</span>
                    <div>
                      <p className="text-xs text-muted-foreground">{slot.label}</p>
                      <p className="text-foreground font-medium">{slot.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-sm">
                In and out. Efficient. Focused. ⚡
              </p>
            </div>

            {/* Investment */}
            <div>
              <p className="text-primary text-sm tracking-[0.3em] mb-4">INVESTMENT</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                <span className="text-gradient">£120</span>/month
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  { emoji: "📅", text: "Two sessions per week" },
                  { emoji: "📋", text: "Bespoke programming" },
                  { emoji: "🎯", text: "Coached properly — every rep" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 p-4 border border-border bg-card">
                    <span className="text-xl">{item.emoji}</span>
                    <p className="text-foreground text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-sm">
                🔒 Spaces capped at <span className="text-foreground font-medium">6 per group</span> to ensure quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How To Join */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-sm tracking-[0.3em] mb-4">HOW TO JOIN</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-10">
              IN THREE <span className="text-gradient">STEPS</span>
            </h2>

            <div className="space-y-6 mb-10">
              {[
                { step: "01", emoji: "📝", text: "Complete the online health consultation & PAR-Q" },
                { step: "02", emoji: "🎯", text: "We review your goals and find the right slot" },
                { step: "03", emoji: "💪", text: "You're placed into your session — and you show up" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5 p-5 border border-border bg-background">
                  <span className="text-primary font-medium text-lg min-w-[2rem]">{item.step}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <p className="text-foreground text-base md:text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>🚫 No drop-ins.</span>
              <span>🚫 No chaos.</span>
              <span>🚫 No excuses.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium mb-6">
              READY TO TRAIN <span className="text-gradient">PROPERLY?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-2">Apply now.</p>
            <p className="text-foreground text-lg mb-10 font-medium">
              Earn your place in The YARD. 🔥
            </p>
            <button
              onClick={() => setSignUpOpen(true)}
              className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm tracking-wider hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              START NOW — £120/mo
            </button>
            <p className="text-xs text-muted-foreground mt-4">
              📍 Whetstone, Barnet, N20 · Monday to Friday
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SemiPrivatePT;
