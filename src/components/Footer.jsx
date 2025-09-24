import SocialImage from "../assets/midias.png";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-8 mt-auto border-t-4 border-[#B22222]">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        
        {/* Marca */}
        <h1 className="text-xl font-extrabold tracking-wide">
          🍣 Gourmet<span className="text-[#B22222]">On</span>
        </h1>

        {/* Contato */}
        <p className="text-center text-white/80 text-sm max-w-sm leading-snug">
          Tradição japonesa na sua casa.  
          Contato: <span className="text-[#C9A635]">gourmeton@gmail.com</span>
        </p>

        {/* Redes sociais */}
        <div>
          <img
            src={SocialImage}
            alt="Redes sociais"
            className="w-28 md:w-40 object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/60 text-center">
          &copy; {new Date().getFullYear()} GourmetOn Japonês — Todos os direitos reservados.  
          <br /> Trabalho acadêmico FIAP.
        </p>
      </div>
    </footer>
  );
}
