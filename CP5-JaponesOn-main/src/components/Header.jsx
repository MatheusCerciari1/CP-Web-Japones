import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

function Header() {
  const [opacity, setOpacity] = useState(100);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpacity(window.scrollY > 50 ? 90 : 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "transition-colors hover:text-[#FFD700] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded";

  return (
    <header
      className="fixed top-0 left-0 w-full backdrop-blur shadow-md z-50 transition-opacity duration-500"
      style={{
        opacity: opacity / 100,
        backgroundColor: "rgba(230, 0, 38, 0.9)", // vermelho japonês com transparência
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[64px] py-0 flex justify-between items-center">
        <a
          href="#hero"
          className="relative flex items-center h-full shrink-0"
          aria-label="Ir para o início"
        >
          <img
            src={Logo}
            alt="GourmetOn Japonês"
            className="h-full w-auto object-contain origin-left scale-[1.8] select-none"
            draggable="false"
          />
          <span className="ml-3 text-white font-bold text-lg tracking-wide">
            Delivery Japonês
          </span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium">
          <a href="#hero" className={linkBase}>Início</a>
          <a href="#cardapio" className={linkBase}>Cardápio</a>
          <a href="#delivery" className={linkBase}>Delivery Japonês</a>
          <a href="#sobre" className={linkBase}>Sobre Nós</a>
          <a href="#contato" className={linkBase}>Contato</a>
        </nav>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen((v) => !v)}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#E60026]/95 backdrop-blur border-t border-[#FFD700]`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-2 text-white font-medium">
          <a href="#hero" onClick={() => setIsOpen(false)} className={linkBase}>
            Início
          </a>
          <a
            href="#cardapio"
            onClick={() => setIsOpen(false)}
            className={linkBase}
          >
            Cardápio
          </a>
          <a
            href="#delivery"
            onClick={() => setIsOpen(false)}
            className={linkBase}
          >
            Delivery Japonês
          </a>
          <a
            href="#sobre"
            onClick={() => setIsOpen(false)}
            className={linkBase}
          >
            Sobre Nós
          </a>
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className={linkBase}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
