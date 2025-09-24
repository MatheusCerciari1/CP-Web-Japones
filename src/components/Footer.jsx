// src/components/Footer.jsx
import SocialImage from "../assets/midias.png";

export default function Footer() {
  return (
    <footer className="bg-[#E60026] text-white py-6 mt-auto border-t-4 border-[#FFD700]">
      <div className="container mx-auto px-4 flex flex-col items-center gap-3">
        
        {/* Nome / Marca */}
        <div className="flex items-center gap-2">
          <h1 className="text-lg md:text-xl font-extrabold tracking-wide text-white">
            🍣 GourmetOn Japonês
          </h1>
        </div>

        {/* Contato */}
        <p className="text-center text-white/85 text-xs md:text-sm max-w-sm leading-snug">
          Peça já seu sushi e pratos típicos.  
          <br />
          Contato: <span className="text-[#FFD700]">gourmeton@gmail.com</span>
        </p>

        {/* Redes Sociais */}
        <div>
          <img
            src={SocialImage}
            alt="Redes sociais"
            className="w-28 md:w-40 object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-[10px] md:text-xs text-white/75 text-center">
          &copy; {new Date().getFullYear()} GourmetOn Delivery Japonês.  
          <br />
          Todos os direitos reservados. Trabalho acadêmico FIAP.
        </p>
      </div>
    </footer>
  );
}
