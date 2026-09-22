import React from 'react';
import { User, MapPin, Calendar, Briefcase, Award, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import enanPortrait from '../assets/images/enan_portrait.png';

export const AboutSection: React.FC = () => {
  const infoCards = [
    {
      label: 'NAME',
      value: 'Istiak Ahmed Enan',
      sub: 'Cyber Identity',
      icon: <User className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: 'LOCATION',
      value: 'Sherpur Sadar, Bangladesh',
      sub: 'ZIP 2100',
      icon: <MapPin className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: 'BORN',
      value: '13 February 2005',
      sub: 'Young Tech Professional',
      icon: <Calendar className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: 'EXPERIENCE',
      value: '5+ Years',
      sub: 'Active Digital Security',
      icon: <Award className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: 'ROLE',
      value: 'Founder & CEO',
      sub: 'Sherpur Cyber Agency',
      icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: 'SPECIALIZATION',
      value: 'Cyber Security & Social Media Security',
      sub: 'IT Analysis & Recovery',
      icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Bio, and Brand philosophy (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              // PROFILE_OVERVIEW
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              ABOUT ME
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                “I’m <span className="text-white font-medium">Istiak Ahmed Enan</span>, a Cyber Security
                Specialist, IT Analyst and Social Media Security & Recovery Specialist based in
                Sherpur, Bangladesh.
              </p>
              <p>
                For more than five years, I have been actively working in the social media and
                digital security ecosystem. My work focuses on helping users understand account-security
                problems, recover access where legitimate recovery channels are available, improve
                digital safety and deal with social-media-related technical challenges.
              </p>
              <p>
                I am also the Founder & CEO of <span className="text-cyan-300 font-medium">Sherpur Cyber Agency</span>, a
                technology-focused initiative built around digital safety, social media support and
                responsible online practices.”
              </p>
            </div>

            {/* Core Values Tagline */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
              {['Security', 'Technology', 'Trust', 'Recovery', 'Digital Protection'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-300 tracking-wider"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 6 Professional Information Cards (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-800/40 to-blue-500/20">
              <div className="bg-[#080e1a]/95 rounded-2xl p-6 sm:p-8 border border-cyan-500/20">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-[0_0_10px_rgba(6,182,212,0.3)] shrink-0">
                      <img
                        src={enanPortrait}
                        alt="Istiak Ahmed Enan"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/enan_portrait.png';
                        }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase">
                          VERIFIED CREDENTIALS
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-cyan-400">
                        OFFICIAL DOSSIER
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    ID: BD-2100-ENAN
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {infoCards.map((card) => (
                    <div
                      key={card.label}
                      className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-semibold uppercase">
                          {card.label}
                        </span>
                        <div className="p-1.5 rounded-md bg-slate-800 group-hover:bg-cyan-950/60 transition-colors">
                          {card.icon}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-200 transition-colors">
                        {card.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-1">
                        {card.sub}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Official Identity Confirmed
                  </span>
                  <a
                    href="#contact"
                    className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                  >
                    Request Consultation <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
