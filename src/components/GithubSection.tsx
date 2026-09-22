import React from 'react';
import { GitBranch, Star, Terminal, ExternalLink, Code2, Shield, FolderGit2 } from 'lucide-react';

export const GithubSection: React.FC = () => {
  const sampleRepos = [
    {
      name: 'cyber-safety-guidelines',
      description: 'Community-oriented digital protection protocols, 2FA checklists, and anti-phishing guidelines.',
      language: 'Markdown / Security',
      stars: 38,
      forks: 14,
      updated: 'Recent',
    },
    {
      name: 'social-account-auditor',
      description: 'Reference checklists and Python scripts for evaluating credential hygiene and OAuth authorizations.',
      language: 'Python',
      stars: 52,
      forks: 19,
      updated: 'Active',
    },
    {
      name: 'threat-indicators-feed',
      description: 'Collection of reported scam URL patterns, phishing domains, and rogue SMS templates targeting local users.',
      language: 'JSON / Shell',
      stars: 44,
      forks: 12,
      updated: 'Weekly',
    },
  ];

  return (
    <section id="github" className="py-24 relative bg-slate-950/50 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: GitHub Identity (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              // REPOSITORY_RECON
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              OPEN SOURCE & CODE
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed">
              Explore public scripts, security checklists, and technical documentation published on
              GitHub. Dedicated to elevating cyber awareness and transparent tooling for digital protection.
            </p>

            <div className="cyber-card rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-bold font-mono text-white">
                    @istiakahmedenan
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    github.com/istiakahmedenan
                  </div>
                </div>
              </div>

              {/* Contribution Activity Indicators */}
              <div className="pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>CONTRIBUTION CADENCE</span>
                  <span className="text-emerald-400">STEADY COMMITS</span>
                </div>
                {/* Simulated commit activity graph squares */}
                <div className="grid grid-cols-14 gap-1 sm:gap-1.5">
                  {Array.from({ length: 42 }).map((_, i) => {
                    const level = (i * 7 + 3) % 5;
                    const colors = [
                      'bg-slate-900 border border-slate-800',
                      'bg-cyan-950 border border-cyan-900',
                      'bg-cyan-900/60 border border-cyan-700/50',
                      'bg-cyan-600/70 border border-cyan-500/60',
                      'bg-cyan-400 border border-cyan-300',
                    ];
                    return (
                      <div
                        key={i}
                        className={`h-3 rounded-sm ${colors[level]} transition-transform hover:scale-125`}
                        title={`Day ${i + 1} activity: ${level} commits`}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://github.com/istiakahmedenan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
                >
                  VISIT GITHUB PROFILE
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Repositories (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono text-cyan-400 tracking-wider">
                FEATURED WORKSPACE PACKAGES
              </span>
              <span className="text-xs font-mono text-slate-500">PUBLIC REPOSITORIES</span>
            </div>

            <div className="space-y-4">
              {sampleRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="cyber-card rounded-xl p-5 transition-all duration-300 hover:border-cyan-500/50 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <a
                        href="https://github.com/istiakahmedenan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold font-mono text-white group-hover:text-cyan-300 transition-colors"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      PUBLIC
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-light mb-4 leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        {repo.language}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                        {repo.forks}
                      </span>
                    </div>

                    <a
                      href="https://github.com/istiakahmedenan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 text-[11px]"
                    >
                      View Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
