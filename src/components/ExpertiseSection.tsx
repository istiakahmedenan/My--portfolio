import React, { useState } from 'react';
import {
  ShieldAlert,
  RotateCcw,
  KeyRound,
  Cpu,
  Radar,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  Lock,
} from 'lucide-react';

interface ExpertiseItem {
  id: string;
  code: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

export const ExpertiseSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const expertiseList: ExpertiseItem[] = [
    {
      id: 'cyber-security',
      code: 'SECURITY_NODE_01',
      title: 'Cyber Security',
      description:
        'Digital security awareness, security-focused troubleshooting and online safety practices.',
      details: [
        'Endpoint security configuration & hygiene',
        'Phishing & social engineering prevention',
        'Safe credential management practices',
      ],
      icon: <ShieldAlert className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 'social-media-recovery',
      code: 'RECOVERY_SYSTEM_02',
      title: 'Social Media Recovery',
      description:
        'Guidance and technical assistance for legitimate account recovery and access-related problems.',
      details: [
        'Legitimate platform verification workflows',
        'Identity dispute and ticket structuring',
        '2FA lockout escalation guidance',
      ],
      icon: <RotateCcw className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 'social-media-security',
      code: 'ACCESS_CONTROL_03',
      title: 'Social Media Security',
      description:
        'Account protection, security configuration, login protection and security awareness.',
      details: [
        'Hardware key & authenticator app integration',
        'Third-party application audit & revocation',
        'Privacy setting optimization on major platforms',
      ],
      icon: <KeyRound className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 'it-analysis',
      code: 'SYSTEM_ANALYSIS_04',
      title: 'IT Analysis',
      description:
        'Technical analysis, troubleshooting and digital problem solving.',
      details: [
        'Operating system & software diagnostic evaluation',
        'Network telemetry & DNS anomaly detection',
        'Client-side hardware & software optimization',
      ],
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 'digital-threat-analysis',
      code: 'THREAT_ANALYSIS_05',
      title: 'Digital Threat Analysis',
      description:
        'Understanding suspicious activity, security risks and online threats.',
      details: [
        'Suspicious URL & payload inspection',
        'Session hijacking & cookie threat assessment',
        'Impersonation & account clone mitigation',
      ],
      icon: <Radar className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 'security-consultation',
      code: 'CONSULTATION_NODE_06',
      title: 'Security Consultation',
      description:
        'Practical guidance for individuals and digital communities dealing with security concerns.',
      details: [
        'One-on-one safety posture review',
        'Community group moderation security guidelines',
        'Crisis response & digital containment plans',
      ],
      icon: <HelpCircle className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section id="expertise" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            // SPECIALIZED_CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            MY EXPERTISE
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Comprehensive, defensive cybersecurity disciplines and recovery strategies built on
            strict platform compliance and lawful best practices.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseList.map((item) => (
            <div
              key={item.id}
              className="cyber-card rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group cursor-default"
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Subtle top indicator bar */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mb-6 group-hover:w-full transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-500/80 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
                    {item.code}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              {/* Functional bullet points */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
