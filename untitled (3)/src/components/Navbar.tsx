import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Terminal, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'social-recovery', 'about', 'expertise', 'agency', 'experience', 'projects', 'coding-signature', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'RECOVERY & SEC', href: '#social-recovery' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERTISE', href: '#expertise' },
    { label: 'AGENCY', href: '#agency' },
    { label: 'PROJECTS', href: '#projects' },
    { label: '<SIGNATURE/>', href: '#coding-signature' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          id="nav-logo"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-base font-bold tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
              IAE <span className="text-cyan-400">//</span> CYBER
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400">
              ISTIAK AHMED ENAN
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-all rounded-md cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Status Indicator & Quick Contact */}
        <div className="hidden sm:flex items-center gap-4">
          <div
            id="system-status-indicator"
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-[11px] font-mono text-emerald-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="tracking-wider">SYSTEM ONLINE</span>
          </div>

          <a
            href="#contact"
            id="nav-cta-contact"
            className="px-4 py-2 text-xs font-mono font-semibold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all shadow-[0_0_18px_rgba(6,182,212,0.4)] cursor-pointer"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-cyan-500/30 px-6 py-5 flex flex-col gap-3 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM ONLINE
            </div>
            <span className="text-[10px] font-mono text-slate-500">BD // +880 2100</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-mono tracking-wider text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-mono font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
