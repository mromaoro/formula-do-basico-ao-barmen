import { useEffect, useState } from 'react'

export default function App() {
  const [headerLight, setHeaderLight] = useState(false)

  useEffect(() => {
    const handle = () => {
      const x = Math.round(window.innerWidth / 2)
      const y = 48 // aprox. metade da altura do header
      const el = document.elementFromPoint(x, y) as HTMLElement | null
      const host = el?.closest('[data-bg]') as HTMLElement | null
      const bg = host?.getAttribute('data-bg')
      setHeaderLight(bg === 'light')
    }
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f12] text-white">
  {/* Sticky mobile CTA removido por solicitação */}

      {/* Header */}
      <header
        className={
          `w-full sticky top-0 z-30 backdrop-blur-md shadow-lg transition-colors duration-300 ` +
          (headerLight
            ? 'bg-white/85 text-neutral-900 border-b border-black/10 supports-[backdrop-filter]:bg-white/70'
            : 'bg-neutral-950/60 text-white border-b border-white/10 supports-[backdrop-filter]:bg-neutral-950/40 shadow-black/10'
          )
        }
      >
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight"><span className="font-[Playfair Display]">Fórmula</span> do Básico ao Barman</div>
          <a href="#comprar" className="hidden md:inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-white font-medium shadow hover:bg-emerald-600 transition">Quero começar</a>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
  <section className="relative overflow-hidden" data-bg="dark">
          <div className="absolute inset-0 -z-10">
            <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1920&auto=format&fit=crop" alt="Balcão de bar elegante" className="h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#0f0f12]" />
          </div>
          <div className="mx-auto max-w-6xl px-4 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/90 font-semibold mb-4">Oferta completa</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[Playfair Display]">
              Domine os drinks clássicos em casa e surpreenda como um bartender
            </h1>
            <p className="mt-5 text-base md:text-xl font-medium leading-relaxed text-white/90 sm:max-w-xl md:max-w-3xl mx-auto">
              Mesmo que ainda não saiba diferenciar uma coqueteleira de um copo medidor
            </p>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Você só precisa de vontade de aprender — o resto eu te guio.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a id="cta" href="#comprar" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-emerald-600">
                Quero meu acesso
              </a>
              <span className="text-white/70">por apenas <strong className="text-white">R$ 27,00</strong></span>
            </div>
            {/* Benefícios rápidos (quebra de objeções) */}
            <div className="mt-8 max-w-3xl mx-auto">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <li className="group flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 animate-[fade-in-up_0.5s_ease-out_0ms_backwards]">
                  <svg className="h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m22 4-10 10-3-3"/>
                  </svg>
                  <span className="text-white/85">Evita erros que estragam o drink</span>
                </li>
                <li className="group flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 animate-[fade-in-up_0.5s_ease-out_80ms_backwards]">
                  <svg className="h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m22 4-10 10-3-3"/>
                  </svg>
                  <span className="text-white/85">Aprenda os clássicos já na primeira aula</span>
                </li>
                <li className="group flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 animate-[fade-in-up_0.5s_ease-out_160ms_backwards]">
                  <svg className="h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m22 4-10 10-3-3"/>
                  </svg>
                  <span className="text-white/85">Surpreenda amigos logo na estreia</span>
                </li>
                <li className="group flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 animate-[fade-in-up_0.5s_ease-out_240ms_backwards]">
                  <svg className="h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m22 4-10 10-3-3"/>
                  </svg>
                  <span className="text-white/85">Ganhe segurança em cada preparo</span>
                </li>
                <li className="group hidden sm:flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 animate-[fade-in-up_0.5s_ease-out_320ms_backwards]">
                  <svg className="h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m22 4-10 10-3-3"/>
                  </svg>
                  <span className="text-white/85">Faz drinks sem depender de bar caro</span>
                </li>
                <li className="group hidden sm:flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 animate-[fade-in-up_0.5s_ease-out_400ms_backwards]">
                  <svg className="h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m22 4-10 10-3-3"/>
                  </svg>
                  <span className="text-white/85">Crie drinks sofisticados sem complicação</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 opacity-80">
              <img className="rounded-lg object-cover h-24 w-full" src="https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600&auto=format&fit=crop" alt="Coquetel 1" />
              <img className="rounded-lg object-cover h-24 w-full" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop" alt="Coquetel 2" />
              <img className="hidden md:block rounded-lg object-cover h-24 w-full" src="https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600&auto=format&fit=crop" alt="Coquetel 3" />
              <img className="hidden md:block rounded-lg object-cover h-24 w-full" src="https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600&auto=format&fit=crop" alt="Coquetel 4" />
            </div>
          </div>
        </section>

        {/* Apresentação do produto */}
        <section className="py-28 bg-gradient-to-b from-white via-emerald-50 to-white text-[#0f0f12] border-y border-emerald-100/40 relative overflow-hidden" data-bg="light">
          {/* Mockup drinks decorativo topo */}
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop" alt="Drink bonito" className="hidden md:block absolute -top-16 -left-24 w-64 h-64 object-cover rounded-full shadow-2xl opacity-30 rotate-[-12deg] pointer-events-none select-none" aria-hidden />
          <div className="mx-auto max-w-5xl px-4 flex flex-col gap-12 items-center relative z-10">
            {/* 1. Imagem sobre o produto + mockup e badge */}
            <div className="w-full flex flex-col md:flex-row items-center gap-10 animate-[fade-in-up_0.6s_ease-out_0ms_backwards]">
              <div className="relative w-full md:w-1/2 flex-shrink-0 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=1200&auto=format&fit=crop"
                  alt="E‑book Fórmula do Básico ao Barman — apresentação do produto"
                  className="rounded-2xl shadow-2xl shadow-black/20 ring-2 ring-emerald-200/60 object-cover w-full h-80 border border-white"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-emerald-500/90 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg border-2 border-white/80">
                  E‑book ilustrado • Passo a passo prático
                </div>
                {/* Mockup overlay de drink (Pexels) */}
                <img src="https://images.pexels.com/photos/110472/pexels-photo-110472.jpeg" alt="Drink mockup" className="absolute -right-10 -bottom-10 w-32 h-32 object-cover rounded-full shadow-xl border-4 border-white/80 bg-white/80" aria-hidden />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start mt-10 md:mt-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest shadow-sm">APRESENTAMOS</span>
                  <span className="hidden md:inline-block w-8 h-1 bg-emerald-300 rounded-full" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold font-[Playfair Display] leading-tight mb-2 text-emerald-900 drop-shadow-sm">Código dos 3 Movimentos</h2>
                <div className="h-px bg-emerald-200/60 my-2 w-full" />
                <p className="text-lg md:text-xl text-black/90 leading-relaxed text-center md:text-left">
                  <span className="inline-block bg-emerald-50 px-1.5 py-0.5 rounded font-semibold text-emerald-700">Você olha um drink bonito no Instagram</span> e pensa: “Aposto que eu nunca conseguiria fazer isso em casa”. Vê receitas super complexas, nomes difíceis e centenas de utensílios que mais confundem do que ajudam — e a vontade de aprender logo vira frustração. Mas a verdade é que não precisa ser complicado. Com uma técnica simples baseada em três movimentos‑chave, você descobre que fazer drinks incríveis pode ser leve, prazeroso e, sim, totalmente possível pra você.
                </p>
              </div>
            </div>

            {/* 3. O diferencial que muda tudo - bloco centralizado e destacado */}
            <div className="w-full flex flex-col items-center my-8">
              <div className="max-w-2xl w-full bg-emerald-100/80 border-2 border-emerald-300 rounded-2xl shadow-lg py-8 px-6 flex flex-col items-center gap-3 animate-[fade-in-up_0.6s_ease-out_120ms_backwards]">
                <h3 className="font-extrabold text-emerald-700 text-2xl flex items-center gap-2 mb-2">
                  <svg className="h-7 w-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m22 4-10 10-3-3"/>
                  </svg>
                  O diferencial que muda tudo
                </h3>
                <p className="text-emerald-900/90 font-medium text-center text-lg">
                  Em vez de seguir tutoriais confusos cheios de termos técnicos e receitas que parecem mais uma fórmula química, aqui você aprende uma técnica visual que descomplica a lógica dos drinks em apenas três movimentos fundamentais. <span className="bg-emerald-200/60 px-1 rounded font-bold">O Código dos 3 Movimentos te dá clareza instantânea</span> sobre quando bater, mexer ou montar — e, com isso, você sente alívio ao perceber que fazer drinks incríveis não exige dom ou equipamento profissional, só o entendimento certo.
                </p>
              </div>
            </div>

            {/* 5. Sobre este produto */}
            <div className="w-full max-w-2xl mx-auto animate-[fade-in-up_0.6s_ease-out_160ms_backwards] bg-white/90 border border-emerald-100 rounded-xl p-6 shadow-md flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-emerald-600 font-bold">Sobre este produto</p>
              <h3 className="text-xl font-bold mt-1 text-emerald-900">Fórmula do Básico ao Barman</h3>
              <p className="mt-2 text-black/80">
                Eu vou te entregar agora um método leve e direto, nada complicado, mas que realmente funciona pra quem sempre quis fazer drinks lindos e profissionais em casa — mesmo sem nunca ter tocado numa coqueteleira, sem gastar com ingredientes difíceis e sem precisar virar um expert em bar.
              </p>
            </div>

            {/* 6. Garantia e 7. CTA - centralizados e destacados */}
            <div className="w-full flex flex-col items-center gap-6 mt-10 animate-[fade-in-up_0.6s_ease-out_240ms_backwards]">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3 bg-emerald-50 border-2 border-emerald-400 rounded-full px-6 py-3 shadow-lg">
                  <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Selo de garantia" className="w-10 h-10 rounded-full bg-white border-2 border-emerald-200 shadow" />
                  <span className="font-bold text-emerald-800 text-lg">Nossa Garantia Para Você</span>
                  <span className="inline-block bg-emerald-200 text-emerald-900 text-xs font-bold px-2 py-0.5 rounded ml-1">7 dias</span>
                </div>
                <p className="text-emerald-900/90 text-center max-w-md text-sm">
                  Garantia incondicional de 7 dias. Se não ficar completamente satisfeito, devolvemos 100% do seu dinheiro — sem perguntas.
                </p>
              </div>
              <a href="#comprar" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-10 py-5 text-white font-extrabold text-xl shadow-2xl shadow-emerald-600/30 hover:scale-105 hover:from-emerald-600 hover:to-emerald-700 transition-transform duration-200 border-4 border-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                QUERO GARANTIR AGORA
              </a>
            </div>

            {/* 8. Imagem 6: Produto final / embalagem do método + drinks decorativos */}
            <div className="mt-20 w-full animate-[fade-in-up_0.6s_ease-out_280ms_backwards] relative flex flex-col items-center">
              <div className="relative group rounded-2xl border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-xl flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
                <img
                  src="https://images.unsplash.com/photo-1520975922203-bb3595b0d69e?q=80&w=1400&auto=format&fit=crop"
                  alt="Embalagem do método — Fórmula do Básico ao Barman"
                  className="w-full md:w-2/3 h-72 md:h-96 object-cover rounded-xl shadow-xl shadow-black/10 transition-transform duration-500 group-hover:scale-[1.01] border-4 border-white"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col gap-3 items-center md:items-start">
                  <div className="absolute top-3 left-3 rounded-md bg-black/60 text-white text-xs px-2 py-1">Produto final</div>
                  <img src="https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg" alt="Drink mockup" className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-white/80 bg-white/80 -mt-8 md:mt-0 md:-ml-8" />
                  <img src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg" alt="Drink mockup" className="w-20 h-20 object-cover rounded-full shadow-md border-4 border-white/80 bg-white/80 -mt-4 md:mt-0 md:-ml-4" />
                </div>
              </div>
            </div>
          </div>
          {/* Mockup drinks decorativo base */}
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop" alt="Drink bonito" className="hidden md:block absolute -bottom-16 -right-24 w-64 h-64 object-cover rounded-full shadow-2xl opacity-30 rotate-[8deg] pointer-events-none select-none" aria-hidden />
        </section>

        {/* História e Autoridade */}
  <section className="py-24 bg-gradient-to-b from-[#0f0f12] via-emerald-950/70 to-[#0f0f12] text-white border-y border-emerald-900/30 relative overflow-hidden" data-bg="dark">
    <div className="mx-auto max-w-6xl px-4 flex flex-col gap-16 items-center relative z-10">
      {/* Linha do tempo visual */}
      <div className="w-full flex flex-col items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-[Playfair Display] mb-8 text-center">Minha Jornada com os Drinks</h2>
        <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Pontos da linha do tempo */}
          <div className="flex flex-col items-center gap-2">
            <img src="https://images.pexels.com/photos/110472/pexels-photo-110472.jpeg" alt="Início" className="w-24 h-24 object-cover rounded-full border-4 border-emerald-700 shadow-lg bg-white/10" />
            <span className="text-xs mt-1 text-emerald-200">Início</span>
          </div>
          <div className="hidden md:block h-1 bg-emerald-700/40 flex-1 mx-2 my-10 rounded-full" />
          <div className="flex flex-col items-center gap-2">
            <img src="https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg" alt="Estudo" className="w-20 h-20 object-cover rounded-full border-4 border-emerald-700 shadow-md bg-white/10" />
            <span className="text-xs mt-1 text-emerald-200">Estudo</span>
          </div>
          <div className="hidden md:block h-1 bg-emerald-700/40 flex-1 mx-2 my-10 rounded-full" />
          <div className="flex flex-col items-center gap-2">
            <img src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg" alt="Prática" className="w-20 h-20 object-cover rounded-full border-4 border-emerald-700 shadow-md bg-white/10" />
            <span className="text-xs mt-1 text-emerald-200">Prática</span>
          </div>
          <div className="hidden md:block h-1 bg-emerald-700/40 flex-1 mx-2 my-10 rounded-full" />
          <div className="flex flex-col items-center gap-2">
            <img src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg" alt="Consultoria" className="w-20 h-20 object-cover rounded-full border-4 border-emerald-700 shadow-md bg-white/10" />
            <span className="text-xs mt-1 text-emerald-200">Consultoria</span>
          </div>
          <div className="hidden md:block h-1 bg-emerald-700/40 flex-1 mx-2 my-10 rounded-full" />
          <div className="flex flex-col items-center gap-2">
            <img src="https://images.pexels.com/photos/1514362507471-4ae6e97fc221.jpeg" alt="Hoje" className="w-24 h-24 object-cover rounded-full border-4 border-emerald-700 shadow-lg bg-white/10" />
            <span className="text-xs mt-1 text-emerald-200">Hoje</span>
          </div>
          {/* Linha do tempo horizontal para mobile */}
          <div className="block md:hidden w-1 h-8 bg-emerald-700/40 mx-auto my-2 rounded-full" />
        </div>
      </div>

      {/* Bloco de autoridade */}
      <div className="w-full max-w-3xl mx-auto bg-white/5 border border-emerald-900/30 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-center animate-[fade-in-up_0.6s_ease-out_80ms_backwards]">
        <div className="flex items-center gap-3 mb-2">
          <img src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg" alt="Adriele Silva" className="w-16 h-16 object-cover rounded-full border-4 border-emerald-700 shadow bg-white/10" />
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">Quem é</span>
            <h3 className="text-2xl font-bold text-white leading-tight">Adriele Silva</h3>
          </div>
        </div>
        <p className="text-lg text-white/90 text-center">
          No início, eu só queria entender como se fazia um bom drink — mas, sem saber nada, cada receita parecia um enigma. Foram <span className="font-bold text-emerald-300">9 anos</span> testando, errando, estudando (inclusive com nomes como Victor Quaranta e Monin) e mergulhando de cabeça em cada oportunidade que surgia, da internet aos balcões da vida real.
        </p>
        <p className="text-lg text-white/90 text-center">
          Hoje, atuando na <span className="font-bold text-emerald-300">Chapada dos Veadeiros</span>, dou consultoria para bares, restaurantes e pousadas, criando cartas autorais, treinando equipes e estruturando operações de bar com eficiência.
        </p>
        <p className="text-lg text-white/90 text-center">
          E foi dessa estrada prática que nasceu o <span className="font-bold text-emerald-300">Código dos 3 Movimentos</span>, um método simples e visual que transforma qualquer curioso em casa num verdadeiro bartender — sem frescura, sem fórmula mágica.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-emerald-900/80 border border-emerald-700 shadow flex flex-col items-center">
          <span className="text-lg md:text-xl font-bold text-emerald-200 mb-1">Minha missão</span>
          <span className="text-xl md:text-2xl font-extrabold text-white text-center">“Drinks incríveis não é dom, é acesso.”</span>
        </div>
        <p className="text-base text-white/70 text-center mt-2">
          Todo mundo merece brindar com o próprio talento.
        </p>
      </div>
    </div>
  </section>

        {/* Explicação do método */}
  <section className="py-24 bg-white text-[#0f0f12] border-y border-emerald-100/40 relative overflow-hidden" data-bg="light">
    <div className="mx-auto max-w-5xl px-4 flex flex-col gap-12 items-center relative z-10">
      {/* Imagem do produto final (IMAGEM 6) */}
      <img src="IMAGEM_6" alt="Produto final - Código dos 3 Movimentos" className="w-full max-w-2xl h-72 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white mb-8" />

      {/* Definição do método */}
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-[Playfair Display] mb-2 text-emerald-900">Como funciona o Método<br/>Código dos 3 Movimentos?</h2>
        <div className="h-px bg-emerald-200/60 my-2 w-24 mx-auto" />
        <p className="text-lg md:text-xl text-black/90 leading-relaxed">
          O Código dos 3 Movimentos é uma técnica simples e visual que revela como qualquer pessoa pode dominar a arte de preparar drinks profissionais em casa — mesmo que nunca tenha tocado numa coqueteleira. Ele se baseia nos três movimentos essenciais que todo barman aprende: o batido, o mexido e o montado. Ao entender o momento certo de usar cada movimento, o aluno desbloqueia todo o sabor e a apresentação dos coquetéis — como se fosse um código secreto por trás dos drinks clássicos. Você só aprende o que importa. Nada de complicações ou termos técnicos que confundem. É como descobrir os bastidores do bar e, com isso, ter total controle da experiência — seja pra encantar amigos ou começar a lucrar com isso.
        </p>
        {/* Lista dos 3 movimentos */}
        <ul className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
          <li className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 font-semibold text-emerald-800 shadow-sm">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
            Batido
          </li>
          <li className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 font-semibold text-emerald-800 shadow-sm">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v8" /></svg>
            Mexido
          </li>
          <li className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 font-semibold text-emerald-800 shadow-sm">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 16l8-8" /></svg>
            Montado
          </li>
        </ul>
      </div>

      {/* Benefícios do método */}
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center mt-6">
        <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow text-center">
          <span className="text-emerald-700 font-bold text-lg">Controle total da experiência</span>
        </div>
        <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow text-center">
          <span className="text-emerald-700 font-bold text-lg">Estética e sabor de bar profissional</span>
        </div>
        <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow text-center">
          <span className="text-emerald-700 font-bold text-lg">Simplicidade: só o que importa</span>
        </div>
      </div>

      {/* Passos ilustrados */}
      <div className="w-full max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">Os 3 Movimentos na Prática</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-md">
            <img src="IMAGEM_8" alt="Passo 1 - Batido" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow" />
            <span className="font-bold text-emerald-800 text-lg mt-2">1. Batido</span>
            <span className="text-emerald-700 text-center text-base">Quando usar o shaker para criar textura e frescor.</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-md">
            <img src="IMAGEM_9" alt="Passo 2 - Mexido" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow" />
            <span className="font-bold text-emerald-800 text-lg mt-2">2. Mexido</span>
            <span className="text-emerald-700 text-center text-base">Para drinks delicados, que pedem suavidade e brilho.</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-md">
            <img src="IMAGEM_10" alt="Passo 3 - Montado" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow" />
            <span className="font-bold text-emerald-800 text-lg mt-2">3. Montado</span>
            <span className="text-emerald-700 text-center text-base">Montagem direta no copo, para drinks rápidos e refrescantes.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

        {/* Bônus Exclusivo */}
  <section className="py-20" data-bg="dark">
    <div className="mx-auto max-w-2xl px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold font-[Playfair Display] mb-6 text-center">Bônus Exclusivos</h2>
      {/* Card de oferta */}
      <div className="w-full bg-white rounded-2xl shadow-2xl border border-emerald-100/60 p-6 md:p-8 flex flex-col gap-4 mb-6">
        <ul className="text-base md:text-lg font-medium text-[#0f0f12] mb-2">
          <li className="flex items-center justify-between py-1 border-b border-emerald-100/60 last:border-b-0">
            <span>✓ Fórmula do básico ao Barman</span>
            <span className="line-through text-red-400 font-bold">R$ 37,00</span>
          </li>
          <li className="flex items-center justify-between py-1 border-b border-emerald-100/60 last:border-b-0">
            <span>✓ Bônus 1: Guia Rápido de Montagem do Bar em Casa</span>
            <span className="line-through text-red-400 font-bold">R$ 17,00</span>
          </li>
          <li className="flex items-center justify-between py-1 border-b border-emerald-100/60 last:border-b-0">
            <span>✓ Bônus 2: A Fórmula Mesa &amp; Copo</span>
            <span className="line-through text-red-400 font-bold">R$ 17,00</span>
          </li>
          <li className="flex items-center justify-between py-1 border-b border-emerald-100/60 last:border-b-0">
            <span>✓ Bônus 3: A Fórmula Secreta dos 10 Drinks Infalíveis</span>
            <span className="line-through text-red-400 font-bold">R$ 17,00</span>
          </li>
          <li className="flex items-center justify-between py-2 font-bold text-lg">
            <span>Valor Total:</span>
            <span className="line-through text-red-500">R$ 78,00</span>
          </li>
        </ul>
        <div className="w-full bg-white border-2 border-emerald-400 rounded-xl p-4 flex flex-col items-center gap-1 mb-2">
          <span className="text-3xl md:text-4xl font-extrabold text-[#0f0f12]">R$ 37,00</span>
          <span className="text-emerald-600 font-bold">Mais de R$ 41,00 de desconto!</span>
          <span className="text-[#0f0f12] text-sm">ou 12x de R$ 3,08</span>
        </div>
        <div className="w-full flex items-center justify-center mb-2">
          <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 font-bold px-4 py-2 rounded-full text-sm border border-yellow-300 animate-pulse">
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
            Últimas 47 vagas disponíveis!
          </span>
        </div>
        <button className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg transition">GARANTIR MEU DESCONTO</button>
      </div>

      {/* Descrição dos bônus */}
      <div className="w-full flex flex-col gap-6 mb-6">
        <div className="bg-white/10 border border-emerald-100/40 rounded-xl p-5 shadow flex flex-col gap-2">
          <h3 className="font-bold text-emerald-200 text-lg mb-1">Bônus 1: Guia Rápido de Montagem do Bar em Casa <span className="text-xs text-white/70 font-normal">(com orçamento inteligente)</span></h3>
          <p className="text-white/90 text-base">Um passo a passo prático para montar seu próprio bar com os utensílios e bebidas certos — mesmo com pouco espaço e sem gastar fortunas. Ideal para quem acha que precisa de muito investimento para começar. Inclui lista de equipamentos essenciais, marcas indicadas e alternativas baratas com a mesma performance.</p>
        </div>
        <div className="bg-white/10 border border-emerald-100/40 rounded-xl p-5 shadow flex flex-col gap-2">
          <h3 className="font-bold text-emerald-200 text-lg mb-1">Bônus 2: A Fórmula Mesa &amp; Copo</h3>
          <p className="text-white/90 text-base">Torne-se um especialista em harmonizar drinks com comidas, transformando qualquer encontro em uma experiência memorável.</p>
        </div>
        <div className="bg-white/10 border border-emerald-100/40 rounded-xl p-5 shadow flex flex-col gap-2">
          <h3 className="font-bold text-emerald-200 text-lg mb-1">Bônus 3: A Fórmula Secreta dos 10 Drinks Infalíveis</h3>
          <p className="text-white/90 text-base">Um mini-curso prático com os 10 drinks mais pedidos em bares — ensinados passo a passo com variações e substituições para ingredientes caseiros. Você vai criar coquetéis dignos de bar badalado usando o que tem na despensa. Perfeito para quem quer impressionar de imediato, mesmo sem experiência.</p>
        </div>
      </div>

      {/* Texto de escassez e urgência */}
      <div className="w-full text-center text-white/80 text-base mt-2">
        <p className="mb-2">Esta é uma condição especial que eu estou abrindo apenas para as primeiras 100 pessoas que clicarem nesse botão.</p>
        <p>Quando essas vagas esgotarem, o valor da inscrição voltará para um valor muito mais alto e você ainda perde o acesso a <span className="font-bold text-white">TODOS os bônus</span> que eu te mostrei aqui. Ou seja, você pagará mais caro, recebendo muito menos que poderia.<br/>Eu só decidi liberar por esse preço porque eu sei que ele é exatamente para pessoas como você que querem começar arriscando pouco e que sabem aproveitar uma boa oportunidade.</p>
      </div>
    </div>
  </section>

        {/* Comparativo – Agir ou Não Agir */}
  <section className="py-20 bg-gradient-to-b from-white to-white text-[#0f0f12]" data-bg="light">
    <div className="mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold font-[Playfair Display] mb-3 text-center">Sua Escolha Hoje Define Seu Futuro</h2>
      <div className="h-px bg-black/10 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna AGIR */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 shadow flex flex-col gap-4">
          <h3 className="text-xl font-bold text-emerald-800 mb-2 flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
            Se Você <span className="text-emerald-600">AGIR</span> Hoje
          </h3>
          <ul className="flex flex-col gap-3 text-emerald-900 text-base font-medium">
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>Aprender a fazer drinks incríveis com aparência profissional usando apenas 3 movimentos simples</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>Ter segurança ao preparar qualquer drink, sem depender de receitas complexas ou tutoriais confusos</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>Impressionar amigos e convidados com drinks bonitos, bem montados e saborosos</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>Economizar dinheiro preparando em casa drinks que você pagaria caro no bar</li>
          </ul>
        </div>
        {/* Coluna NÃO AGIR */}
        <div className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-8 shadow flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-700 mb-2 flex items-center gap-2">
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 16l8-8" /></svg>
            Se Você <span className="text-red-500">NÃO Agir</span>
          </h3>
          <ul className="flex flex-col gap-3 text-gray-700 text-base font-medium">
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-red-400 rounded-full"></span>Continuar se sentindo inseguro e perdido na hora de preparar um simples drink em casa</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-red-400 rounded-full"></span>Gastar tempo vendo vídeos complicados e ainda assim terminar com um drink sem graça</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-red-400 rounded-full"></span>Passar vergonha ao tentar fazer drinks e ver que nada sai como o esperado</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-red-400 rounded-full"></span>Continuar pagando caro em bares pra tomar algo que poderia fazer em casa por uma fração do preço</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center">
        <span className="inline-block bg-emerald-600 text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg">A decisão é sua. O futuro também.</span>
      </div>
    </div>
  </section>

        {/* Garantia */}
  <section id="comprar" className="py-24 bg-gradient-to-b from-[#0f0f12] via-emerald-950/80 to-[#0f0f12] text-white border-t border-emerald-900/30" data-bg="dark">
    <div className="mx-auto max-w-3xl px-4 flex flex-col items-center text-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 bg-emerald-50 border-2 border-emerald-400 rounded-full px-6 py-3 shadow-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Selo de garantia" className="w-10 h-10 rounded-full bg-white border-2 border-emerald-200 shadow" />
          <span className="font-bold text-emerald-800 text-lg">Garantia Incondicional</span>
          <span className="inline-block bg-emerald-200 text-emerald-900 text-xs font-bold px-2 py-0.5 rounded ml-1">7 dias</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-[Playfair Display] mt-4 mb-2">Risco Zero Para Você</h2>
      </div>
      <div className="bg-white/5 border border-emerald-900/30 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-center animate-[fade-in-up_0.6s_ease-out_80ms_backwards]">
        <p className="text-lg text-white/90 text-center">
          Depois de todos os depoimentos, provas e argumentos que trouxe aqui, só existe mais uma coisa que posso fazer para você confiar em mim.<br className="hidden md:block" />
          <span className="font-bold text-emerald-300">Se você aplicar o Fórmula do Básico ao Barman e seguir o passo a passo como é orientado e, mesmo assim, não conseguir resultados em até 7 dias, eu devolvo 100% do valor investido na aquisição.</span>
        </p>
        <p className="text-white/80 text-base text-center">
          É isso mesmo: você pode testar tudo sem medo, porque assumo esse compromisso com você. Confio tanto na facilidade e qualidade do meu método, que não tenho dúvidas que você terá resultados, como já acontece com diversas pessoas que também adquiriram este método.
        </p>
      </div>
      <a href="#comprar" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-10 py-5 text-white font-extrabold text-xl shadow-2xl shadow-emerald-600/30 hover:scale-105 hover:from-emerald-600 hover:to-emerald-700 transition-transform duration-200 border-4 border-white mt-4">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
        SIM, QUERO COMEÇAR COM GARANTIA
      </a>
    </div>
  </section>

        {/* FAQ */}
          <section className="py-20 bg-white text-[#0f0f12]" data-bg="light">
            <div className="mx-auto max-w-2xl px-4">
              <h2 className="text-3xl font-bold font-[Playfair Display] mb-10 text-center">Perguntas Frequentes</h2>
              <div className="flex flex-col gap-4">
                {/* 1 */}
                <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
                  <p className="font-semibold mb-1">Sou iniciante, funciona para mim?</p>
                  <p>Sim! O Fórmula do Básico ao Barman foi criado para quem não sabe nada sobre coquetelaria e quer começar do zero a fazer drinks incríveis.</p>
                </div>
                {/* 2 */}
                <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
                  <p className="font-semibold mb-1">Preciso de conhecimento técnico?</p>
                  <p>Não. O método é simples, visual e prático, sem termos complicados ou técnicas avançadas. Qualquer pessoa pode acompanhar.</p>
                </div>
                {/* 3 */}
                <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
                  <p className="font-semibold mb-1">Funciona para qualquer idade?</p>
                  <p>Sim! O conteúdo é acessível para todas as idades adultas. Basta ter interesse em aprender e preparar drinks em casa.</p>
                </div>
                {/* 4 */}
                <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
                  <p className="font-semibold mb-1">E se eu não conseguir implementar?</p>
                  <p>Você conta com garantia incondicional de 7 dias: se não conseguir aplicar o método, devolvemos 100% do valor investido. É risco zero para você.</p>
                </div>
                {/* 5 */}
                <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
                  <p className="font-semibold mb-1">É seguro comprar?</p>
                  <p>Sim! A compra é feita em ambiente seguro, com proteção de dados e garantia total. Você pode testar sem medo.</p>
                </div>
              </div>
            </div>
          </section>

      </main>

      {/* Footer */}
            <footer className="w-full border-t border-white/10 bg-[#f9fafb] text-[#0f0f12]">
              <div className="mx-auto max-w-4xl px-4 py-8 flex flex-col gap-4 items-center text-center text-sm">
                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                  <span className="font-semibold">Fórmula do básico ao Barman © 2025. Todos os direitos reservados.</span>
                  <span className="hidden md:inline-block">|</span>
                  <a href="#" className="hover:underline text-emerald-700">Política de Privacidade</a>
                  <span className="hidden md:inline-block">•</span>
                  <a href="#" className="hover:underline text-emerald-700">Termos de Uso</a>
                </div>
                <p className="mt-2 text-xs text-[#555] max-w-2xl">
                  <strong>Aviso Legal:</strong> Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é e não deve ser interpretada como uma recomendação ou garantia de resultado específico.
                </p>
              </div>
            </footer>
    </div>
  )
}
