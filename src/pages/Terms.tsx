import { ArrowLeft, Phone, FileText } from 'lucide-react'

const Terms = () => {
  const sections = [
    {
      title: '1. About YARD Training',
      body: `YARD Training is a personal training and small group fitness coaching service operated by Karl Sebastian, based at Oakleigh Road North, N20, Barnet, North London. All services are delivered by a NASM certified Personal Trainer.

For all enquiries, contact us via WhatsApp on 07595 228722 or via the contact form on our website at yard.training.`,
    },
    {
      title: '2. Services',
      body: `YARD Training offers the following services:

- Small Group Personal Training (SGPT) — structured coaching sessions for groups of up to 6 members, held twice per week on Tuesdays and Thursdays.
- Bespoke 1-to-1 Personal Training — by arrangement.
- Additional workshops, seminars, and community events — announced via WhatsApp.

All session details, scheduling, and communications are managed primarily through WhatsApp. Clients are responsible for booking their own sessions via their designated group channel.`,
    },
    {
      title: '3. Membership & Payment',
      body: `Founding Member Rate: £60 per month (July and August 2026 only).
Standard Rate: £99 per month from September 2026.

Payment is collected monthly via the link provided during the onboarding process. By completing payment, you confirm your enrolment and agreement to these terms.

Membership runs on a monthly rolling basis. There are no long-term contracts. YARD Training reserves the right to update pricing with a minimum of 30 days' notice.`,
    },
    {
      title: '4. Cancellations & Refunds',
      body: `Monthly memberships may be cancelled at any time with written notice via WhatsApp. Cancellation takes effect at the end of the current billing month. No partial refunds will be issued for unused sessions within a billing period.

Individual session cancellations must be made at least 12 hours in advance via the relevant WhatsApp group channel. Late cancellations and no-shows are not refundable and cannot be rescheduled.

YARD Training reserves the right to cancel or reschedule sessions due to circumstances beyond our control (illness, facility issues, adverse weather, etc.). In such cases, affected sessions will be rescheduled or credited.`,
    },
    {
      title: '5. Health, Safety & Medical Disclosure',
      body: `All clients are required to complete a health questionnaire (PAR-Q) prior to commencing training. By enrolling, you confirm that the health information provided is accurate and complete.

It is your responsibility to inform YARD Training of any changes to your health status, injuries, or medical conditions before your next session. YARD Training will not be held liable for any injury or health issue arising from the withholding of relevant medical information.

You participate in all YARD Training sessions entirely at your own risk. YARD Training is not a medical provider. Nothing communicated by YARD Training — including nutritional guidance — constitutes medical advice.`,
    },
    {
      title: '6. Liability',
      body: `YARD Training, its coaches, staff, and affiliates shall not be held liable for any loss, injury, or damage to persons or property sustained during or as a result of participation in any YARD Training service, except where such liability cannot lawfully be excluded.

Clients are responsible for their own personal property at all times. YARD Training accepts no responsibility for lost, stolen, or damaged items.`,
    },
    {
      title: '7. Code of Conduct',
      body: `All clients are required to adhere to the YARD SGPT Code of Conduct, available in full at yard.training/code-of-conduct. This includes but is not limited to: respectful behaviour toward fellow members and coaches, prompt communication regarding session absences, and appropriate use of the YARD WhatsApp community.

YARD Training reserves the right to terminate any membership without refund in cases of serious or repeated breach of the Code of Conduct.`,
    },
    {
      title: '8. Photography & Media',
      body: `YARD Training may occasionally photograph or film sessions for use on social media or marketing materials. You will be informed in advance and your consent will be sought. You may opt out at any time by notifying Karl directly via WhatsApp.`,
    },
    {
      title: '9. Privacy & Data',
      body: `YARD Training collects personal information (name, contact details, health information) solely for the purpose of delivering our services and communicating with clients. Your data will never be sold or shared with third parties without your consent.

For full details on how we handle your data, please contact us via WhatsApp on 07595 228722.`,
    },
    {
      title: '10. Changes to These Terms',
      body: `YARD Training reserves the right to update these Terms & Conditions at any time. Clients will be notified of any material changes via WhatsApp with a minimum of 14 days' notice. Continued use of our services after that date constitutes acceptance of the updated terms.`,
    },
    {
      title: '11. Governing Law',
      body: `These Terms & Conditions are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
    },
  ]

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
        <FileText className="h-4 w-4 text-red-500" />
        <span className="text-red-500 text-xs font-black tracking-widest uppercase">Legal</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight tracking-tight">
        Terms &<br />
        <span className="text-red-600">Conditions</span>
      </h1>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        Please read these terms carefully before using our services. By enrolling with YARD Training you agree to the terms set out below.
      </p>
      <p className="text-muted-foreground text-xs mt-4">Last updated: July 2026</p>
    </div>
      </section >

  {/* Content */ }
  < main className = "max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6" >
  {
    sections.map((section, i) => (
      <div key={i} className="bg-card rounded-2xl px-8 py-7 border border-border">
        <h2 className="text-lg font-black text-foreground mb-3 tracking-tight">{section.title}</h2>
        <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{section.body}</div>
      </div>
    ))
  }

{/* Contact */ }
<div className="text-center pb-8 pt-4">
  <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
    <Phone className="h-3.5 w-3.5 text-red-500" />
    <span>Questions? WhatsApp Karl: <a href="https://wa.me/447595228722" className="text-red-500 hover:underline font-semibold">07595 228722</a></span>
  </div>
</div>
      </main >

  {/* Footer */ }
  < footer className = "py-8 bg-card border-t border-border" >
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
          <a href="/code-of-conduct" className="hover:text-red-500 transition-colors">Code of Conduct</a>
          <a href="/terms" className="hover:text-red-500 transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </div>
      </footer >

    </div >
  )
}

export default Terms