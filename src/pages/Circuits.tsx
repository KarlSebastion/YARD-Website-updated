import { Clock, Zap, Trophy, ArrowRight } from 'lucide-react'

const Circuits = () => {
  const schedule = [
    { day: 'Monday', time: '11:30–13:30', type: 'Lunchtime', focus: 'HIIT + Combat' },
    { day: 'Tuesday', time: '6:30–8:30 AM', type: 'Morning', focus: 'Football S&C' },
    { day: 'Tuesday', time: '11:30–13:30', type: 'Lunchtime', focus: 'Combat + HIIT' },
    { day: 'Tuesday', time: '18:00–20:00', type: 'Evening', focus: 'Football S&C' },
    { day: 'Wednesday', time: '11:30–13:30', type: 'Lunchtime', focus: 'HIIT + Combat' },
    { day: 'Thursday', time: '6:30–8:30 AM', type: 'Morning', focus: 'Combat + HIIT' },
    { day: 'Thursday', time: '11:30–13:30', type: 'Lunchtime', focus: 'Football S&C' },
    { day: 'Thursday', time: '18:00–20:00', type: 'Evening', focus: 'HIIT + Combat' },
    { day: 'Friday', time: '11:30–13:30', type: 'Lunchtime', focus: 'Football S&C' },
  ]

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <img src="/yard-logo.png" alt="YARD Training" className="h-8 w-auto" />
            </a>
            <a href="/" className="text-sm font-semibold text-muted-foreground hover:text-red-500 transition-colors">
              Back to site
            </a>
          </div>
        </div>
      </nav>

      <section className="gritty-bg py-20 px-4 text-center border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight tracking-tight">
            YARD<br />
            <span className="text-red-600">Circuits</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Drop-in bootcamp fitness. HIIT. Combat. Football S&C. For everyone.
          </p>
          <p className="text-2xl font-black text-red-600">£8 per class</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        <section>
          <h2 className="text-3xl font-black text-foreground mb-8 tracking-tight">What is YARD Circuits?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="bg-red-600/10 p-4 rounded-xl inline-block mb-4 border border-red-600/20">
                <Zap className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">High-Intensity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Circuit-style training. Fast-paced. No nonsense. Builds strength and cardiovascular fitness.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="bg-red-600/10 p-4 rounded-xl inline-block mb-4 border border-red-600/20">
                <Trophy className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">All Levels</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Beginners to athletes. Every exercise has scaling options. Progress at your pace.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="bg-red-600/10 p-4 rounded-xl inline-block mb-4 border border-red-600/20">
                <Clock className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">Drop-In Anytime</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No commitment. No membership. Book one class or come every week. Your choice.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-foreground mb-8 tracking-tight">Class Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-black text-foreground mb-2">HIIT</h3>
              <p className="text-sm text-muted-foreground">High-intensity intervals. Push hard, recover, repeat. Maximum results in minimum time.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-black text-foreground mb-2">Combat</h3>
              <p className="text-sm text-muted-foreground">Boxing, kickboxing, heavy bags. Powerful. Cathartic. Full-body engagement.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-black text-foreground mb-2">Football S&C</h3>
              <p className="text-sm text-muted-foreground">Strength and conditioning for football. Athletic power, speed, agility, and endurance.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-foreground mb-8 tracking-tight">Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-black text-foreground">Day</th>
                  <th className="text-left py-4 px-4 font-black text-foreground">Time</th>
                  <th className="text-left py-4 px-4 font-black text-foreground">Type</th>
                  <th className="text-left py-4 px-4 font-black text-foreground">Focus</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((slot, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-muted-foreground font-semibold">{slot.day}</td>
                    <td className="py-4 px-4 text-muted-foreground">{slot.time}</td>
                    <td className="py-4 px-4"><span className="text-red-500 font-bold text-xs uppercase tracking-wider">{slot.type}</span></td>
                    <td className="py-4 px-4 text-muted-foreground">{slot.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Drop-in price per class</p>
            <p className="text-5xl font-black text-red-600 mb-8">£8</p>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              No hidden fees. No membership. Pay as you go. Bring water, wear training kit, come ready to work.
            </p>
            
              href="https://tally.so/r/aQjJX9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all active:scale-95"
            >
              Book Your First Class
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        <section className="bg-red-600/5 rounded-2xl p-8 border border-red-600/20">
          <h2 className="text-2xl font-black text-foreground mb-4">Before You Come</h2>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">•</span>
              <span>Bring water and a towel</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">•</span>
              <span>Wear comfortable training clothing and trainers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">•</span>
              <span>Arrive 5 minutes early</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">•</span>
              <span>Read our health and terms before booking</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">•</span>
              <span>All levels welcome. Zero experience needed.</span>
            </li>
          </ul>
        </section>

      </main>

      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/yard-logo.png" alt="YARD Training" className="h-8 w-auto" />
              <span className="text-sm text-muted-foreground">Barnet, North London</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} YARD Training. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="/terms" className="hover:text-red-500 transition-colors">Terms & Health</a>
              <a href="/circuits" className="hover:text-red-500 transition-colors">Book Circuits</a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default Circuits