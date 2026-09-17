import React, { useState } from 'react';
import { ShieldCheck, Anchor, ArrowUpRight, HelpCircle } from 'lucide-react';

interface OuterPortalProps {
  quarantinedIds: string[];
}

export function OuterPortal({ quarantinedIds }: OuterPortalProps) {
  const [activeTwin, setActiveTwin] = useState<string | null>(null);

  const initialAssets = [
    {
      id: "08fd721b-c741-4c6e-8a29-231a48c69112",
      title: "Premium Grade-A Gold Bullion 1kg Lot",
      category: "BULK_COMMODITY",
      origin: "Ghana",
      floorPrice: 68500.00,
      provenanceHash: "0x7a911e4f...3cbb",
      heritage: "Ashanti Region Registered Extraction Lot"
    },
    {
      id: "bc9b7b91-c741-4c6e-8a29-231a48c69234",
      title: "Imperial Heritage Tanzanite Crown Cluster",
      category: "LUXURY_ART",
      origin: "Tanzania",
      floorPrice: 145000.00,
      provenanceHash: "0x3f1bc09a...71fa",
      heritage: "Manyara Area Direct Sourced Certificate"
    }
  ];

  // Dynamically filters assets inside client views if isolated by the administrative circuit breaker
  const visibleAssets = initialAssets.filter(asset => !quarantinedIds.includes(asset.id));

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="border-b border-zinc-900 pb-6">
        <div className="inline-block px-2 py-0.5 border border-luxuryGold/30 text-luxuryGold font-mono text-[10px] uppercase tracking-widest rounded mb-3">
          Live Portal View Environment
        </div>
        <h2 className="text-2xl font-light tracking-wide text-white uppercase font-mono">
          Forward-Facing Client Catalog
        </h2>
      </div>

      {visibleAssets.length === 0 ? (
        <div className="border border-dashed border-zinc-800 p-12 text-center text-zinc-500 font-mono text-sm">
          No premium assets currently cleared for open-market trade operations.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {visibleAssets.map(asset => (
            <div key={asset.id} className="border border-zinc-800 bg-[#0A0D14] flex flex-col justify-between hover:border-luxuryGold/40 transition-all duration-300 rounded-lg overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 tracking-wider text-zinc-400">
                    {asset.category}
                  </span>
                  <span className="font-mono text-xs text-luxuryGold flex items-center gap-1">
                    <Anchor size={12} /> {asset.origin.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">{asset.title}</h3>
                  <code className="text-[10px] text-zinc-500 block mt-1">UUID: {asset.id}</code>
                </div>

                <div className="space-y-2 pt-2">
                  <button 
                    onClick={() => setActiveTwin(activeTwin === asset.id ? null : asset.id)}
                    className="text-xs text-zinc-400 hover:text-white font-mono flex items-center gap-1.5 underline underline-offset-4 decoration-zinc-700"
                  >
                    <HelpCircle size={12} /> View Provenance Passport Twin Details
                  </button>
                  
                  {activeTwin === asset.id && (
                    <div className="bg-black/40 border border-zinc-800/60 p-3 rounded text-xs font-mono space-y-2 mt-2 animate-slideDown">
                      <div className="text-zinc-500">Metadata Hash: <span className="text-zinc-300">{asset.provenanceHash}</span></div>
                      <div className="text-zinc-500">Verified Heritage: <span className="text-zinc-300">{asset.heritage}</span></div>
                      <div className="text-zinc-400 text-[10px] flex items-center gap-1 text-emerald-400/80">
                        <ShieldCheck size={10} /> Immutable Cryptographic Passport Anchored On-Chain
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 bg-black/30 border-t border-zinc-900 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 block uppercase">Hardcoded Pricing Floor</span>
                  <span className="text-xl font-mono font-bold text-luxuryGold">${asset.floorPrice.toLocaleString()} USD</span>
                </div>
                <button className="bg-white hover:bg-luxuryGold text-black font-mono font-bold text-xs uppercase px-5 py-3 tracking-widest rounded transition-all duration-300 flex items-center gap-1">
                  Transact <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
