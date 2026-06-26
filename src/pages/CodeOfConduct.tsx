import { ShieldCheck, CheckCircle2, ArrowLeft, Phone } from 'lucide-react'

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen bg-background font-sans">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <img src="/yard-logo.png" alt="YARD Training" className="h-8 w-auto" />
            </a>

            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-red-500 transition-colors"
            >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </a>
        </div>
    </div>
      </nav >

  {/* Hero */ }
  < section className = "gritty-bg py-20 px-4 text-center border-b border-border" >
    <div className="max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-1.5 mb-6">
        <ShieldCheck className="h-4 w-4 text-red-500" />
        <span className="text-red-500 text-xs font-black tracking-widest uppercase">Founding Members</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight tracking-tight">
        YARD SGPT<br />
        <span className="text-red-600">Code of Conduct</span>
      </h1>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        Effective 7th July 2026. By joining your WhatsApp group and completing payment, you agree to this Code of Conduct.
      </p>
    </div>
      </section >

  {/* Content */ }
  < main className = "max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-14" >

    {/* Welcome */ }
    < div className = "bg-card rounded-2xl p-8 border border-border" >
          <h2 className="text-2xl font-black text-foreground mb-4 tracking-tight">Welcome to the YARD.</h2>
          <p className="text-muted-foreground leading-relaxed">
            You've joined something small on purpose. Six people per group. Two sessions a week. One coach who knows your name, your goals, and where you started.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            This isn't a gym membership. It's a coaching commitment — and it works both ways.
          </p>
        </div >

  {/* What we commit */ }
  < div >
          <span className="text-red-500 text-xs font-black tracking-widest uppercase">Our Promise</span>
          <h2 className="text-2xl font-black text-foreground mt-2 mb-6 tracking-tight">What we commit to you</h2>
          <div className="space-y-3">
            {[
              'Showing up prepared for every session, every week',
              'Coaching you as an individual within your group',
              'A monthly online check-in to review your progress',
              'Regular guidance on training, recovery, and basic nutrition within scope',
              'Keeping your group updated on schedule changes, events, and new additions via WhatsApp',
              'Treating every group with the same standard as a 1-to-1 client',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-xl px-5 py-4 border border-border">
                <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div >

  {/* What we ask */ }
  < div >
          <span className="text-red-500 text-xs font-black tracking-widest uppercase">Your Commitment</span>
          <h2 className="text-2xl font-black text-foreground mt-2 mb-6 tracking-tight">What we ask of you</h2>
          <p className="text-muted-foreground text-sm mb-6">
            To get the most from SGPT — and to respect the five other people training alongside you — we ask that you:
          </p>
          <div className="space-y-4">
            {[
              { title: 'Show up.', body: "Two sessions a week is the programme. Consistency is where results come from. If you can't make a session, let us know in advance via WhatsApp." },
              { title: 'Be on time.', body: "Sessions start on the dot. Warm-ups are part of the coaching, not optional extras. Aim to arrive 5 minutes early." },
              { title: 'Communicate.', body: "Life happens. If something changes — injury, holiday, work — message Karl directly. Don't go quiet." },
              { title: 'Respect the group.', body: "All levels, all backgrounds, all starting points. No judgement, no comparison, no egos." },
              { title: 'Respect the space.', body: "YARD is a working training environment. Equipment gets returned, space gets kept clean, and the community keeps it that way." },
              { title: 'Commit to the month.', body: "SGPT runs on a monthly cycle, starting the first Tuesday of each month. Your Founding Member rate of £60/month is locked in for July and August. From September, membership moves to £99/month." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl px-6 py-5 border border-border">
                <p className="text-foreground font-bold text-sm mb-1">{item.title}</p>
                <p className="text-muted-foregrou