import React, { useState } from 'react'
import { 
  Dumbbell, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react'


// FAQ Data type definition
interface FAQItem {
  question: string
  answer: string
}

// Services details
interface ServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: React.ReactNode
  tag?: string
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState('small-group')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'small-group',
    notes: ''
  })

  const services: ServiceItem[] = [
    {
      id: 'small-group',
      title: 'Small Group Personal Training',
      subtitle: 'Strength. Community. Results.',
      description: 'The YARD\'s signature offering. Train in groups of up to 6 members with a dedicated strength coach. You get the customization of 1-1 personal training with the electric atmosphere and support of a team environment.',
      icon: <Users className="h-6 w-6 text-amber-400" />,
      tag: 'Most Popular',
      features: [
        'Max 6:1 client-to-coach ratio',
        'Custom progressive strength programming',
        'Weekly accountability & body composition tracking',
        'Nutrition guidelines & macronutrient setup',
        'Access to member-only workshops and socials'
      ]
    },
    {
      id: 'one-to-one',
      title: 'Bespoke 1-1 Personal Training',
      subtitle: 'Elite. Customized. Dedicated.',
      description: 'The ultimate bespoke training program tailored 100% to you. Ideal for specific athletic performance goals, pre/post-rehabilitation, complex scheduling needs, or individuals seeking absolute private guidance.',
      icon: <Dumbbell className="h-6 w-6 text-amber-400" />,
      tag: 'Premium Focus',
      features: [
        '100% individualized workout design',
        'Dedicated 1-on-1 private coaching sessions',
        'Advanced posture, mobility & movement screenings',
        'Comprehensive daily nutrition & lifestyle monitoring',
        'Ultra-flexible scheduling to fit your lifestyle'
      ]
    }
  ]

  const faqs: FAQItem[] = [
    {
      question: "I am a complete beginner. Is The YARD suitable for me?",
      answer: "Absolutely. In fact, many of our members started their fitness journey with us. Whether in Small Group PT or 1-1 PT, every workout is customized to your current skill, strength, and mobility level. Our coaches supervise every repetition, ensuring you lift safely and build confidence rapidly."
    },
    {
      question: "What is the difference between Small Group PT and normal gym classes?",
      answer: "Normal gym classes usually involve 15-30 people following a generic follow-along script. At The YARD, Small Group PT is actual personal training. With a maximum of 6 people per coach, you follow your own progressive programming, track your weight/reps every week, and receive individual form corrections, nutritional setup, and coaching support."
    },
    {
      question: "How long is the initial commitment?",
      answer: "We believe in earning your loyalty, not locking you into long contracts. We offer a 30-Day Trial program to start so you can experience our coaching, facility, and community first-hand. After that, memberships run on a simple month-to-month rolling basis."
    },
    {
      question: "Where is The YARD training facility located?",
      answer: "We are based in Barnet, North London. Our facility is a private, state-of-the-art strength training gym designed to offer an elite coaching experience without the crowds of commercial gym chains. Exact location details and directions are shared upon booking your consultation."
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated API call
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => (prev === index ? null : index))
  }

  return (
    <div className="relative min-h-screen font-sans noise-overlay">
      {/* Top Banner */}
      <div className="bg-amber-400 text-black py-2 px-4 text-center text-xs md:text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
        <Zap className="h-4 w-4 fill-current animate-bounce" />
        <span>LIMITED SPACES: Claim your 30-Day Trial for June 2026. Only 8 spots remaining!</span>
        <a href="#booking" className="underline font-bold hover:text-zinc-900 ml-1">Secure Spot &rarr;</a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-400 text-black p-2 rounded-lg font-black flex items-center justify-center tracking-tighter">
              <span className="font-display text-xl font-black">YARD</span>
            </div>
            <span className="font-display font-black text-xl tracking-widest text-white uppercase">TRAINING</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#offerings" className="text-sm font-semibold text-zinc-300 hover:text-amber-400 transition-colors">Training Programs</a>
            <a href="#about" className="text-sm font-semibold text-zinc-300 hover:text-amber-400 transition-colors">The Facility</a>
            <a href="#testimonials" className="text-sm font-semibold text-zinc-300 hover:text-amber-400 transition-colors">Success Stories</a>
            <a href="#faq" className="text-sm font-semibold text-zinc-300 hover:text-amber-400 transition-colors">FAQs</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#booking" 
              className="bg-amber-400 text-black px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-amber-300 active:scale-95 transition-all shadow-md shadow-amber-500/10"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 py-6 px-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <a 
                href="#offerings" 
                className="text-lg font-semibold text-zinc-300 hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Training Programs
              </a>
              <a 
                href="#about" 
                className="text-lg font-semibold text-zinc-300 hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Facility
              </a>
              <a 
                href="#testimonials" 
                className="text-lg font-semibold text-zinc-300 hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Success Stories
              </a>
              <a 
                href="#faq" 
                className="text-lg font-semibold text-zinc-300 hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </a>
              <hr className="border-zinc-800" />
              <a 
                href="#booking" 
                className="bg-amber-400 text-black text-center py-3 rounded-lg text-base font-bold hover:bg-amber-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[300px] h-[300px] rounded-full bg-accent-neon/5 blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Reviews Pill */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs md:text-sm text-zinc-300 font-semibold">
                North London's Rated 5-Star Strength Gym
              </span>
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              The Gold Standard of <br />
              <span className="text-gradient-accent">Personal Training</span> in Barnet
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Premium Small Group Personal Training and bespoke 1-1 PT. Get expert strength coaching, unmatched accountability, and access to a premium private training community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a 
                href="#booking" 
                className="w-full sm:w-auto bg-amber-400 text-black px-8 py-4 rounded-xl text-base font-bold hover:bg-amber-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Claim 30-Day Trial</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#offerings" 
                className="w-full sm:w-auto bg-zinc-900/90 text-white border border-zinc-800 hover:border-zinc-700 px-8 py-4 rounded-xl text-base font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center"
              >
                Explore Training Programs
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-zinc-800/60 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white font-display">6:1</span>
                <span className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Max Coach Ratio</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white font-display">100%</span>
                <span className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Custom Workouts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white font-display">150+</span>
                <span className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">5-Star Reviews</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white font-display">Barnet</span>
                <span className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">North London</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-20 bg-zinc-900/40 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Barnet Chooses YARD Training
            </h2>
            <p className="text-zinc-400">
              We stripped away the fluff of comercial gym classes and created an elite strength-focused training environment that guarantees results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-panel p-8 rounded-2xl glass-panel-hover">
              <div className="bg-amber-500/10 p-4 rounded-xl inline-block mb-6 border border-amber-500/20">
                <Award className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Strength Coaching</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No generic scripts or high-impact choreographies. Our certified strength coaches guide you through biomechanically sound lift patterns designed to make you strong, functional, and injury-free.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-8 rounded-2xl glass-panel-hover">
              <div className="bg-amber-500/10 p-4 rounded-xl inline-block mb-6 border border-amber-500/20">
                <TrendingUp className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Guaranteed Progression</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                What gets measured gets managed. We log every single workout session, tracking your weights, progress, and body metrics over time so you always know you are moving forward.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-8 rounded-2xl glass-panel-hover">
              <div className="bg-amber-500/10 p-4 rounded-xl inline-block mb-6 border border-amber-500/20">
                <ShieldCheck className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">High Accountability</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                You are not just a number at The YARD. We check in weekly, monitor consistency, provide nutritional roadmaps, and ensure you build the habits needed for long-term health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Programs Section */}
      <section id="offerings" className="py-24 relative">
        <div className="absolute top-1/3 left-10 w-[200px] h-[200px] rounded-full bg-amber-500/5 blur-[80px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-400 text-sm font-black tracking-widest uppercase font-display">TRAINING PROGRAMS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-5">
              Select Your Path
            </h2>
            <p className="text-zinc-400">
              Whether you flourish in a close-knit group environment or require dedicated 1-on-1 performance mapping, we have the ideal coaching layout for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`glass-panel p-8 md:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                  selectedService === service.id 
                    ? 'border-amber-400/80 shadow-lg shadow-amber-500/5' 
                    : 'border-zinc-800'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                {service.tag && (
                  <span className="absolute -top-3 right-6 bg-amber-400 text-black text-xs font-black uppercase py-1 px-3.5 rounded-full tracking-wider">
                    {service.tag}
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-zinc-800/80 p-3 rounded-xl border border-zinc-700/50">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
                      <span className="text-xs text-amber-500 font-bold tracking-wider">{service.subtitle}</span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span>What is Included:</span>
                  </h4>
                  <ul className="space-y-3.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-800/80 mt-auto">
                  <a
                    href="#booking"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: service.id }))
                    }}
                    className={`w-full text-center py-3.5 px-6 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      selectedService === service.id
                        ? 'bg-amber-400 text-black hover:bg-amber-300'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    <span>Enquire About {service.id === 'small-group' ? 'Small Group' : '1-1 PT'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Facility & Location Section */}
      <section id="about" className="py-20 bg-zinc-900/30 border-y border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 text-sm font-black tracking-widest uppercase font-display">THE FACILITY</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-6">
                A Private Sanctuary for Strength Training in North London
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-6">
                Most commercial gyms are crowded, disorganized, and intimidating. We designed The YARD in Barnet to be the exact opposite. It's a clean, structured, and private coaching space equipped with premium power racks, custom barbells, and structural recovery areas.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                By capping membership numbers and operating strictly on an appointment-only schedule, we guarantee you never have to wait for equipment or train in a crowded room.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-400 shrink-0" />
                  <span className="text-sm font-semibold text-zinc-300">Barnet, North London</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0" />
                  <span className="text-sm font-semibold text-zinc-300">Appointment-Only Access</span>
                </div>
              </div>
            </div>

            {/* Premium Interactive Mock Visual Box */}
            <div className="relative aspect-video lg:aspect-square bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col justify-end p-8 group">
              {/* Fallback pattern / gradient instead of raw image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-zinc-950 to-zinc-950 -z-10" />
              
              {/* Graphic Element */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-105 transition-transform duration-700">
                <Dumbbell className="h-40 w-40 text-amber-400 stroke-1" />
              </div>

              <div className="relative z-20">
                <div className="inline-flex items-center gap-1.5 bg-amber-400 text-black text-xs font-black px-2.5 py-1 rounded-md mb-3 uppercase tracking-wider">
                  The YARD Gym
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Designed for lifting. Crafted for community.</h3>
                <p className="text-sm text-zinc-400">
                  Fully customized racks, specialized coaching tools, and zero wait times. Experience training as it should be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Reviews */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-400 text-sm font-black tracking-widest uppercase font-display">SUCCESS STORIES</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-5">
              Loved By North London Lifters
            </h2>
            <p className="text-zinc-400">
              Read real feedback from local members in Barnet who transformed their strength, habits, and body at The YARD.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">
                  \"I was so hesitant to start lifting weights after an old shoulder injury. The coaches at YARD customized all my exercises in the small group sessions. Now, I'm stronger than I've ever been and completely pain-free!\"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/80">
                <div>
                  <h4 className="text-sm font-bold text-white">Sarah M.</h4>
                  <span className="text-xs text-zinc-500">Barnet Member &bull; 14 Months</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">
                  \"The 6:1 group setting is fantastic. It has the vibe of a community class but you get actual, structured personal training. You track everything, the programming makes sense, and the facility is top-tier.\"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/80">
                <div>
                  <h4 className="text-sm font-bold text-white">David K.</h4>
                  <span className="text-xs text-zinc-500">Southgate Member &bull; 8 Months</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">
                  \"Bespoke 1-1 training at YARD changed everything for me. My coach created a plan that fit around my busy business travel schedule, and held me highly accountable on food. Lost 12kg and built muscle. Highly recommend!\"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/80">
                <div>
                  <h4 className="text-sm font-bold text-white">James T.</h4>
                  <span className="text-xs text-zinc-500">Hadley Wood Member &bull; 2 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form / Booking Section */}
      <section id="booking" className="py-24 bg-zinc-900/20 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Text Information Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-amber-400 text-sm font-black tracking-widest uppercase font-display">GET STARTED</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-6">
                Start Your 30-Day Trial
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Take the first step toward premium strength coaching. Fill out this quick details form, and one of our coaches will call or text you within 24 hours to schedule your initial discovery session at The YARD.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="bg-amber-500/10 p-2 rounded-lg text-amber-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">Initial movement & goals assessment</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="bg-amber-500/10 p-2 rounded-lg text-amber-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">Tour of our private Barnet facility</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="bg-amber-500/10 p-2 rounded-lg text-amber-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">Zero pressure, consultation-led approach</span>
                </div>
              </div>
            </div>

            {/* Interactive Form Box */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 md:p-10 rounded-3xl border-zinc-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none" />

                {formSubmitted ? (
                  <div className="text-center py-16 px-4 animate-fade-in-up">
                    <div className="bg-amber-400 text-black p-4 rounded-full inline-flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">Discovery Call Requested!</h3>
                    <p className="text-zinc-400 text-sm max-w-sm mx-auto mb-8">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. One of our YARD strength coaches will be in touch via phone or text within the next 24 hours.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-amber-400 underline font-bold tracking-wider hover:text-amber-300 uppercase"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-2">Book Your Consultation</h3>
                    <p className="text-xs text-zinc-500">All fields are required. We never share your data.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          Your Full Name
                        </label>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. John Doe"
                          className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          Mobile Number
                        </label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone" 
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 07123 456789"
                          className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          id="email"
                          name="email" 
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          Preferred Training Layout
                        </label>
                        <select 
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-white transition-all outline-none"
                        >
                          <option value="small-group">Small Group PT (Max 6:1)</option>
                          <option value="one-to-one">Bespoke 1-1 Personal Training</option>
                          <option value="unsure">Not Sure / I want to discuss both</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Any current injuries or specific goals? (Optional)
                      </label>
                      <textarea 
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Tell us briefly about what you want to achieve or any considerations we should know..."
                        className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all outline-none resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-amber-400 text-black py-4 rounded-xl text-sm font-black hover:bg-amber-300 transition-all shadow-md hover:shadow-amber-400/10 active:scale-[0.99] uppercase tracking-wider"
                    >
                      Book Free Discovery Session &rarr;
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-black tracking-widest uppercase font-display">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-xl overflow-hidden border border-zinc-800 transition-all"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-zinc-900/50 transition-colors"
                onClick={() => toggleFaq(idx)}
                aria-expanded={activeFaq === idx}
              >
                <span className="font-bold text-sm md:text-base text-white pr-4">{faq.question}</span>
                {activeFaq === idx ? (
                  <ChevronUp className="h-5 w-5 text-amber-400 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0" />
                )}
              </button>
              
              {activeFaq === idx && (
                <div className="px-6 pb-6 pt-2 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/40 animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="bg-amber-400 text-black p-1.5 rounded font-black flex items-center justify-center tracking-tighter">
                  <span className="font-display text-sm font-black">YARD</span>
                </div>
                <span className="font-display font-black text-base tracking-widest text-white uppercase">TRAINING</span>
              </div>
              <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
                Premium coaching structures specialized in strength training, high accountability, and muscle hypertrophy. Training out of Barnet, North London.
              </p>
              <div className="flex items-center gap-3 text-zinc-500 text-xs pt-2">
                <MapPin className="h-4.5 w-4.5 text-amber-400 shrink-0" />
                <span>Barnet, North London, UK</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">Programs</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#offerings" className="text-xs font-semibold text-zinc-500 hover:text-amber-400 transition-colors">Small Group PT</a>
                </li>
                <li>
                  <a href="#offerings" className="text-xs font-semibold text-zinc-500 hover:text-amber-400 transition-colors">1-1 Personal Training</a>
                </li>
                <li>
                  <a href="#booking" className="text-xs font-semibold text-zinc-500 hover:text-amber-400 transition-colors">30-Day Trial</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">Contact & Hours</h4>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>07123 456789</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>info@yardtraining.co.uk</span>
                </li>
                <li className="pt-2 text-[10px] uppercase tracking-wider text-zinc-600">
                  Appointment Only:<br />Mon - Fri: 6am - 8pm<br />Sat: 8am - 1pm
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} YARD Training. All rights reserved.
            </span>
            <div className="flex gap-6 text-xs text-zinc-600">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
