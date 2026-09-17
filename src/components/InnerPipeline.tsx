import React, { useState } from 'react';
import { ShieldAlert, Activity, FileCode, CheckCircle } from 'lucide-react';

interface InnerPipelineProps {
  onQuarantineTriggered: (id: string) => void;
}

export function InnerPipeline({ onQuarantineTriggered }: InnerPipelineProps) {
  const [idInput, setIdInput] = useState('');
  const [reason, setReason] = useState('');
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Secured administrative telemetry terminal active.",
    "[SYSTEM] Single-Table query engines executing at optimal O(1) performance benchmarks."
  ]);

  const triggerIsolation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idInput.trim()) return;

    onQuarantineTriggered(idInput.trim());
    setLogs(prev => [
      `🛑 [CIRCUIT_BREAKER] ALERT: Quarantine activated for ID ${idInput}.`,
      `📡 [SYNC] Public catalog views stripped. Row indexed to STATUS#QUARANTINED.`,
      ...prev
    ]);
    setIdInput('');
    setReason('');
  };

  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
      {/* Configuration Forms Column */}
      <div className="lg:col-span-2 space-y-8">
        <div className="border-b border-zinc-900 pb-6">
          <div className="inline-block px-2 py-0.5 border border-cautionRed/30 text-cautionRed font-mono text-[10px] uppercase tracking-widest rounded mb-3">
            Internal Secure Pipeline
          </div>
          <h2 className="text-2xl font-light tracking-wide text-white uppercase font-mono">
            Administrative Pipeline Console
          </h2>
        </div>

        {/* Structural Metrics Summary Indicators */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-zinc-800 bg-[#0A0D14] p-4 rounded-lg flex items-start gap-3">
            <FileCode className="text-luxuryGold mt-0.5 shrink-0" size={18} />
            <div>
              <h4 className="font-mono text-xs uppercase text-zinc-300 font-bold">Single-Table Validation</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">CAD blueprint data validations execute directly inside unified data queries.</p>
            </div>
          </div>
          <div className="border border-zinc-800 bg-[#0A0D14] p-4 rounded-lg flex items-start gap-3">
            <CheckCircle className="text-luxuryGold mt-0.5 shrink-0" size={18} />
            <div>
              <h4 className="font-mono text-xs uppercase text-zinc-300 font-bold">Split Dispersal Modules</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">Atomic automated payouts map balances natively to corresponding stakeholder nodes.</p>
            </div>
          </div>
        </div>

        {/* Quarantine Override Module */}
        <div className="border border-zinc-800 bg-gradient-to-b from-[#140E0E] to-[#0A0707] p-6 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-cautionRed font-mono text-xs uppercase tracking-wider font-bold">
            <ShieldAlert size={16} /> "Caution Red" Risk Quarantine Controller
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Input compromised token identifiers below to immediately drop public layout availability indexes across regional API distributions.
          </p>

          <form onSubmit={triggerIsolation} className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">Target Asset UUID</label>
              <input
                type="text"
                value={idInput}
                onChange={(e) => setIdInput(e.target.value)}
                placeholder="e.g., 08fd721b-c741-4c6e-8a29-231a48c69112"
                className="w-full bg-black/50 border border-zinc-800 focus:border-cautionRed text-white px-3 py-2 rounded text-xs font-mono outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">Quarantine Rationale Documentation</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Log internal regulatory compliance notes..."
                className="w-full bg-black/50 border border-zinc-800 focus:border-cautionRed text-white px-3 py-2 rounded text-xs font-mono outline-none h-16 resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cautionRed hover:bg-red-700 text-white font-mono font-bold text-xs uppercase py-3 tracking-widest rounded transition-all duration-300"
            >
              Trigger System Circuit Breaker
            </button>
          </form>
        </div>
      </div>

      {/* Stream Telemetry Terminal Output Column */}
      <div className="border border-zinc-800 bg-black/40 p-4 rounded-xl flex flex-col h-[420px] lg:mt-20">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 pb-2 mb-3 border-b border-zinc-900 flex justify-between items-center">
          <span className="flex items-center gap-1.5"><Activity size={12} className="text-emerald-500" /> Pipeline Logs</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        </div>
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 font-mono text-[10px] leading-relaxed select-none">
          {logs.map((log, index) => (
            <div 
              key={index} 
              className={`p-2 rounded border ${
                log.includes('🛑') 
                  ? 'bg-red-950/20 border-red-900/40 text-red-400' 
                  : 'bg-zinc-900/40 border-zinc-900/60 text-zinc-400'
              }`}
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
