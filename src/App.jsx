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
        // Filtrar apenas pratos japoneses
        const r = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese");
        const j = await r.json();
        const all = (j?.meals || []).slice(0, 12);
        const shuffled = [...all].sort(() => Math.random() - 0.5).slice(0, 6);
        setCards(
          shuffled.map((m) => ({
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
    <div className="scroll-smooth antialiased text-[#1C1C1C] bg-gradient-to-b from-white via-[#FFF8DC] to-[#FFD700]/30">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative mx-2 sm:mx-6 mt-[64px] mb-4 sm:mb-8 overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,.12)] min-h-[420px] md:min-h-[520px] ring-2 ring-[#FFD700] scroll-mt-[64px]"
      >
        <img
          src={HeroImg}
          alt="Delivery Japonês"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-12 text-center bg-black/40">
          <p className="text-xs tracking-widest uppercase text-[#FFD700]">
            Tradição & Sabor
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,.55)]">
            O Delivery <span className="text-[#FFD700]">Japonês GourmetOn</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Sushi, temaki, yakisoba e muito mais direto da cozinha japonesa para a sua mesa.
          </p>
          <a
            href="#cardapio"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E60026] px-6 py-3 font-semibold text-white ring-2 ring-[#FFD700]/60 transition hover:bg-[#b5001c]"
          >
            Ver Cardápio <span aria-hidden>🍣</span>
          </a>
        </div>
      </section>

      {/* Apresentação */}
      <section id="apresentacao" className="mx-2 sm:mx-6 my-6 sm:my-10 scroll-mt-[64px]">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white/95 p-6 sm:p-10 shadow-lg ring-2 ring-[#FFD700] backdrop-blur">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1C1C]">
            Por que escolher o GourmetOn Japonês?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[#525252]">
            Ingredientes frescos, pratos tradicionais e entrega rápida para você
            sentir o verdadeiro sabor do Japão sem sair de casa.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Autenticidade", "Receitas tradicionais japonesas preparadas com carinho."],
              ["Entrega rápida", "Seu pedido chega quentinho e no tempo certo."],
              ["Promoções", "Ofertas especiais de combinados e pratos selecionados."],
              ["Favoritos", "Monte seu combo de sushi preferido."],
              ["Pedidos online", "Faça seu pedido fácil pelo app."],
              ["Avaliações reais", "Clientes satisfeitos compartilham suas experiências."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="group rounded-xl border border-[#FFD700] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#1C1C1C]">{t}</h3>
                  <span className="rounded-full bg-[#FFD700] px-2 py-1 text-[10px] font-bold text-[#1C1C1C]">
                    JAPAN
                  </span>
                </div>
                <p className="mt-2 text-[#525252]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cardápio */}
      <section id="cardapio" className="mx-2 sm:mx-6 my-6 sm:my-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-end justify-between">
            <h3 className="text-2xl font-extrabold tracking-tight text-[#1C1C1C]">
              Pratos Japoneses em Destaque
            </h3>
            <span className="text-sm text-[#525252]">
              {loading ? "carregando..." : `${cards.length} pratos`}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article
                key={c.id}
                className="overflow-hidden rounded-2xl bg-white shadow-lg ring-2 ring-[#FFD700] transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={c.thumb}
                    alt={c.title}
                    className="h-52 w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#E60026]/90 px-3 py-1 text-xs font-semibold text-white ring-1 ring-[#FFD700]">
                    Japonês
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="line-clamp-1 text-lg font-semibold text-[#1C1C1C]">
                    {c.title}
                  </h4>
                  <p className="mt-1 text-sm text-[#525252]">
                    Perfeito para saborear hoje. Clique e peça agora.
                  </p>
                  <button className="mt-4 inline-flex items-center rounded-full bg-[#E60026] px-4 py-2 text-sm font-semibold text-white ring-2 ring-[#FFD700]/60 transition hover:bg-[#b5001c]">
                    Pedir agora 🍱
                  </button>
                </div>
              </article>
            ))}
            {!loading && cards.length === 0 && (
              <div className="rounded-2xl bg-white p-8 text-center text-[#525252] ring-2 ring-[#FFD700]">
                Não conseguimos carregar os pratos agora. Tente novamente em instantes.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="mx-2 sm:mx-6 my-6 sm:my-10 scroll-mt-[64px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Camila R.", "“O sushi chegou fresco e delicioso. Experiência incrível!”"],
            ["João P.", "“Nunca pensei que teria ramen tão bom em casa, rápido e prático.”"],
            ["Marina L.", "“O yakisoba estava perfeito, virei cliente fiel.”"],
          ].map(([nome, depo]) => (
            <div
              key={nome}
              className="rounded-2xl bg-white p-6 shadow-md ring-2 ring-[#FFD700]"
            >
              <p className="text-[#1C1C1C]">{depo}</p>
              <div className="mt-4 h-px w-full bg-[#FFD700]" />
              <div className="mt-3 text-sm font-semibold text-[#525252]">{nome}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="mx-2 sm:mx-6 my-8 sm:my-14 scroll-mt-[64px]"
      >
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl p-1 shadow-lg ring-2 ring-[#FFD700]"
          style={{
            background:
              "linear-gradient(90deg, #FFD700, #ffffff, #FFD700)",
          }}
        >
          <div className="grid grid-cols-1 gap-0 bg-white/90 p-8 sm:p-12 md:grid-cols-2 backdrop-blur rounded-[calc(theme(borderRadius.3xl)-1px)]">
            <div className="pr-0 md:pr-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1C1C]">
                Receba novidades e promoções
              </h3>
              <p className="mt-2 text-[#525252]">
                Cadastre seu e-mail e receba ofertas exclusivas do GourmetOn
                Japonês.
              </p>
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  Swal.fire({
                    icon: "success",
                    title: "Arigatou! 🍣",
                    text: "Você receberá novidades e promoções em breve.",
                    confirmButtonColor: "#E60026",
                  });
                  e.currentTarget.reset();
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  className="w-full flex-1 rounded-full border border-[#FFD700] bg-white px-5 py-3 text-[#1C1C1C] outline-none focus:border-[#E60026]"
                />
                <button className="rounded-full bg-[#E60026] px-6 py-3 font-semibold text-white ring-2 ring-[#FFD700]/60 transition hover:bg-[#b5001c]">
                  Quero receber
                </button>
              </form>
              <p className="mt-2 text-xs text-[#525252]">
                Sem spam. Cancelar quando quiser.
              </p>
            </div>

            <div className="mt-8 md:mt-0">
              <ul className="grid grid-cols-2 gap-4 text-sm text-[#1C1C1C]">
                {[
                  ["Tempo médio de entrega", "20–40 min"],
                  ["Pratos japoneses servidos", "+5.000"],
                  ["Avaliação média", "4.9★"],
                  ["Clientes satisfeitos", "98%"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="rounded-2xl border border-[#FFD700] bg-white p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-extrabold tracking-tight text-[#1C1C1C]">
                      {v}
                    </div>
                    <div className="mt-1 uppercase tracking-widest text-[#525252]">
                      {k}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
