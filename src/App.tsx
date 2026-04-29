import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
    <div className="text-2xl font-extrabold tracking-tighter text-[#22D3EE] font-space">AEGIS OS</div>
    <div className="hidden md:flex space-x-8 text-sm font-medium text-[#94A3B8]">
      <a href="#layers" className="hover:text-[#22D3EE] transition-colors">Camadas</a>
      <a href="#modules" className="hover:text-[#22D3EE] transition-colors">Módulos</a>
      <a href="#audit" className="hover:text-[#22D3EE] transition-colors">M2: Auditoria</a>
    </div>
    <button className="bg-[#22D3EE] text-[#0F172A] px-5 py-2 rounded-md font-bold text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
      Começar Auditoria
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
    <div className="absolute inset-0 z-0 bg-[#0F172A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent)]" />
    </div>
    <div className="relative z-10 max-w-4xl text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        Desenvolva na velocidade da IA. <br/>
        <span className="text-[#22D3EE]">Entregue com a confiança da engenharia.</span>
      </h1>
      <p className="text-lg md:text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
        O framework definitivo para orquestrar, auditar e evoluir projetos digitais com a metodologia AI-First Delivery OS.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-[#22D3EE] text-[#0F172A] px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
          Iniciar Diagnóstico M2
        </button>
        <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-lg font-bold text-lg transition-all">
          Conhecer Metodologia
        </button>
      </div>
    </div>
  </section>
);

const LayerCard = ({ title, desc, icon }: { title: string, desc: string, icon: string }) => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl hover:border-[#22D3EE]/50 transition-all group">
    <div className="text-[#22D3EE] mb-4 text-3xl">{icon}</div>
    <h3 className="text-2xl font-bold mb-3 font-space">{title}</h3>
    <p className="text-[#94A3B8] leading-relaxed">{desc}</p>
  </div>
);

const App = () => (
  <main className="bg-[#0F172A] min-h-screen text-white">
    <Navbar />
    <Hero />
    
    <section id="layers" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-space">3 Camadas Complementares</h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto">A união dessas camadas transforma a velocidade bruta da IA em entregas de software previsíveis e seguras.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <LayerCard 
          icon="⚛️"
          title="Engenharia de Software"
          desc="Arquitetura resiliente, Clean Code e Clean AI Integration. O Solution Architect garante que o código gerado escala."
        />
        <LayerCard 
          icon="📊"
          title="Gestão de Projetos"
          desc="Agilidade realimentada por IA. Rituais, backlog inteligente e visibilidade total para o AI Project Manager."
        />
        <LayerCard 
          icon="🛡️"
          title="Engenharia de Processos"
          desc="Governança de artefatos e compliance. O Project Orchestrator protege a maturidade do ciclo de vida."
        />
      </div>
    </section>

    <section id="audit" className="py-24 bg-[#22D3EE]/5 border-y border-[#22D3EE]/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-[#22D3EE]/20 text-[#22D3EE] rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Módulo M2 Especial</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space">Project Audit & Recovery</h2>
          <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">
            Seu projeto está travado ou o código gerado por IA virou um 'espaguete' incontrolável? O M2 realiza um diagnóstico profundo e gera um backlog de saneamento imediato.
          </p>
          <button className="bg-[#22D3EE] text-[#0F172A] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            Solicitar Auditoria Gratuita
          </button>
        </div>
        <div className="flex-1 bg-[#0F172A] border border-[#22D3EE]/30 p-8 rounded-2xl shadow-2xl">
           <div className="bg-[#1E293B] rounded-xl p-6 font-mono text-sm text-[#22D3EE]">
              <p className="mb-2">// Aegis OS Diagnostic Scan...</p>
              <p className="mb-2 text-white">Status: <span className="text-red-400">Critical Debt Detected</span></p>
              <p className="mb-2 text-white">Security Score: 42%</p>
              <p className="border-t border-white/10 pt-4 mt-4 text-[#818CF8]">Recomendação: Iniciar Recuperação M2</p>
           </div>
        </div>
      </div>
    </section>

    <footer className="py-12 border-t border-white/5 text-center text-[#94A3B8] text-sm">
      <p>&copy; 2026 Aegis OS. Desenvolvido na velocidade da IA, entregue com confiança.</p>
    </footer>
  </main>
);

export default App;