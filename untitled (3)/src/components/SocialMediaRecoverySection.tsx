import React, { useState } from 'react';
import {
  ShieldCheck,
  KeyRound,
  RotateCcw,
  UserX,
  FileCheck2,
  Lock,
  Smartphone,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  Terminal,
  Layers,
  Sparkles,
} from 'lucide-react';

interface PlatformCapability {
  platform: string;
  badgeColor: string;
  iconSvg: React.ReactNode;
  focus: string;
  scenarios: string[];
}

interface RecoveryStep {
  title: string;
  desc: string;
  duration: string;
  level: string;
}

export const SocialMediaRecoverySection: React.FC = () => {
  const [activePlatformTab, setActivePlatformTab] = useState<number>(0);
  const [selectedScenario, setSelectedScenario] = useState<number>(0);

  const platforms: PlatformCapability[] = [
    {
      platform: 'Facebook & Meta',
      badgeColor: '#1877F2',
      focus: 'Account Recovery, 2FA Lockouts & Hacked Profile Restoration',
      scenarios: [
        'Compromised account where email/phone was altered by attacker',
        'Stuck in two-factor authentication (2FA) loop / lost SMS codes',
        'Facebook Business Manager / Ad Account takeover remediation',
        'Disabled or locked personal profiles under policy review appeal',
      ],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      platform: 'WhatsApp Support',
      badgeColor: '#25D366',
      focus: 'Session Hijacking, Banned Numbers & Verification Code Defense',
      scenarios: [
        'WhatsApp account banned or suspended under spam false-positive',
        'Unauthorized secondary device linked via QR code hijack',
        'Two-step verification PIN forgotten or reset email compromised',
        'Group administrator hijack and emergency broadcast recovery',
      ],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366">
          <path d="M12.031 0C5.396 0 .029 5.367.029 12.001c0 2.123.554 4.197 1.609 6.024L0 24l6.163-1.616c1.769.965 3.765 1.472 5.868 1.472 6.634 0 12.001-5.367 12.001-12.002C24.032 5.367 18.665 0 12.031 0zm.001 21.968c-1.802 0-3.568-.484-5.111-1.401l-.367-.218-3.799.997 1.014-3.704-.239-.38a9.92 9.92 0 0 1-1.522-5.26c0-5.498 4.473-9.972 9.974-9.972 5.501 0 9.973 4.474 9.973 9.972 0 5.5-4.472 9.966-9.972 9.966z" />
        </svg>
      ),
    },
    {
      platform: 'Instagram Security',
      badgeColor: '#E1306C',
      focus: 'Impersonation Takedown, Compromised DMs & Username Theft',
      scenarios: [
        'Hacked Instagram handle promoting crypto or malicious spam links',
        'Impersonation clone accounts scamming your followers/clients',
        'Disabled Instagram account due to mistaken intellectual property claim',
        'Backup codes lost after switching to new mobile device',
      ],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E1306C">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      platform: 'Telegram & Channels',
      badgeColor: '#229ED9',
      focus: 'Channel Ownership Protection, Bot Security & Scam Takedown',
      scenarios: [
        'Telegram session hijacked via phishing SMS confirmation bot',
        'Stolen community group / channel administrative privileges',
        'Impersonator broadcast channels using duplicate profile photos',
        'Two-step verification cloud password lockout troubleshooting',
      ],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#229ED9">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.196 1.006.128.832.942z" />
        </svg>
      ),
    },
    {
      platform: 'YouTube & Google',
      badgeColor: '#FF0000',
      focus: 'Creator Channel Hijack Recovery, Brand Account Rescue',
      scenarios: [
        'YouTube channel hijacked via rogue sponsorship PDF / session cookie malware',
        'Google account 2FA prompt sent to attacker’s device',
        'Channel brand account permissions transferred to unverified manager',
        'Live stream strike resolution and policy recovery appeal',
      ],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF0000">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  const recoveryWorkflows: RecoveryStep[] = [
    {
      title: 'Step 1: Emergency Threat Containment',
      desc: 'Sever active attacker sessions, revoke malicious OAuth applications, and freeze unauthorized password reset triggers to halt further damage.',
      duration: '0-2 Hours',
      level: 'CRITICAL',
    },
    {
      title: 'Step 2: Identity & Ownership Verification',
      desc: 'Formulate government-issued ID proofs, registered phone carrier documentation, and creation-date metadata according to official platform dispute guidelines.',
      duration: 'Same Day',
      level: 'SECURITY DOSSIER',
    },
    {
      title: 'Step 3: Official Channel Escalation',
      desc: 'Submit structured recovery cases directly through Meta Concierge, Google Account Security, and specialized platform appeal workflows.',
      duration: '1-3 Days',
      level: 'PLATFORM REVIEW',
    },
    {
      title: 'Step 4: Hardened Security Re-Configuration',
      desc: 'Implement FIDO2 hardware security keys, remove compromised emails, generate offline backup codes, and educate the owner on social engineering prevention.',
      duration: 'Final Stage',
      level: 'ZERO-BREACH',
    },
  ];

  const currentPlatform = platforms[activePlatformTab];

  return (
    <section id="social-recovery" className="py-24 relative overflow-hidden bg-[#030814]">
      {/* Subtle glowing ambient cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff08_1px,transparent_1px),linear-gradient(to_bottom,#00ffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE SPECIALIZATION // 5+ YEARS EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            SOCIAL MEDIA SECURITY &amp; RECOVERY
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            “I specialize primarily in <strong className="text-cyan-300 font-semibold">Social Media Account Recovery and Proactive Defense</strong>.
            Over the past 5+ years, I have resolved thousands of compromised profiles, 2FA lockouts,
            session-hijack emergencies, and impersonation cases across Bangladesh and worldwide.”
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-center">
              <div className="text-2xl font-mono font-bold text-cyan-400">10K+</div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">Accounts Assisted</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-center">
              <div className="text-2xl font-mono font-bold text-emerald-400">98.6%</div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">Recovery Success</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-center">
              <div className="text-2xl font-mono font-bold text-sky-400">5+ Yrs</div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">Hands-on Mastery</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-center">
              <div className="text-2xl font-mono font-bold text-purple-400">100%</div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">Lawful &amp; Ethical</div>
            </div>
          </div>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {platforms.map((p, idx) => {
            const isActive = activePlatformTab === idx;
            return (
              <button
                key={p.platform}
                onClick={() => {
                  setActivePlatformTab(idx);
                  setSelectedScenario(0);
                }}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="w-5 h-5 shrink-0">{p.iconSvg}</div>
                <span>{p.platform}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Platform Focus Box */}
        <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-slate-800/40 to-blue-500/20 mb-14">
          <div className="bg-[#070e1c]/95 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/40">
                  {currentPlatform.iconSvg}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-mono font-bold text-white uppercase">
                      {currentPlatform.platform} DEFENSE MATRIX
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                      SPECIALIZED
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                    {currentPlatform.focus}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all shrink-0 cursor-pointer"
              >
                REQUEST RECOVERY ASSISTANCE
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPlatform.scenarios.map((sc, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-start gap-3 group"
                >
                  <div className="w-6 h-6 rounded-md bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold shrink-0 mt-0.5 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    0{i + 1}
                  </div>
                  <div>
                    <div className="text-sm font-mono font-medium text-slate-200 leading-snug">
                      {sc}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400/80 mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>Legitimate Resolution Protocol Available</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step-by-Step Legitimate Recovery Protocol */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white uppercase tracking-wider">
              HOW I RESOLVE ACCOUNT EMERGENCIES // 4-STAGE PIPELINE
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
              Transparent, lawful and technical execution designed for maximum success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recoveryWorkflows.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#091220] border border-cyan-500/20 hover:border-cyan-400/60 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-lg shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                      {step.level}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{step.duration}</span>
                  </div>
                  <h4 className="text-sm font-mono font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Enan Verified Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout Notice for User Trust */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-mono font-bold text-white">
                NEED IMMEDIATE SOCIAL MEDIA HELP?
              </h4>
              <p className="text-xs text-slate-300 font-light mt-1">
                Whether your Facebook ID is locked, WhatsApp is banned, or Instagram was hacked,
                I am ready to inspect your case through official and safe channels.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://t.me/Fuck_Your_System999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer whitespace-nowrap"
            >
              TELEGRAM DIRECT CHAT
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
