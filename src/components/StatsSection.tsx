import React, { useState, useEffect, useRef } from 'react';
import { Award, CheckCircle, Clock, Users, ShieldAlert } from 'lucide-react';

interface StatDef {
  label: string;
  target: number;
  suffix: string;
  sublabel: string;
  icon: React.ReactNode;
}

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const stats: StatDef[] = [
    {
      label: 'Years Experience',
      target: 5,
      suffix: '+',
      sublabel: 'Social media & digital protection expertise since 2020',
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
    },
    {
      label: 'Completed Work / Cases',
      target: 10000,
      suffix: '+',
      sublabel: 'Legitimate account support & security consultations',
      icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
    },
    {
      label: 'Current / Ongoing Requests',
      target: 500,
      suffix: '+',
      sublabel: 'Active troubleshooting & threat advisory tickets',
      icon: <Award className="w-5 h-5 text-cyan-400" />,
    },
    {
      label: 'Team Members & Contributors',
      target: 70,
      suffix: '+',
      sublabel: 'Collaborators at Sherpur Cyber Agency',
      icon: <Users className="w-5 h-5 text-cyan-400" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const startTime = performance.now();

          const animateNumbers = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              stats.map((s) => Math.floor(s.target * easeProgress))
            );

            if (progress < 1) {
              requestAnimationFrame(animateNumbers);
            } else {
              setCounts(stats.map((s) => s.target));
            }
          };

          requestAnimationFrame(animateNumbers);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section
      id="stats-section"
      ref={sectionRef}
      className="py-16 relative border-y border-cyan-500/10 bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            METRICS & REACH
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
            PROVEN TRACK RECORD
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="cyber-card p-6 rounded-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/05 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-cyan-500/60 tracking-wider">
                  0{index + 1}_STAT
                </span>
              </div>

              <div className="my-2">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight flex items-baseline">
                  <span>{counts[index].toLocaleString()}</span>
                  <span className="text-cyan-400 ml-1">{item.suffix}</span>
                </div>
                <h3 className="text-sm font-semibold font-mono text-cyan-200/90 mt-1">
                  {item.label}
                </h3>
              </div>

              <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Mandatory Disclaimer from Section 8 */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-slate-500 tracking-wide">
            “Statistics shown are based on self-reported professional activity.”
          </p>
        </div>
      </div>
    </section>
  );
};
