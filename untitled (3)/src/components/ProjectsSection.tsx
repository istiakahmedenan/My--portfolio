import React, { useState } from 'react';
import { ShieldCheck, UserCheck, AlertOctagon, Wrench, ArrowUpRight, X, CheckCircle, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types/index';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'proj-1',
      title: 'SOCIAL MEDIA SECURITY SUPPORT',
      tagline: 'Account security analysis and protection guidance.',
      category: 'Security Architecture',
      description:
        'Comprehensive security auditing and configuration for high-exposure social media accounts facing credential brute-forcing, targeted spear-phishing, or unauthorized session activity.',
      scope: [
        'Hardware security key (FIDO2/WebAuthn) & TOTP authenticator setup',
        'Revocation of rogue OAuth tokens and connected third-party integrations',
        'Audit of linked recovery numbers, backup codes, and active session locations',
      ],
      securityProtocol: 'Zero-Trust Credential Hardening & 2FA Enforcement',
      technologies: ['OAuth 2.0', 'FIDO2 / WebAuthn', 'TOTP', 'Platform Security Settings'],
      status: 'VERIFIED_FRAMEWORK',
    },
    {
      id: 'proj-2',
      title: 'ACCOUNT RECOVERY ASSISTANCE',
      tagline: 'Support for legitimate platform recovery processes.',
      category: 'Access Recovery',
      description:
        'Technical guidance through legitimate official channels for users locked out of accounts due to session hijacking, compromised passwords, or outdated recovery methods.',
      scope: [
        'Verification checklist preparation: identity documents & historical metadata',
        'Official support appeal structuring following platform community guidelines',
        'Post-recovery containment to prevent immediate re-compromise',
      ],
      securityProtocol: 'Official Platform Appeals & Legal Recovery Arbitration',
      technologies: ['Identity Verification Frameworks', 'Platform Support APIs', 'Metadata Auditing'],
      status: 'ACTIVE_DEPLOYMENT',
    },
    {
      id: 'proj-3',
      title: 'DIGITAL SAFETY AWARENESS',
      tagline: 'Helping users understand common online risks.',
      category: 'Community Education',
      description:
        'Educational outreach programs and digital guides designed to teach everyday users how to identify deceptive social engineering attacks, fake login portals, and gambling lure campaigns.',
      scope: [
        'Identification of malicious APKs and scam SMS/WhatsApp links',
        'Workshops on safe browsing habits and digital identity stewardship',
        'Anti-gambling and anti-harassment community safety documentation',
      ],
      securityProtocol: 'Proactive Threat Education & Risk Neutralization',
      technologies: ['Threat Intelligence Dissemination', 'Cyber Hygiene Checklists'],
      status: 'COMMUNITY_INITIATIVE',
    },
    {
      id: 'proj-4',
      title: 'SOCIAL MEDIA TECHNICAL SUPPORT',
      tagline: 'Troubleshooting platform-related technical issues.',
      category: 'Technical Triage',
      description:
        'Targeted technical troubleshooting for social media business pages, creator profiles, and group administrators encountering persistent bugs, lockouts, or platform sync errors.',
      scope: [
        'Resolution of multi-admin privilege sync failures and permission deadlocks',
        'Audit of business manager accounts and verification badge prerequisites',
        'Diagnosis of browser extension conflicts and session cookie corruptions',
      ],
      securityProtocol: 'Systematic Diagnostic Triage & Configuration Recovery',
      technologies: ['Platform Developer Consoles', 'Meta Business Suite', 'Browser DevTools'],
      status: 'ACTIVE_DEPLOYMENT',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            // PORTFOLIO_SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            SELECTED WORK & EXPERIENCE
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-light">
            Core engagement categories and verified support frameworks delivered across digital platforms.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item, idx) => (
            <div
              key={item.id}
              className="cyber-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                    CASE_MODULE_0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 border border-slate-800 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-mono text-cyan-200/90 mb-4">
                  {item.tagline}
                </p>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{item.status}</span>
                </div>

                <button
                  onClick={() => setSelectedProject(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for View Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#09111e] border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 cursor-pointer"
                aria-label="Close details modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                  // CASE_STUDY_DETAILS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-cyan-300 font-mono text-sm mb-6">
                {selectedProject.tagline}
              </p>

              <div className="space-y-6 text-sm text-slate-300 font-light leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                    SCOPE OF ENGAGEMENT
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.scope.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-1">
                    Security Protocol Standard:
                  </div>
                  <div className="text-sm font-mono text-cyan-300 font-medium">
                    {selectedProject.securityProtocol}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                    REPRESENTATIVE TOOLING & ENVIRONMENT
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded bg-slate-800 text-xs font-mono text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-500">
                  Lawful & Authorized Assistance Only
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs tracking-wider transition-all"
                >
                  CONSULT ON SIMILAR CASE
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
