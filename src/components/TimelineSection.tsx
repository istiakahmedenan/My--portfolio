import React from 'react';
import { Calendar, Terminal, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const timelineData = [
    {
      period: '2020',
      title: 'Started Digital Journey',
      description:
        'Began developing practical experience with social media platforms, technology and digital communities.',
      keyPoints: [
        'Exploration of digital communication architectures',
        'Early community-driven troubleshooting',
        'Foundational computing & network literacy',
      ],
      tag: 'ORIGIN_NODE',
    },
    {
      period: '2021–2023',
      title: 'Social Media & Technical Experience',
      description:
        'Expanded practical experience in social media support, account-related issues and digital troubleshooting.',
      keyPoints: [
        'Handling account lockouts and verification hurdles',
        'Technical triage for end-user software configuration',
        'Understanding social platform policies & recovery channels',
      ],
      tag: 'EXPANSION_PHASE',
    },
    {
      period: '2023–2025',
      title: 'Security & Recovery Focus',
      description:
        'Focused increasingly on social media security, recovery assistance and digital safety.',
      keyPoints: [
        'Defensive protection strategies against credential theft',
        'Legitimate identity arbitration for compromised accounts',
        'Digital hygiene education across community channels',
      ],
      tag: 'SPECIALIZATION',
    },
    {
      period: 'Present',
      title: 'Founder & CEO',
      description:
        'Leading Sherpur Cyber Agency and working with a growing team of digital-support contributors.',
      keyPoints: [
        'Directing 70+ technical contributors & safety advocates',
        'Spearheading campaigns against malicious content & gambling scams',
        'Continuous consultation for digital community safety',
      ],
      tag: 'LEADERSHIP_ROLE',
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            // CAREER_PROGRESSION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            EXPERIENCE TIMELINE
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-light">
            Continuous dedication to digital safety, technical problem solving, and community defense.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-32 space-y-12">
          {timelineData.map((item, idx) => (
            <div key={item.period} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:shadow-[0_0_12px_#00e5ff] transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Timestamp label on left for desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono font-bold text-cyan-400 sm:text-right sm:w-28 mb-2 sm:mb-0">
                {item.period}
              </div>

              {/* Timeline Card */}
              <div className="cyber-card rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/50">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-cyan-400/80 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    {item.tag}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-800">
                  {item.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
