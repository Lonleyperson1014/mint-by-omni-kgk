import React, { useState } from 'react';
import { ShieldCheck, Gem, ArrowRight, Lock } from 'lucide-react';

interface KgkLot {
  id: string;
  lotNumber: string;
  sourceMine: string;
  caratWeight: number;
  colorGrade: string;
  clarity: string;
  complianceStatus: string;
  blockchainHash: string;
}

export function KgkProvenancePortal() {
  const [selectedLot, setSelectedLot] = useState<string | null>("kgk-lot-7789-bw");

  const kgkLots: KgkLot[] = [
    {
      id: "kgk-lot-7789-bw",
      lotNumber: "KGK-BOT-2026-904",
      sourceMine: "Gaborone Processing Facility / Local Sourced",
      caratWeight: 4.25,
      colorGrade: "D (Exceptional White+)",
      clarity: "VVS1",
      complianceStatus: "Kimberley Process Verified & Audit Cleared",
      blockchainHash: "0xkgk904...ff2a"
    },
    {
      id: "kgk-lot-7812-bw",
      lotNumber: "KGK-BOT-2026-912",
      sourceMine: "Botswana Ethical Diamond Reserve",
      caratWeight: 2.80,
      colorGrade: "E (Exceptional White)",
      clarity: "IF",
      complianceStatus: "Kimberley Process Verified & Audit Cleared",
      blockchainHash: "0xkgk912...88bc"
    }
  ];

  const activeData = kgkLots.find(lot => lot.id === selectedLot);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
      <div className="border-b border-zinc-900 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-block px-2 py-0.5 border border-luxuryGold/30 text-luxuryGold font-mono text-[10px] uppercase tracking-widest rounded mb-3">
            KGK Diamonds Botswana Integration Layer
          </div>
          <h2 className="text-2xl font-light tracking-wide text-white uppercase font-mono">
            Gemstone Provenance & Batch Traceability Dashboard
          </h2>
        </div>
        <div className="bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-mono text-emerald-400">
          <ShieldCheck size={16} /> Layering Syntax Pipeline Active
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Active Diamond Lots</h3>
          <div className="space-y-3">
            {kgkLots.map(lot => (
              <button
                key={lot.id}
                onClick={() => setSelectedLot(lot.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 font-mono ${
                  selectedLot === lot.id 
                    ? 'bg-luxuryGold/10 border-luxuryGold text-white' 
                    : 'bg-[#0A0D14] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-luxuryGold">{lot.lotNumber}</span>
                  <span className="text-[10px] text-zinc-500">{lot.caratWeight} CT</span>
                </div>
                <div className="text-[11px] text-zinc-300 flex items-center gap-1 mt-2">
                  <Gem size={12} className="text-zinc-500" /> {lot.colorGrade} / {lot.clarity}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 border border-zinc-800 bg-[#0A0D14] p-6 rounded-xl space-y-6">
          {activeData && (
            <>
              <div className="flex justify-between items-start border-b border-zinc-900 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">Selected Lot Identifier</span>
                  <h3 className="text-xl font-mono font-bold text-white mt-1">{activeData.lotNumber}</h3>
                </div>
                <span className="px-3 py-1 bg-emerald-950/40 border border-emerald-900/60 text-emerald-400 text-[10px] font-mono rounded uppercase">
                  {activeData.complianceStatus}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 font-mono text-xs">
                <div className="space-y-1 bg-black/40 p-3.5 rounded border border-zinc-900">
                  <span className="text-[10px] text-zinc-500 uppercase block">Extraction Origin</span>
                  <span className="text-zinc-200 font-bold">{activeData.sourceMine}</span>
                </div>
                <div className="space-y-1 bg-black/40 p-3.5 rounded border border-zinc-900">
                  <span className="text-[10px] text-zinc-500 uppercase block">Total Mass Spec</span>
                  <span className="text-luxuryGold font-bold">{activeData.caratWeight} Carats (Polished Grade)</span>
                </div>
                <div className="space-y-1 bg-black/40 p-3.5 rounded border border-zinc-900">
                  <span className="text-[10px] text-zinc-500 uppercase block">Color & Clarity Metrics</span>
                  <span className="text-zinc-200">{activeData.colorGrade} • {activeData.clarity}</span>
                </div>
                <div className="space-y-1 bg-black/40 p-3.5 rounded border border-zinc-900">
                  <span className="text-[10px] text-zinc-500 uppercase block">Cryptographic Hash</span>
                  <span className="text-zinc-400 truncate block">{activeData.blockchainHash}</span>
                </div>
              </div>

              <div className="border-t border-zinc-900 pt-6 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Lock size={14} className="text-luxuryGold" /> Secured via Layering Syntax Protocol
                </div>
                <button className="bg-luxuryGold hover:bg-amber-500 text-black font-mono font-bold text-xs uppercase px-6 py-3 tracking-widest rounded transition-all duration-300 flex items-center gap-2">
                  Export Audit Dossier <ArrowRight size={14} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
