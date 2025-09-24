import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle =
    "transition-colors hover:text-[#FFD700] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shadow ? "bg-[#1C1C1C]/95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[64px] flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-white font-extrabold text-xl"
        >
          <img
            src={Logo}
            alt="GourmetOn"
            className="h-10 w-auto object-contain select-none"
          />
          <span className="tracking-wide">
            Gourmet<span className="text-[#FFD700]">On</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium">
          <a href="#hero" className={linkStyle}>Início</a>
          <a href="#destaques" className={linkStyle}>Pratos</a>
          <a href="#contato" className={linkStyle}>Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(v => !v)}
          className="md:hidden text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#1C1C1C]/95 backdrop-blur border-t border-[#FFD700]/30`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3 text-white font-medium">
          <a href="#hero" onClick={() => setIsOpen(false)} className={linkStyle}>Início</a>
          <a href="#destaques" onClick={() => setIsOpen(false)} className={linkStyle}>Pratos</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className={linkStyle}>Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
