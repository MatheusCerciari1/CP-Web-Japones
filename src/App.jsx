import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroImg from "./assets/hero.jpg";
import Swal from "sweetalert2";

export default function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const r = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese");
        const j = await r.json();
        const all = (j?.meals || []).slice(0, 12);
        setCards(
          all.map(m => ({
            id: m.idMeal,
            title: m.strMeal,
            thumb: m.strMealThumb,
          }))
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <div className="scroll-smooth antialiased text-[#1C1C1C] bg-gradient-to-b from-white via-[#FFFDF5] to-[#FFD700]/10 font-serif">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative mx-4 sm:mx-10 mt-[64px] mb-10 overflow-hidden rounded-xl shadow-xl min-h-[420px] md:min-h-[520px] border border-[#FFD700]/40"
      >
        <img
          src={HeroImg}
          alt="Delivery japonês"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-12 text-center bg-black/40">
          <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
            Gourmet<span className="text-[#FFD700]">On</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/90 text-lg">
            Tradição japonesa direto na sua casa.  
            Escolha, peça e aproveite.
          </p>
          <a
            href="#destaques"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E60026] px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-[#FFD700] hover:text-[#1C1C1C] transition"
          >
            Peça agora ↓
          </a>
        </div>
      </section>

      {/* Destaques */}
      <section id="destaques" className="mx-4 sm:mx-10 my-10 scroll-mt-[64px]">
        <h2 className="text-center text-3xl font-bold text-[#1C1C1C] mb-6">
          Pratos japoneses em destaque
        </h2>
        {loading ? (
          <p className="text-center text-[#525252]">Carregando pratos...</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article
                key={c.id}
                className="overflow-hidden rounded-lg bg-white shadow-lg border border-[#FFD700]/30 hover:scale-[1.02] transition"
              >
                <div className="relative">
                  <img src={c.thumb} alt={c.title} className="h-52 w-full object-cover" />
                  <span className="absolute top-3 right-3 rounded-full bg-[#E60026] px-3 py-1 text-xs font-semibold text-white shadow-md">
                    Japão
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="line-clamp-1 text-lg font-bold text-[#1C1C1C]">
                    {c.title}
                  </h4>
                  <p className="mt-1 text-sm text-[#525252]">
                    Um clássico da culinária japonesa.
                  </p>
                  <button className="mt-4 inline-flex items-center rounded-full bg-[#1C1C1C] px-5 py-2 text-sm font-semibold text-white hover:bg-[#FFD700] hover:text-[#1C1C1C] transition">
                    Pedir agora
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section id="contato" className="mx-4 sm:mx-10 my-14 scroll-mt-[64px]">
        <div className="mx-auto max-w-4xl rounded-2xl shadow-xl border border-[#FFD700]/40 overflow-hidden">
          <div className="bg-gradient-to-r from-[#1C1C1C] via-black to-[#1C1C1C] p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Receba novidades e promoções
            </h3>
            <p className="mt-3 text-[#FFD700]/90">
              Cadastre seu e-mail e receba ofertas exclusivas.
            </p>
            <form
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
              onSubmit={(e) => {
                e.preventDefault();
                Swal.fire({
                  icon: "success",
                  title: "Obrigado!",
                  text: "Você receberá novidades em breve.",
                  confirmButtonColor: "#E60026",
                });
                e.currentTarget.reset();
              }}
            >
              <input
                type="email"
                required
                placeholder="seuemail@exemplo.com"
                className="w-full sm:w-2/3 rounded-full border border-[#FFD700]/40 bg-white px-5 py-3 text-[#1C1C1C] outline-none focus:border-[#E60026]"
              />
              <button className="rounded-full bg-[#E60026] px-6 py-3 font-semibold text-white hover:bg-[#FFD700] hover:text-[#1C1C1C] transition">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
