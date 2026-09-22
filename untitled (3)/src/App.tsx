import React, { useState } from 'react';
import { StartupSequence } from './components/StartupSequence';
import { CyberCursor } from './components/CyberCursor';
import { CyberBackground } from './components/CyberBackground';
import { FloatingTechIcons } from './components/FloatingTechIcons';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { AgencySection } from './components/AgencySection';
import { TimelineSection } from './components/TimelineSection';
import { WorkProcessSection } from './components/WorkProcessSection';
import { SecurityPrinciplesSection } from './components/SecurityPrinciplesSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { SocialMediaRecoverySection } from './components/SocialMediaRecoverySection';
import { CodingSignatureSection } from './components/CodingSignatureSection';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const [startupFinished, setStartupFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Cinematic Terminal Startup Preloader */}
      {!startupFinished && (
        <StartupSequence onComplete={() => setStartupFinished(true)} />
      )}

      {/* 2. Custom Cyber Desktop Cursor */}
      <CyberCursor />

      {/* 3. Deep Futuristic Animated Cyber Background */}
      <CyberBackground />

      {/* 4. Drifting Animated Technology Platform Icons */}
      <FloatingTechIcons />

      {/* 5. Sticky Navigation Bar */}
      <Navbar />

      {/* 6. Main Portfolio Content with Intersection Observer Scroll Reveals */}
      <main className="relative z-10">
        <ScrollReveal animation="fade-up" delay={100}>
          <HeroSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <StatsSection />
        </ScrollReveal>

        {/* Primary Specialization: Social Media Recovery & Security */}
        <ScrollReveal animation="fade-up" delay={80}>
          <SocialMediaRecoverySection />
        </ScrollReveal>

        <ScrollReveal animation="slide-in-left" delay={80}>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <ExpertiseSection />
        </ScrollReveal>

        <ScrollReveal animation="slide-in-right" delay={80}>
          <AgencySection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <TimelineSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <WorkProcessSection />
        </ScrollReveal>

        <ScrollReveal animation="slide-in-left" delay={80}>
          <SecurityPrinciplesSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <TechStackSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal animation="slide-in-right" delay={80}>
          <GithubSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <ContactSection />
        </ScrollReveal>

        {/* Bottom Interactive Coding Signature for Istiak Ahmed Enan */}
        <ScrollReveal animation="fade-up" delay={80}>
          <CodingSignatureSection />
        </ScrollReveal>
      </main>

      {/* 7. Comprehensive Footer with Ethical Security Notice */}
      <Footer />
    </div>
  );
}


