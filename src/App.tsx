import React from 'react';
import { KgkProvenancePortal } from './components/KgkProvenancePortal';
import { Shield, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#06090F] text-slate-100 antialiased font-sans">
      <header className="border-b border-zinc-800 bg-[#0C1017]/90 backdrop-blur sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-gradient-to-br from-luxuryGold via-amber-500 to-amber-700 rotate-45 border border-white/10" />
          <div>
            <span className="font-mono tracking-[0.25em] uppercase text-lg font-extrabold block">
              MINT BY OMNI
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mt-0.5">
              KGK Diamonds Botswana Integration Layer
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-black/50 px-4 py-2 border border-zinc-800/80 rounded-lg text-xs font-mono text-luxuryGold">
          <Cpu size={14} /> Layering Syntax Active
        </div>
      </header>

      <main className="p-4 md:p-8">
        <KgkProvenancePortal />
      </main>
    </div>
  );
}
