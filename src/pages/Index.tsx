const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <img src="/yard-logo.png" alt="YARD Training" className="h-8 w-auto" />
              <span className="font-black text-xl text-foreground">YARD</span>
            </a>
            <a href="#contact" className="text-sm font-semibold text-muted-foreground hover:text-red-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-32 px-4 text-center border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
            YARD<br />
            <span className="text-red-600">Circuits</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Drop-in bootcamp fitness. HIIT. Combat. Football S&C. For everyone.
          </p>
          <p className="text-3xl font-black text-red-600 mb-8">£8 per class</p>

          href="#contact"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all"
          >
          Book Your First Class
        </a>
    </div>
      </section >

  {/* Schedule */ }
  < section className = "py-20 px-4 bg-card" >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-black text-foreground mb-12 text-center">Schedule</h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-4 border border-border rounded-lg">
          <span className="font-semibold text-foreground">Monday</span>
          <span className="text-muted-foreground">11:30 – 13:30 (Lunchtime)</span>
        </div>
        <div className="flex justify-between items-center p-4 border border-border rounded-lg">
          <span className="font-semibold text-foreground">Tuesday</span>
          <span className="text-muted-foreground">6:30 – 8:30 AM + 11:30 – 13:30 + 18:00 – 20:00</span>
        </div>
        <div className="flex justify-between items-center p-4 border border-border rounded-lg">
          <span className="font-semibold text-foreground">Wednesday</span>
          <span className="text-muted-foreground">11:30 – 13:30 (Lunchtime)</span>
        </div>
        <div className="flex justify-between items-center p-4 border border-border rounded-lg">
          <span className="font-semibold text-foreground">Thursday</span>
          <span className="text-muted-foreground">6:30 – 8:30 AM + 11:30 – 13:30 + 18:00 – 20:00</span>
        </div>
        <div className="flex justify-between items-center p-4 border border-border rounded-lg">
          <span className="font-semibold text-foreground">Friday</span>
          <span className="text-muted-foreground">11:30 – 13:30 (Lunchtime)</span>
        </div>
      </div>
    </div>
      </section >

  {/* Contact */ }
  < section id = "contact" className = "py-20 px-4" >
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-black text-foreground mb-6">Get Started</h2>
      <p className="text-muted-foreground mb-8">
        Ready to join? Drop us a message and we'll get back to you within 24 hours.
      </p>
      <div className="flex flex-col gap-4 items-center">

        href="https://wa.me/447595228722"
        className="text-red-600 hover:text-red-700 font-semibold text-lg"
            >
        WhatsApp: 07595 228722
      </a>

      href="mailto:info@yardtraining.co.uk"
      className="text-red-600 hover:text-red-700 font-semibold text-lg"
            >
      Email: info@yardtraining.co.uk
    </a>
          </div >
        </div >
      </section >

  {/* Footer */ }
  < footer className = "py-8 bg-card border-t border-border text-center text-sm text-muted-foreground" >
        <p>© {new Date().getFullYear()} YARD Training. All rights reserved.</p>
        <p className="mt-2">Barnet, North London</p>
      </footer >
    </div >
  )
}

export default Index