export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/yard-logo.png" alt="YARD" className="h-8 w-auto" />
            <span className="font-black text-foreground">YARD</span>
          </div>
          <a href="#contact" className="text-sm font-semibold text-muted-foreground hover:text-red-600 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-32 px-4 text-center border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight">
            YARD<br />
            <span className="text-red-600">CIRCUITS</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Drop-in bootcamp fitness. HIIT. Combat. Football S&C. For everyone.
          </p>
          <p className="text-4xl font-black text-red-600 mb-12">£8 per class</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-black transition-all">
            Book Now
          </a>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-foreground mb-10 text-center">Schedule</h2>
          <div className="space-y-2">
            <div className="flex justify-between p-4 border border-border rounded-lg hover:bg-card transition-colors">
              <span className="font-bold text-foreground">Monday</span>
              <span className="text-muted-foreground">11:30–13:30 Lunchtime</span>
            </div>
            <div className="flex justify-between p-4 border border-border rounded-lg hover:bg-card transition-colors">
              <span className="font-bold text-foreground">Tuesday</span>
              <span className="text-muted-foreground">6:30–8:30 AM / 11:30–13:30 / 18:00–20:00</span>
            </div>
            <div className="flex justify-between p-4 border border-border rounded-lg hover:bg-card transition-colors">
              <span className="font-bold text-foreground">Wednesday</span>
              <span className="text-muted-foreground">11:30–13:30 Lunchtime</span>
            </div>
            <div className="flex justify-between p-4 border border-border rounded-lg hover:bg-card transition-colors">
              <span className="font-bold text-foreground">Thursday</span>
              <span className="text-muted-foreground">6:30–8:30 AM / 11:30–13:30 / 18:00–20:00</span>
            </div>
            <div className="flex justify-between p-4 border border-border rounded-lg hover:bg-card transition-colors">
              <span className="font-bold text-foreground">Friday</span>
              <span className="text-muted-foreground">11:30–13:30 Lunchtime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-foreground mb-6">Get Started</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Ready to train? Reach out and we'll get you sorted.
          </p>
          <div className="space-y-4">
            <a href="https://wa.me/447595228722" className="block text-red-600 hover:text-red-700 font-bold text-lg">
              💬 WhatsApp: 07595 228722
            </a>
            <a href="mailto:info@yardtraining.co.uk" className="block text-red-600 hover:text-red-700 font-bold text-lg">
              📧 Email: info@yardtraining.co.uk
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} YARD Training</p>
        <p>Barnet, North London</p>
      </footer>
    </div>
  )
}