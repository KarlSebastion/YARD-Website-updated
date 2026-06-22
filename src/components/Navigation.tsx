import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import yardLogo from "../assets/yard-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { href: isHome ? "#about" : "/#about", label: "THE YARD" },
    { href: "/semi-private-pt", label: "SGPT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08080a]/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-3">
            <img src={yardLogo} alt="YARD Training" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-sans">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] font-bold text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="px-6 py-2.5 bg-red-600 text-white text-xs font-black tracking-[0.2em] hover:bg-red-700 transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.25)]"
            >
              START NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-red-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/5 animate-fade-in bg-[#08080a] font-sans">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-sm tracking-wider font-semibold text-gray-400 hover:text-red-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-6 py-3 bg-red-600 text-white font-black text-sm tracking-[0.2em] text-center rounded-sm"
            >
              START NOW
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;