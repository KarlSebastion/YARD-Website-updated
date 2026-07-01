export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-black border-b border-red-600">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/YARD-Logo.png" alt="YARD" className="h-8 w-auto" />
          </div>
          <a href="/circuits" className="text-red-600 hover:text-red-500 font-bold transition-colors">
            Book Circuits
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/Bootcamp-BG-1.png)', backgroundSize: 'cover' }} />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-red-600 text-sm tracking-widest uppercase mb-4">BARNET'S RAW TRAINING EXPERIENCE</p>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            TRANSFORM<br />IN<br />
            <span className="text-red-600">THE YARD</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            A converted double-garage. Open to the elements. No distractions. Just results.
          </p>
          <a href="/circuits" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-black tracking-wider transition-all">
            START YOUR CIRCUITS
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 border-t border-red-600">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-red-600 text-xs tracking-widest uppercase mb-4">About</p>
            <h2 className="text-4xl font-black mb-6">This Is<br /><span className="text-red-600">The YARD</span></h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Forget the chrome machines and mirror walls. Training here strips away the noise. No queues. No distractions. No excuses. Just you, the weights, and the work.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When it rains, you feel it. When it's cold, you push harder. This isn't about comfort. It's about transformation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-red-600 p-6 text-center">
              <p className="text-red-600 text-3xl font-black mb-2">RAW</p>
              <p className="text-gray-400 text-sm">Environment</p>
            </div>
            <div className="border border-red-600 p-6 text-center">
              <p className="text-red-600 text-3xl font-black mb-2">REAL</p>
              <p className="text-gray-400 text-sm">Results</p>
            </div>
            <div className="border border-red-600 p-6 text-center">
              <p className="text-red-600 text-3xl font-black mb-2">1:1</p>
              <p className="text-gray-400 text-sm">Attention</p>
            </div>
            <div className="border border-red-600 p-6 text-center">
              <p className="text-red-600 text-3xl font-black mb-2">100%</p>
              <p className="text-gray-400 text-sm">Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-red-600 text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-6">Ready?</h2>
          <p className="text-lg mb-8 font-semibold">
            YARD Circuits starts July 7th. £8 per class. No membership. No excuses.
          </p>
          <a href="/circuits" className="inline-block bg-black hover:bg-gray-900 text-red-600 px-8 py-4 font-black tracking-wider transition-all">
            Book Your First Class
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-red-600 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} YARD Training. Barnet, North London.</p>
      </footer>
    </div>
  )
}