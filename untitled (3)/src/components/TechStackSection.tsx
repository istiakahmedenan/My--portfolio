import React, { useState } from 'react';
import { Terminal, Shield, Code, Cpu, Network, Layers, Sparkles } from 'lucide-react';

interface TechNode {
  name: string;
  category: 'CORE_LANG' | 'PLATFORM_ENV' | 'SECURITY_WEB';
  level: string;
  role: string;
  iconTag: string;
}

export const TechStackSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const techNodes: TechNode[] = [
    { name: 'Python', category: 'CORE_LANG', level: 'ADVANCED', role: 'Automation & Log Parsing', iconTag: 'PY' },
    { name: 'JavaScript', category: 'CORE_LANG', level: 'PROFICIENT', role: 'DOM Inspection & Scripting', iconTag: 'JS' },
    { name: 'HTML5', category: 'CORE_LANG', level: 'EXPERT', role: 'Semantic Web & Markup Security', iconTag: 'HTML' },
    { name: 'CSS3', category: 'CORE_LANG', level: 'EXPERT', role: 'Responsive Interfaces & Styling', iconTag: 'CSS' },
    { name: 'Linux', category: 'PLATFORM_ENV', level: 'ADVANCED', role: 'System Admin & CLI Diagnostics', iconTag: 'LIN' },
    { name: 'Git', category: 'PLATFORM_ENV', level: 'PROFICIENT', role: 'Version Control & Integrity', iconTag: 'GIT' },
    { name: 'GitHub', category: 'PLATFORM_ENV', level: 'ADVANCED', role: 'Code Collaboration & CI/CD', iconTag: 'GH' },
    { name: 'VS Code', category: 'PLATFORM_ENV', level: 'EXPERT', role: 'Primary Development IDE', iconTag: 'VSC' },
    { name: 'React', category: 'SECURITY_WEB', level: 'PROFICIENT', role: 'Modern UI Architecture', iconTag: 'RCT' },
    { name: 'Web Technologies', category: 'SECURITY_WEB', level: 'ADVANCED', role: 'HTTP/S, SSL/TLS, DNS & REST', iconTag: 'WEB' },
    { name: 'Cybersecurity Tools', category: 'SECURITY_WEB', level: 'SPECIALIZED', role: 'Threat Scanners, 2FA, Triage', iconTag: 'SEC' },
  ];

  const filteredNodes =
    activeFilter === 'ALL'
      ? techNodes
      : techNodes.filter((node) => node.category === activeFilter);

  return (
    <section id="tech-stack" className="py-24 relative bg-slate-950/40 border-y border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            // ARSENAL_AND_TOOLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            TECHNOLOGY STACK
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-light">
            Modern tools, command-line environments, and security frameworks utilized in daily workflows.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { label: 'All Technologies', value: 'ALL' },
              { label: 'Languages', value: 'CORE_LANG' },
              { label: 'Platforms & OS', value: 'PLATFORM_ENV' },
              { label: 'Web & Security', value: 'SECURITY_WEB' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Glowing Hexagonal/Circular Grid Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredNodes.map((tech) => (
            <div
              key={tech.name}
              className="cyber-card rounded-xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-cyan-400 group cursor-default"
            >
              {/* Glowing circular node */}
              <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-cyan-500/40 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all mb-3">
                {tech.iconTag}
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h3>

              <div className="text-[10px] font-mono text-cyan-400/90 mt-1 uppercase tracking-wider">
                {tech.level}
              </div>

              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 font-light">
                {tech.role}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive connection line telemetry footer */}
        <div className="mt-12 p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>DEV_ENVIRONMENT: LINUX / BASH / VSCODE WORKSPACE</span>
          </div>
          <div className="text-slate-500">
            ENCRYPTED PIPELINE // READY FOR DISPATCH
          </div>
        </div>
      </div>
    </section>
  );
};
