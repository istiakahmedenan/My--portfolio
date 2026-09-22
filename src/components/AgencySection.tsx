import React from 'react';
import { ShieldCheck, Users, AlertTriangle, Ban, Globe2, ExternalLink, ShieldAlert, HeartHandshake } from 'lucide-react';

export const AgencySection: React.FC = () => {
  const counterMeasures = [
    {
      title: 'Online Gambling-Related Promotions',
      desc: 'Active monitoring and reporting against unauthorized digital betting syndicates and exploit campaigns targeted at youth.',
      icon: <Ban className="w-5 h-5 text-rose-400" />,
    },
    {
      title: 'Harmful & Inappropriate Content',
      desc: 'Community awareness drives educating platform users on reporting mechanisms for abusive, toxic, or explicit digital material.',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Abusive or Unsafe Digital Activities',
      desc: 'Providing victim assistance and technical counter-measures against cyber-harassment, blackmail, and unauthorized account takeovers.',
      icon: <ShieldAlert className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Digital-Security Risks',
      desc: 'Rapid identification of credential harvesters, malicious APKs, phishing websites, and data leak vulnerabilities.',
      icon: <Globe2 className="w-5 h-5 text-sky-400" />,
    },
    {
      title: 'Online Safety Education',
      desc: 'Publishing free digital hygiene checklists, 2FA setup guides, and safety best practices for students and local professionals.',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="agency" className="py-24 relative bg-slate-950/60 border-y border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Organization Profile (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              // ORGANIZATION_INITIATIVE
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              SHERPUR CYBER AGENCY
            </h2>

            <div className="text-cyan-300 font-mono text-sm sm:text-base font-semibold tracking-wide">
              Digital Safety • Social Media Support • Responsible Online Communities
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              “Sherpur Cyber Agency is a technology and digital-support initiative founded by{' '}
              <strong className="text-white font-medium">Istiak Ahmed Enan</strong>. The agency focuses
              on social media security, digital safety, technical support and responsible online
              practices.”
            </p>

            {/* Team Highlight Callout */}
            <div className="p-4 sm:p-6 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                    70+ Team Members & Contributors
                  </div>
                  <div className="text-xs text-slate-300 font-light">
                    Collaborating on proactive digital-support and online-safety activities.
                  </div>
                </div>
              </div>

              <a
                href="https://www.facebook.com/share/1GZBp2mKf4/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs tracking-wider inline-flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(6,182,212,0.3)] shrink-0"
              >
                Official Page
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Ethical Scope & Platform Non-Affiliation Disclaimer */}
            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 leading-relaxed">
              <span className="text-cyan-400 font-bold block mb-1">
                CIVIL SOCIETY & COMMUNITY INITIATIVE NOTICE:
              </span>
              Sherpur Cyber Agency operates as an independent technical and digital safety initiative.
              It does not hold government affiliation, law-enforcement authority, or official platform
              administrator powers. All operations are strictly preventive, educational, and
              consultative within legal frameworks.
            </div>
          </div>

          {/* Right Column: Mission Areas & Proactive Defense (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="cyber-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
                  FOCUS ACTIONS & MITIGATIONS
                </div>
                <span className="text-[10px] font-mono text-slate-500">INITIATIVE_v2026</span>
              </div>

              <div className="space-y-4">
                {counterMeasures.map((measure, index) => (
                  <div
                    key={measure.title}
                    className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded bg-slate-800 shrink-0 mt-0.5">
                      {measure.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {measure.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {measure.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
