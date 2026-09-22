import React, { useState } from 'react';
import { Search, FileSearch, Compass, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

export const WorkProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'IDENTIFY',
      summary: 'Understand the technical or security issue.',
      description:
        'Conduct initial intake to diagnose the symptoms, examine user access states, determine affected platforms, and clarify legitimate ownership credentials without requesting private passwords.',
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      tag: 'INCIDENT_INTAKE',
    },
    {
      num: '02',
      title: 'ANALYZE',
      summary: 'Review available information and identify possible causes.',
      description:
        'Evaluate whether the compromise stems from phishing, malware session hijacking, outdated recovery emails, device theft, or platform policy restrictions to map out root causes.',
      icon: <FileSearch className="w-5 h-5 text-cyan-400" />,
      tag: 'DIAGNOSTIC_EVAL',
    },
    {
      num: '03',
      title: 'PLAN',
      summary: 'Determine the safest legitimate recovery or security approach.',
      description:
        'Formulate a systematic action plan utilizing verified official recovery channels, platform appeals, cryptographic security verifications, and compliance with platform terms of service.',
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      tag: 'STRATEGY_MAPPING',
    },
    {
      num: '04',
      title: 'SUPPORT',
      summary: 'Provide practical technical guidance and assistance.',
      description:
        'Walk through each step alongside the account holder, structuring support tickets, assisting with verification selfie or identity submission, and resolving configuration roadblocks.',
      icon: <Wrench className="w-5 h-5 text-cyan-400" />,
      tag: 'HANDS_ON_SUPPORT',
    },
    {
      num: '05',
      title: 'SECURE',
      summary: 'Recommend steps to reduce the chance of similar problems in the future.',
      description:
        'Harden the recovered or protected account: establish robust multi-factor authentication (TOTP/FIDO2), revoke untrusted active sessions, and deliver customized digital safety training.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      tag: 'POST_INCIDENT_HARDENING',
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-slate-950/40 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            // METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            HOW I WORK
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-light">
            A structured 5-step framework ensuring ethical, compliant, and durable digital outcomes.
          </p>
        </div>

        {/* 5-step Responsive Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`cyber-card rounded-xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/30 shadow-[0_0_20px_rgba(6,182,212,0.25)] scale-[1.02]'
                    : 'hover:border-cyan-500/40 opacity-90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-bold text-cyan-400">
                      {step.num}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {step.icon}
                    </div>
                  </div>

                  <div className="text-xs font-mono tracking-wider text-cyan-500/80 uppercase mb-1">
                    STEP {step.num}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-cyan-400/80">
                  {step.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Details */}
        <div className="mt-8 p-6 rounded-2xl cyber-card border-cyan-500/30 bg-gradient-to-r from-slate-900/90 via-[#0a1424]/90 to-slate-900/90">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center shrink-0 text-cyan-400">
                {steps[activeStep].icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    ACTIVE STEP DETAIL // {steps[activeStep].num} — {steps[activeStep].title}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 mt-1 font-light max-w-3xl leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="px-3 py-1.5 rounded bg-cyan-500/20 border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 cursor-pointer"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
