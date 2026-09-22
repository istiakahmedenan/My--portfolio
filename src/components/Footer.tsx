import React, { useState } from 'react';
import { Shield, ArrowUp, X, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative border-t border-cyan-500/20 bg-[#02050c] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Credential Block (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-mono text-lg font-bold text-white tracking-wider">
                ISTIAK AHMED ENAN
              </span>
            </div>

            <p className="text-xs sm:text-sm font-mono text-cyan-300">
              Cyber Security Specialist • IT Analyst • Social Media Security & Recovery Specialist
            </p>

            <p className="text-xs text-slate-300 font-mono">
              Founder & CEO — <span className="text-white font-medium">Sherpur Cyber Agency</span>
            </p>

            <p className="text-xs font-mono text-slate-400">
              Location: Sherpur Sadar, Sherpur, Bangladesh — ZIP 2100
            </p>

            {/* Social quick pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://www.facebook.com/share/1DPiQaRgF7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 text-xs font-mono border border-slate-800 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.facebook.com/share/1GZBp2mKf4/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 text-xs font-mono border border-slate-800 transition-colors"
              >
                Agency Page
              </a>
              <a
                href="https://t.me/Fuck_Your_System999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 text-xs font-mono border border-slate-800 transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://github.com/istiakahmedenan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 text-xs font-mono border border-slate-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:secistiak@gmail.com"
                className="px-3 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 text-xs font-mono border border-slate-800 transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-cyan-400 transition-colors">
                  EXPERTISE
                </a>
              </li>
              <li>
                <a href="#agency" className="hover:text-cyan-400 transition-colors">
                  SHERPUR CYBER AGENCY
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  SELECTED WORK
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Return to top & operational badge (3 Cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-lg border border-cyan-500/30 bg-slate-900 hover:bg-cyan-950/60 text-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-2 text-xs font-mono cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-left md:text-right mt-6 md:mt-0 text-[11px] font-mono text-slate-500 space-y-1">
              <div>HOSTED_CONTAINER: ACTIVE</div>
              <div>LATENCY: OPTIMAL</div>
              <div className="text-cyan-500">BD // ASIA-EAST REGION</div>
            </div>
          </div>
        </div>

        {/* Mandatory Ethical Notice (Section 29) */}
        <div className="my-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono text-cyan-200/80 leading-relaxed">
            “This portfolio represents professional cybersecurity, digital-safety and
            technical-support activities. All security-related assistance is intended for lawful,
            authorized and responsible purposes.”
          </p>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Istiak Ahmed Enan. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalContent('privacy')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalContent('terms')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Terms of Support
            </button>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Privacy & Terms Dialog */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#09111e] border border-cyan-500/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold font-mono text-white mb-4">
              {modalContent === 'privacy' ? 'PRIVACY POLICY' : 'TERMS OF SUPPORT'}
            </h3>

            <div className="text-xs text-slate-300 font-light space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
              {modalContent === 'privacy' ? (
                <>
                  <p>
                    <strong>Data Confidentiality:</strong> All interactions, verification
                    discussions, and technical diagnostics performed by Istiak Ahmed Enan and
                    Sherpur Cyber Agency are held in strict confidence.
                  </p>
                  <p>
                    <strong>No Password Ingestion:</strong> We never request, log, or store account
                    passwords, payment PINs, or unprompted credentials. Verification takes place
                    directly on the official platform interfaces.
                  </p>
                  <p>
                    <strong>Transient Records:</strong> Any diagnostic screenshots or logs supplied
                    during support sessions are securely erased upon case resolution.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Lawful Scope:</strong> Services are strictly limited to legitimate
                    account recovery assistance, digital safety advisory, and security hardening.
                  </p>
                  <p>
                    <strong>No Offensive Operations:</strong> We do not conduct unauthorized access,
                    hacking of third-party systems, or unlawful bypasses.
                  </p>
                  <p>
                    <strong>Platform Discretion:</strong> Final account reinstatement decisions
                    rest solely with the respective platform administrators (Meta, Google, etc.).
                    We assist in structuring compliant appeals through official channels.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setModalContent(null)}
                className="px-4 py-2 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold cursor-pointer"
              >
                ACKNOWLEDGE & CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
