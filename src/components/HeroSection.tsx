import React, { useState } from 'react';
import { Shield, ArrowRight, Activity, CheckCircle2, Sparkles } from 'lucide-react';
import enanPortrait from '../assets/images/enan_portrait.png';

export const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 sm:pt-24 sm:pb-14 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Mobile First: Compact Cyber Avatar Header on Small Devices so photo is seen immediately */}
        <div className="lg:hidden flex flex-col items-center text-center mb-5">
          <div className="relative w-32 h-40 sm:w-40 sm:h-48 mb-3">
            {/* Tech Corner Accents */}
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
            <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

            {/* Glowing outer aura */}
            <div className="absolute inset-0 rounded-xl border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.3)] pointer-events-none" />

            {/* Main Picture Container */}
            <div className="w-full h-full rounded-xl overflow-hidden border border-cyan-400/60 bg-slate-900 relative">
              <img
                src={enanPortrait}
                alt="Istiak Ahmed Enan"
                className="w-full h-full object-cover object-top"
                loading="eager"
                onError={(e) => {
                  // Fallback to public root copy
                  (e.currentTarget as HTMLImageElement).src = '/enan_portrait.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-x-0 h-0.5 bg-cyan-400 opacity-70 animate-scanline pointer-events-none shadow-[0_0_8px_#00e5ff]" />
            </div>

            {/* Small status pill below portrait */}
            <div className="absolute -bottom-2.5 inset-x-2 px-2 py-0.5 rounded-full bg-black/90 border border-cyan-500/50 backdrop-blur-md flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-mono text-cyan-300 font-bold tracking-wider">
                ISTIAK AHMED ENAN
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text & Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Badge */}
            <div
              id="hero-availability-badge"
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-[11px] sm:text-xs font-mono tracking-wider mb-4 sm:mb-5 shadow-[0_0_15px_rgba(6,182,212,0.15)] max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
              <span className="truncate">AVAILABLE FOR SECURITY &amp; DIGITAL SUPPORT</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-1 mb-3">
              <span className="text-[11px] sm:text-xs md:text-sm font-mono tracking-[0.2em] sm:tracking-[0.25em] text-cyan-400 uppercase font-semibold">
                DIGITAL IDENTITY &amp; PROTECTION
              </span>
              <h1 className="text-2xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white uppercase">
                I’M ISTIAK AHMED ENAN
              </h1>
              <h2 className="text-base sm:text-2xl xl:text-3xl font-bold font-mono tracking-wide sm:tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                SOCIAL MEDIA SECURITY &amp; RECOVERY SPECIALIST
              </h2>
            </div>

            {/* Supporting Line */}
            <div className="text-[11px] sm:text-xs md:text-sm font-mono text-cyan-200/90 font-medium mb-4 sm:mb-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
              <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-400/50 text-cyan-300">
                Primary Specialty: Account Recovery
              </span>
              <span className="text-cyan-500 hidden sm:inline">•</span>
              <span>Cyber Security</span>
              <span className="text-cyan-500">•</span>
              <span>IT Analyst</span>
              <span className="text-cyan-500 hidden sm:inline">•</span>
              <span className="text-slate-300 font-semibold block sm:inline">
                Founder &amp; CEO — Sherpur Cyber Agency
              </span>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mb-5 sm:mb-6 font-light">
              “Specializing in <strong className="text-cyan-300 font-semibold">Social Media Security, Account Recovery &amp; Threat Defense</strong>.
              Over the past 5+ years, I have provided technical resolution and digital security protocols for 10,000+ accounts across Facebook, Instagram, WhatsApp, and Telegram—recovering compromised profiles, resolving complex 2FA lockouts, and securing online identities.”
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-lg mb-5 sm:mb-6">
              <div className="p-2 sm:p-3 rounded-lg border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm text-center">
                <div className="text-cyan-400 font-mono text-base sm:text-2xl font-bold">5+ Yrs</div>
                <div className="text-slate-400 text-[9px] sm:text-[11px] font-mono">Social Recovery</div>
              </div>
              <div className="p-2 sm:p-3 rounded-lg border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm text-center">
                <div className="text-cyan-400 font-mono text-base sm:text-2xl font-bold">10K+</div>
                <div className="text-slate-400 text-[9px] sm:text-[11px] font-mono">Cases Supported</div>
              </div>
              <div className="p-2 sm:p-3 rounded-lg border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm text-center">
                <div className="text-cyan-400 font-mono text-base sm:text-2xl font-bold">70+</div>
                <div className="text-slate-400 text-[9px] sm:text-[11px] font-mono">Agency Team</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="#social-recovery"
                id="hero-cta-recovery"
                className="w-full sm:w-auto px-5 py-3 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                SOCIAL RECOVERY MATRIX
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#coding-signature"
                id="hero-cta-coding"
                className="w-full sm:w-auto px-5 py-3 rounded border border-cyan-500/40 hover:border-cyan-400 bg-slate-900/80 hover:bg-cyan-950/40 text-cyan-300 font-mono font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
              >
                &lt;CODE SIGNATURE /&gt;
              </a>
            </div>
          </div>

          {/* Right Column: Desktop Compact Cyber Portrait Interface (5 Cols) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
            <div className="relative w-full max-w-[310px] xl:max-w-[330px] aspect-[3/4] flex items-center justify-center">
              {/* Outer Circular Scanning Radar Ring */}
              <div
                className="absolute inset-0 -m-4 rounded-3xl border border-cyan-500/20 pointer-events-none"
                style={{
                  boxShadow: '0 0 35px rgba(0, 220, 255, 0.1), inset 0 0 25px rgba(0, 220, 255, 0.05)',
                }}
              />

              {/* Pulsing Scanning Ring */}
              <div className="absolute inset-0 -m-6 rounded-full border border-cyan-400/15 animate-radar pointer-events-none" />

              {/* Tech Corner Brackets */}
              <div className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -top-2.5 -right-2.5 w-6 h-6 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -bottom-2.5 -left-2.5 w-6 h-6 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

              {/* Main Portrait Frame - Compact, perfectly proportioned */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cyan-500/40 bg-gradient-to-b from-slate-900 to-black shadow-2xl shadow-cyan-950/40">
                {/* Real User Image */}
                <img
                  src={enanPortrait}
                  alt="Istiak Ahmed Enan - Cyber Security Specialist"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/enan_portrait.jpg';
                  }}
                />

                {/* Subtle cyber gradient blend overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70 pointer-events-none" />

                {/* Laser scan line across portrait */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-scanline pointer-events-none shadow-[0_0_12px_#00e5ff]" />

                {/* Overlay holographic technical data at bottom */}
                <div className="absolute bottom-2.5 inset-x-2.5 p-2.5 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono font-bold text-white tracking-wider">
                        ISTIAK AHMED ENAN
                      </span>
                      <span className="text-[8px] font-mono text-cyan-400">
                        IDENTITY VERIFIED // BD-2100
                      </span>
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 border-l border-slate-700 pl-2">
                    5+ YRS EXP
                  </div>
                </div>
              </div>

              {/* Floating Holographic Card: Security Node (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-2.5 py-1.5 rounded-lg bg-[#0a121e]/90 backdrop-blur-md border border-cyan-500/40 text-left shadow-lg hidden sm:flex items-center gap-2 animate-float">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <div>
                  <div className="text-[9px] font-mono font-bold text-cyan-300">
                    SEC_DEFENSE: ACTIVE
                  </div>
                  <div className="text-[7px] font-mono text-slate-400">
                    LEGITIMATE PROTOCOLS
                  </div>
                </div>
              </div>

              {/* Floating Holographic Card: Agency Node (Bottom Right) */}
              <div
                className="absolute -bottom-4 -right-4 sm:-right-6 px-2.5 py-1.5 rounded-lg bg-[#0a121e]/90 backdrop-blur-md border border-cyan-500/40 text-left shadow-lg hidden sm:flex items-center gap-2"
                style={{ animation: 'float-slow 7s ease-in-out infinite alternate', animationDelay: '1s' }}
              >
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                <div>
                  <div className="text-[9px] font-mono font-bold text-sky-300">
                    SHERPUR CYBER AGENCY
                  </div>
                  <div className="text-[7px] font-mono text-slate-400">
                    FOUNDER & CEO // 70+ TEAM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

