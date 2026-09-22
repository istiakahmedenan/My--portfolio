import React, { useState, useEffect } from 'react';
import { Terminal, Play, Copy, Check, Sparkles, Code2, ShieldAlert } from 'lucide-react';

export const CodingSignatureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'typescript' | 'bash' | 'ascii'>('typescript');
  const [isCopied, setIsCopied] = useState(false);
  const [typedOutput, setTypedOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const fullCodeTypeScript = `// -------------------------------------------------------------------------
// OFFICIAL SYSTEM PROFILE: ISTIAK AHMED ENAN
// DIGITAL IDENTITY & CYBER RECOVERY MATRIX
// -------------------------------------------------------------------------

interface SecuritySpecialist {
  name: string;
  codename: string;
  specialization: string[];
  agency: {
    name: string;
    role: string;
    teamSize: number;
  };
  metrics: {
    experience: string;
    casesResolved: string;
    successRate: string;
  };
  contact: {
    email: string;
    telegram: string;
    location: string;
  };
  motto: () => string;
}

export const istiakAhmedEnan: SecuritySpecialist = {
  name: "Istiak Ahmed Enan",
  codename: "ENAN // CYBER_DEFENSE_2100",
  specialization: [
    "Social Media Security & Recovery",
    "Account Takeover & 2FA Resolution",
    "Compromised Platform Investigation",
    "IT Analysis & Threat Mitigation"
  ],
  agency: {
    name: "Sherpur Cyber Agency",
    role: "Founder & CEO",
    teamSize: 70
  },
  metrics: {
    experience: "5+ Years Active Defense",
    casesResolved: "10,000+ Assisted Accounts",
    successRate: "98.6% Lawful Restoration"
  },
  contact: {
    email: "secistiak@gmail.com",
    telegram: "t.me/Fuck_Your_System999",
    location: "Sherpur Sadar, Bangladesh [2100]"
  },
  motto: () => {
    return "Protecting identities, recovering access, and securing digital lives.";
  }
};

// Execute diagnostic verification
istiakAhmedEnan.motto();`;

  const bashScript = `#!/usr/bin/env bash
# ==============================================================================
# ENAN DIGITAL RECOVERY SCRIPT v2.6.4
# Specialist: Istiak Ahmed Enan // Founder: Sherpur Cyber Agency
# ==============================================================================

echo "[+] Initializing Cyber Security Protocol..."
sleep 0.4
echo "[+] Target Identity: ISTIAK AHMED ENAN"
echo "[+] Verification ID: BD-2100-ENAN"
echo "[+] Primary Focus: Social Media Security & Account Recovery"
sleep 0.3
echo "[+] Connecting to Security Node: Sherpur Cyber Agency..."
echo "[+] STATUS: ACTIVE // 70+ Team Contributors Ready"
echo "[✓] SYSTEM SECURE. READY FOR DIGITAL PROTECTION."`;

  const asciiArt = `
  ███████╗███╗   ██╗ █████╗ ███╗   ██╗
  ██╔════╝████╗  ██║██╔══██╗████╗  ██║
  █████╗  ██╔██╗ ██║███████║██╔██╗ ██║
  ██╔══╝  ██║╚██╗██║██╔══██║██║╚██╗██║
  ███████╗██║ ╚████║██║  ██║██║ ╚████║
  ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝
   >> ISTIAK AHMED ENAN // CYBER SPECIALIST <<
`;

  // Typing animation for terminal runner
  useEffect(() => {
    let index = 0;
    const textToType = "SEC_NODE: ENAN_SECURITY_SYSTEMS_LOADED // VERIFIED 100%";
    const timer = setInterval(() => {
      setTypedOutput(textToType.slice(0, index));
      index++;
      if (index > textToType.length) {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    const text =
      activeTab === 'typescript'
        ? fullCodeTypeScript
        : activeTab === 'bash'
        ? bashScript
        : asciiArt;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTypedOutput('');
    let i = 0;
    const executionLogs = [
      '>> BOOTING ENAN CYBER MATRIX...',
      '>> IDENTITY: ISTIAK AHMED ENAN',
      '>> ROLE: SOCIAL MEDIA SECURITY & RECOVERY SPECIALIST',
      '>> AGENCY: SHERPUR CYBER AGENCY [70+ CONTRIBUTORS]',
      '>> RUNNING 2FA DEFENSE PROTOCOLS...',
      '>> ALL PORTS SECURE. PROTECTION READY.',
    ].join('\n');

    const interval = setInterval(() => {
      setTypedOutput(executionLogs.slice(0, i));
      i += 3;
      if (i > executionLogs.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 20);
  };

  return (
    <section id="coding-signature" className="py-20 relative overflow-hidden bg-[#02050e]">
      {/* Background Matrix Rain Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/15 via-[#02050e] to-black pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title and Intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>AUTHENTIC CODE SIGNATURE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono uppercase">
            &lt;ISTIAK AHMED ENAN /&gt;
          </h2>
          <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mt-1">
            // Developer, Cyber Security Specialist &amp; Social Media Recovery Analyst
          </p>
        </div>

        {/* Futuristic Interactive Code Terminal Card */}
        <div className="rounded-2xl border border-cyan-500/40 bg-[#060c18] shadow-2xl shadow-cyan-950/50 overflow-hidden">
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 bg-[#0a1222] border-b border-cyan-500/30 flex items-center justify-between flex-wrap gap-2">
            {/* macOS / Unix Window Dot Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
              <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                bash // enan@sherpur-cyber: ~
              </span>
            </div>

            {/* File Switcher Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5 max-w-full">
              <button
                onClick={() => setActiveTab('typescript')}
                className={`px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'typescript'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                IstiakAhmedEnan.ts
              </button>
              <button
                onClick={() => setActiveTab('bash')}
                className={`px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'bash'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                recoveryProtocol.sh
              </button>
              <button
                onClick={() => setActiveTab('ascii')}
                className={`px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'ascii'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                asciiBanner.txt
              </button>
            </div>

            {/* Action Buttons: Run & Copy */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-2.5 sm:px-3 py-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 text-[11px] sm:text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-emerald-300" />
                <span>{isRunning ? 'RUNNING...' : 'RUN'}</span>
              </button>

              <button
                onClick={handleCopy}
                className="px-2 sm:px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-[11px] sm:text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
                title="Copy code"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Editor Body */}
          <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed bg-[#040812]">
            {activeTab === 'typescript' && (
              <pre className="text-slate-300 selection:bg-cyan-500/30">
                <code>
                  {fullCodeTypeScript.split('\n').map((line, i) => (
                    <div key={i} className="table-row group hover:bg-cyan-950/20">
                      <span className="table-cell pr-4 text-slate-600 select-none text-right w-8">
                        {i + 1}
                      </span>
                      <span className="table-cell">
                        {line.includes('//') ? (
                          <span className="text-slate-500 italic">{line}</span>
                        ) : line.includes('interface ') || line.includes('export const ') ? (
                          <span className="text-cyan-400 font-bold">{line}</span>
                        ) : line.includes('"Istiak Ahmed Enan"') ? (
                          <span className="text-emerald-400 font-bold underline decoration-cyan-400 decoration-wavy">
                            {line}
                          </span>
                        ) : line.includes('specialization:') || line.includes('agency:') || line.includes('metrics:') ? (
                          <span className="text-sky-300 font-semibold">{line}</span>
                        ) : line.includes('return ') ? (
                          <span className="text-purple-400 font-semibold">{line}</span>
                        ) : line.includes(': "') ? (
                          <span className="text-amber-200">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            )}

            {activeTab === 'bash' && (
              <pre className="text-emerald-400 selection:bg-emerald-500/30">
                <code>
                  {bashScript.split('\n').map((line, i) => (
                    <div key={i} className="table-row">
                      <span className="table-cell pr-4 text-slate-600 select-none text-right w-8">
                        {i + 1}
                      </span>
                      <span className="table-cell">{line}</span>
                    </div>
                  ))}
                </code>
              </pre>
            )}

            {activeTab === 'ascii' && (
              <pre className="text-cyan-400 text-[10px] sm:text-xs leading-none overflow-x-auto py-4 font-bold select-all">
                {asciiArt}
              </pre>
            )}
          </div>

          {/* Interactive Live Output Console Drawer */}
          <div className="px-4 py-3 bg-[#02050c] border-t border-cyan-500/20 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-cyan-400 overflow-x-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-slate-400 shrink-0">OUTPUT:</span>
              <span className="text-cyan-300 font-bold whitespace-pre-wrap">{typedOutput}</span>
              <span className="w-1.5 h-3.5 bg-cyan-400 animate-ping shrink-0" />
            </div>

            <div className="text-[10px] text-slate-500 hidden sm:block shrink-0">
              UTF-8 // LF // TypeScript 5.8
            </div>
          </div>
        </div>

        {/* Bottom Verification Glow Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Digital Persona: Istiak Ahmed Enan</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Sherpur Cyber Agency Founder</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>70+ Security Contributors</span>
          </div>
        </div>
      </div>
    </section>
  );
};
