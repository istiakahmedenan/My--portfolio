import React from 'react';
import { EyeOff, Scale, ShieldAlert, FileText, Lightbulb, CheckCircle } from 'lucide-react';

export const SecurityPrinciplesSection: React.FC = () => {
  const principles = [
    {
      title: 'PRIVACY FIRST',
      code: 'ETHIC_RULE_01',
      desc: 'Respect user privacy and sensitive information.',
      detail:
        'All client telemetry, identity documents, and correspondence are handled with absolute confidentiality and immediately discarded once verification is complete.',
      icon: <EyeOff className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: 'LEGAL & RESPONSIBLE',
      code: 'ETHIC_RULE_02',
      desc: 'Work within applicable laws, platform rules and responsible security practices.',
      detail:
        'Operating strictly within official terms of service, national cyber legislation, and standardized platform recovery protocols without gray-hat exploits.',
      icon: <Scale className="w-6 h-6 text-sky-400" />,
    },
    {
      title: 'NO UNAUTHORIZED ACCESS',
      code: 'ETHIC_RULE_03',
      desc: 'Never promote unauthorized access, credential theft or account compromise.',
      detail:
        'Firm rejection of any requests to break into third-party accounts, harvest credentials, or conduct offensive attacks. Strictly defensive and lawful recovery.',
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
    },
    {
      title: 'TRANSPARENCY',
      code: 'ETHIC_RULE_04',
      desc: 'Clearly communicate what can and cannot be done.',
      detail:
        'Honest assessment of recovery probabilities and realistic expectations based on platform response timelines, avoiding deceptive guarantees or claims.',
      icon: <FileText className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: 'SECURITY AWARENESS',
      code: 'ETHIC_RULE_05',
      desc: 'Help users understand practical ways to protect their digital identity.',
      detail:
        'Empowering users with lifelong digital defense habits, passkey education, 2FA setup, and proactive recognition of modern scam vectors.',
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
    },
  ];

  return (
    <section id="principles" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            // CODE_OF_ETHICS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            MY SECURITY PRINCIPLES
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-light">
            Strict professional ethics and lawful digital stewardship at the core of all security activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={item.title}
              className={`cyber-card rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400/80 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    {item.code}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-cyan-200/90 text-sm font-medium mb-3">
                  {item.desc}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800 flex items-center gap-2 text-[11px] font-mono text-cyan-500">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>MANDATORY_STANDARD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
