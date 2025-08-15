export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f12] text-white">
      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-40 flex justify-center">
        <a href="#comprar" className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/30">Garantir por R$ 27,00</a>
      </div>

      {/* Header */}
      <header className="w-full border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5 sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight"><span className="font-[Playfair Display]">Fórmula</span> do Básico ao Barman</div>
          <a href="#comprar" className="hidden md:inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-white font-medium shadow hover:bg-emerald-600 transition">Quero começar</a>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1920&auto=format&fit=crop" alt="Balcão de bar elegante" className="h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#0f0f12]" />
          </div>
          <div className="mx-auto max-w-6xl px-4 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/90 font-semibold mb-4">Oferta completa</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[Playfair Display]">
              Domine os drinks clássicos em casa e surpreenda como um bartender
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Mesmo que ainda não saiba diferenciar uma coqueteleira de um copo medidor. Você só precisa de vontade de aprender — o resto eu te guio.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a id="cta" href="#comprar" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-emerald-600">
                Quero meu acesso
              </a>
              <span className="text-white/70">por apenas <strong className="text-white">R$ 27,00</strong></span>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 opacity-80">
              <img className="rounded-lg object-cover h-24 w-full" src="https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600&auto=format&fit=crop" alt="Coquetel 1" />
              <img className="rounded-lg object-cover h-24 w-full" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop" alt="Coquetel 2" />
              <img className="rounded-lg object-cover h-24 w-full" src="https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=600&auto=format&fit=crop" alt="Coquetel 3" />
              <img className="rounded-lg object-cover h-24 w-full" src="https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=600&auto=format&fit=crop" alt="Coquetel 4" />
            </div>
          </div>
        </section>

        {/* Mecanismo Único */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold font-[Playfair Display] mb-3">Código dos 3 Movimentos</h2>
              <div className="h-px bg-white/10 mb-6" />
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  O Código dos 3 Movimentos é uma técnica simples e visual que revela como qualquer pessoa pode dominar a arte de preparar drinks profissionais em casa — mesmo que nunca tenha tocado numa coqueteleira. Ele se baseia nos três movimentos essenciais que todo barman aprende: o batido, o mexido e o montado.
                </p>
                <p>
                  Ao entender o momento certo de usar cada movimento, o aluno desbloqueia todo o sabor e a apresentação dos coquetéis — como se fosse um código secreto por trás dos drinks clássicos. Você só aprende o que importa. Nada de complicações ou termos técnicos que confundem.
                </p>
                <p>
                  É como descobrir os bastidores do bar e, com isso, ter total controle da experiência — seja pra encantar amigos ou começar a lucrar com isso.
                </p>
              </div>
            </div>
            <div className="relative">
              <img className="rounded-xl shadow-2xl shadow-black/40 object-cover w-full h-80" src="https://images.unsplash.com/photo-1613339027986-b94d97406e59?q=80&w=1200&auto=format&fit=crop" alt="Shaker e copos" />
              <div className="absolute -bottom-6 -left-6 bg-emerald-500/20 backdrop-blur rounded-lg px-4 py-3 text-emerald-200 text-sm shadow-lg">
                Batido • Mexido • Montado
              </div>
            </div>
          </div>
        </section>

        {/* O que é */}
        <section className="py-20 bg-white text-[#0f0f12]">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold font-[Playfair Display] mb-3">O que é</h2>
              <div className="h-px bg-black/10 mb-6" />
              <p className="text-lg text-black/80 max-w-3xl">
                Eu vou te entregar agora um método leve e direto, nada complicado, mas que realmente funciona pra quem sempre quis fazer drinks lindos e profissionais em casa — mesmo sem nunca ter tocado numa coqueteleira, sem gastar com ingredientes difíceis e sem precisar virar um expert em bar.
              </p>
            </div>
            <div>
              <img className="rounded-xl shadow-xl object-cover w-full h-64" src="https://images.unsplash.com/photo-1514362507471-4ae6e97fc221?q=80&w=800&auto=format&fit=crop" alt="Barman preparando" />
            </div>
          </div>
        </section>

        {/* Entregáveis */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold font-[Playfair Display] mb-3">O que você vai receber</h2>
            <div className="h-px bg-white/10 mb-10" />
            <ul className="grid md:grid-cols-3 gap-6">
              <li className="group p-5 rounded-lg border border-white/10 bg-white/5 backdrop-blur shadow-sm hover:shadow-lg transition">
                <img src="https://images.unsplash.com/photo-1565299715199-866c917206bb?q=80&w=800&auto=format&fit=crop" alt="Ferramentas de bar" className="rounded-md h-40 w-full object-cover mb-4" />
                <h3 className="font-semibold">Capítulo 1: O Guia Definitivo das Ferramentas de um Barman</h3>
                <p className="mt-2 text-white/80">Conheça as ferramentas indispensáveis que todo barman profissional utiliza. Saiba como usar uma coqueteleira como um expert e impressione seus convidados. Domine o uso dos medidores para precisão implacável em cada receita.</p>
              </li>
              <li className="group p-5 rounded-lg border border-white/10 bg-white/5 backdrop-blur shadow-sm hover:shadow-lg transition">
                <img src="https://images.unsplash.com/photo-1627662236973-4f3d7260fc06?q=80&w=800&auto=format&fit=crop" alt="Mistura de sabores" className="rounded-md h-40 w-full object-cover mb-4" />
                <h3 className="font-semibold">Capítulo 2: A Arte de Misturar Sabores e Sensações</h3>
                <p className="mt-2 text-white/80">Descubra como equilibrar os sabores essenciais para criar coquetéis inesquecíveis. Aprenda a importância das proporções e técnicas essenciais para misturar bebidas. Transforme ingredientes comuns do dia a dia em componentes de um coquetel profissional.</p>
              </li>
              <li className="group p-5 rounded-lg border border-white/10 bg-white/5 backdrop-blur shadow-sm hover:shadow-lg transition">
                <img src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=800&auto=format&fit=crop" alt="Receitas clássicas" className="rounded-md h-40 w-full object-cover mb-4" />
                <h3 className="font-semibold">Capítulo 3: Receitas Clássicas e Modernas que Você Precisa Saber</h3>
                <p className="mt-2 text-white/80">Domine a arte de preparar 5 coquetéis clássicos que todo entusiasta deve conhecer. Aventure-se em criar versões modernas desses clássicos usando ingredientes inovadores. Amplie seu repertório com segredos para customizar qualquer receita.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Bônus */}
        <section className="py-20 bg-gradient-to-b from-white to-white text-[#0f0f12]">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold font-[Playfair Display] mb-3">Bônus inclusos</h2>
            <div className="h-px bg-black/10 mb-10" />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg border border-black/10 bg-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1604908812858-c84b4a77b279?q=80&w=800&auto=format&fit=crop" alt="Bar em casa" className="rounded-md h-40 w-full object-cover mb-4" />
                <h3 className="font-semibold">Bônus 1: Guia Rápido de Montagem do Bar em Casa (com orçamento inteligente)</h3>
                <p className="mt-2 text-black/70">Um passo a passo prático para montar seu próprio bar com os utensílios e bebidas certos — mesmo com pouco espaço e sem gastar fortunas. Ideal para quem acha que precisa de muito investimento para começar. Inclui lista de equipamentos essenciais, marcas indicadas e alternativas baratas com a mesma performance.</p>
              </div>
              <div className="p-5 rounded-lg border border-black/10 bg-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" alt="Harmonização" className="rounded-md h-40 w-full object-cover mb-4" />
                <h3 className="font-semibold">Bônus 2: A Fórmula Mesa &amp; Copo</h3>
                <p className="mt-2 text-black/70">Torne-se um especialista em harmonizar drinks com comidas, transformando qualquer encontro em uma experiência memorável.</p>
              </div>
              <div className="p-5 rounded-lg border border-black/10 bg-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1484665739383-a1069a82d4be?q=80&w=800&auto=format&fit=crop" alt="Drinks infalíveis" className="rounded-md h-40 w-full object-cover mb-4" />
                <h3 className="font-semibold">Bônus 3: A Fórmula Secreta dos 10 Drinks Infalíveis</h3>
                <p className="mt-2 text-black/70">Um mini-curso prático com os 10 drinks mais pedidos em bares — ensinados passo a passo com variações e substituições para ingredientes caseiros. Você vai criar coquetéis dignos de bar badalado usando o que tem na despensa. Perfeito para quem quer impressionar de imediato, mesmo sem experiência.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="comprar" className="py-20 bg-[#0f0f12] text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[Playfair Display]">Garanta seu acesso por R$ 27,00</h2>
            <p className="mt-3 text-white/80">Domine as técnicas da coquetelaria e prepare drinks profissionais em casa — mesmo que você nunca tenha tocado numa coqueteleira antes.</p>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 text-white font-semibold shadow-lg hover:bg-emerald-600">Comprar agora</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Fórmula do Básico ao Barman</span>
          <a className="hover:text-white" href="#">Termos • Privacidade</a>
        </div>
      </footer>
    </div>
  )
}
