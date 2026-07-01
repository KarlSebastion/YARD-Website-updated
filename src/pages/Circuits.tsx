import { useState } from 'react'

export default function Circuits() {
    const [selectedDay, setSelectedDay] = useState<string | null>(null)

    const schedule = [
        { day: 'Monday', time: '11:30–13:30', type: 'Lunchtime' },
        { day: 'Tuesday', times: ['6:30–8:30 AM', '11:30–13:30', '18:00–20:00'], type: 'Morning / Lunch / Evening' },
        { day: 'Wednesday', time: '11:30–13:30', type: 'Lunchtime' },
        { day: 'Thursday', times: ['6:30–8:30 AM', '11:30–13:30', '18:00–20:00'], type: 'Morning / Lunch / Evening' },
        { day: 'Friday', time: '11:30–13:30', type: 'Lunchtime' },
    ]

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Nav */}
            <nav className="sticky top-0 z-50 bg-black border-b border-red-600">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img src="/YARD-Logo.png" alt="YARD" className="h-8 w-auto" />
                    </a>
                    <div className="flex items-center gap-6">
                        <p className="text-red-600 font-black">£8 per class</p>
                        <a href="#contact" className="text-red-600 hover:text-red-500 font-bold transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/Bootcamp-BG-1.png)', backgroundSize: 'cover' }} />
                <div className="relative max-w-3xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-black mb-6">
                        YARD<br />
                        <span className="text-red-600">CIRCUITS</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8">
                        Drop-in bootcamp fitness. HIIT. Combat. Football S&C. All levels. All ages.
                    </p>
                    <p className="text-4xl font-black text-red-600">£8 per class</p>
                </div>
            </section>

            {/* What is Circuits */}
            <section className="py-20 px-6 border-t border-red-600">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black mb-12">What is<br /><span className="text-red-600">YARD Circuits?</span></h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-red-600 text-3xl font-black mb-3">HIIT</p>
                            <p className="text-gray-400">High-intensity intervals. Push hard, recover, repeat. Maximum output in minimum time.</p>
                        </div>
                        <div>
                            <p className="text-red-600 text-3xl font-black mb-3">COMBAT</p>
                            <p className="text-gray-400">Boxing, kickboxing, heavy bags. Powerful. Cathartic. Full-body engagement.</p>
                        </div>
                        <div>
                            <p className="text-red-600 text-3xl font-black mb-3">S&C</p>
                            <p className="text-gray-400">Strength and conditioning for football. Athletic power, speed, agility, endurance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule */}
            <section className="py-20 px-6 bg-gray-950 border-t border-red-600">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black mb-12">Schedule</h2>
                    <div className="space-y-3">
                        {schedule.map((slot, i) => (
                            <div key={i} className="border border-red-600 p-6 hover:bg-gray-900 transition-colors cursor-pointer" onClick={() => setSelectedDay(slot.day)}>
                                <div className="flex justify-between items-center">
                                    <p className="font-black text-lg">{slot.day}</p>
                                    <p className="text-red-600 font-bold">{slot.time || slot.times?.join(' / ')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm mt-8">
                        Drop-in anytime. No membership. No commitment. Book via WhatsApp or email.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-6 border-t border-red-600">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-black mb-6">Book Your<br /><span className="text-red-600">First Class</span></h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Ready to join? Drop us a message and we'll get you sorted.
                    </p>
                    <div className="space-y-4">
                        <a href="https://wa.me/447595228722" className="block border-2 border-red-600 hover:bg-red-600 hover:text-black text-red-600 px-8 py-4 font-black text-lg transition-all">
                            💬 WhatsApp: 07595 228722
                        </a>
                        <a href="mailto:info@yardtraining.co.uk" className="block border-2 border-red-600 hover:bg-red-600 hover:text-black text-red-600 px-8 py-4 font-black text-lg transition-all">
                            📧 Email: info@yardtraining.co.uk
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-gray-950 border-t border-red-600 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} YARD Training. Barnet, North London.</p>
            </footer>
        </div>
    )
}