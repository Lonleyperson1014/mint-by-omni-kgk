import React, { useState } from 'react';
import { OuterPortal } from './components/OuterPortal';
import { InnerPipeline } from './components/InnerPipeline';
import { Globe, Terminal } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'outer' | 'inner'>('outer');
  const [quarantinedIds, setQuarantinedIds] = useState<string[]>([]);

  // Simple state callback allowing the admin panel to mock dynamic UI updates on the storefront
  const handleQuarantine = (id: string) => {
    setQuarantinedIds(prev => [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#06090F] text-slate-100 antialiased font-sans">
      {/* Structural Header Navigation */}
      <header className="border-b border-zinc-800 bg-[#0C1017]/90 backdrop-blur sticky top-0 z-50 px-8 py-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-gradient-to-br from-luxuryGold via-amber-500 to-amber-700 rotate-45 border border-white/10" />
          <div>
            <span className="font-mono tracking-[0.25em] uppercase text-lg font-extrabold block">
              MINT BY OMNI
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mt-0.5">
              MVP Ecosystem Interface
            </span>
          </div>
        </div>
        
        <div className="flex bg-black/50 p-1 border border-zinc-800/80 rounded-lg">
          <button
            onClick={() => setActiveTab('outer')}
            className={`flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all duration-300 ${
              activeTab === 'outer' 
                ? 'bg-luxuryGold text-black font-bold shadow-md shadow-luxuryGold/10' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Globe size={14} /> Outer Portal
          </button>
          <button
            onClick={() => setActiveTab('inner')}
            className={`flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all duration-300 ${
              activeTab === 'inner' 
                ? 'bg-cautionRed text-white font-bold shadow-md shadow-cautionRed/10' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Terminal size={14} /> Inner Pipeline
          </button>
        </div>
      </header>

      {/* Portal Interface Context View Router */}
      <main className="animate-fadeIn p-4 md:p-8">
        {activeTab === 'outer' ? (
          <OuterPortal quarantinedIds={quarantinedIds} />
        ) : (
          <InnerPipeline onQuarantineTriggered={handleQuarantine} />
        )}
      </main>
    </div>
  );
}
