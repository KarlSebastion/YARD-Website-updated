import { ArrowLeft, Phone } from 'lucide-react'

const Terms = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <img src="/yard-logo.png" alt="YARD Training" className="h-8 w-auto" />
            </a>
            <a href="/" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-red-500 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </a>
          </div>
        </div>
      </nav>

      <section className="gritty-bg py-20 px-4 text-center border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight tracking-tight">
            YARD Circuits<br />
            <span className="text-red-600">Terms & Health</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Before you join our bootcamp classes, please read and confirm you understand these terms.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="bg-card rounded-2xl px-8 py-7 border border-border">
          <h2 className="text-2xl font-black text-foreground mb-4 tracking-tight">Health & Medical</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            By booking a YARD Circuits class, you confirm you are in good health and able to participate in high-intensity fitness training.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            If you have any injuries, medical conditions, or are pregnant, please inform Karl before your session. YARD Circuits is not a medical service and nothing we communicate constitutes medical advice.
          </p>
        </div>

        <div className="bg-card rounded-2xl px-8 py-7 border border-border">
          <h2 className="text-2xl font-black text-foreground mb-4 tracking-tight">Liability Waiver</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            You participate in all YARD Circuits classes entirely at your own risk. YARD Training and Karl Sebastian are not liable for any injury, loss, or damage sustained during or as a result of participation in any class, except where such liability cannot lawfully be excluded.
          </p>
        </div>

        <div className="bg-card rounded-2xl px-8 py-7 border border-border">
          <h2 className="text-2xl font-black text-foreground mb-4 tracking-tight">Cancellations & No-Shows</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            Classes are drop-in and non-refundable. If you can no longer attend a booked class, please cancel via email or message at least 12 hours in advance so another person can take your spot.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            No refunds are issued for late cancellations or no-shows.
          </p>
        </div>

        <div className="bg-card rounded-2xl px-8 py-7 border border-border">
          <h2 className="text-2xl font-black text-foreground mb-4 tracking-tight">By Booking You Confirm</h2>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>You are in good physical health and able to participate in high-intensity exercise</li>
            <li>You have disclosed any injuries or medical conditions</li>
            <li>You understand the risks of bootcamp training</li>
            <li>You accept all liability as outlined above</li>
          </ul>
        </div>

        <div className="text-center pb-8 pt-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
            <Phone className="h-3.5 w-3.5 text-red-500" />
            <span>Questions? WhatsApp Karl: <a href="https://wa.me/447595228722" className="text-red-500 hover:underline font-semibold">07595 228722</a></span>
          </div>
        </div>
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
            <div className="flex gap-6 text-xs