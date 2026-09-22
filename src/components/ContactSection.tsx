import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, MessageCircle, Globe, CheckCircle2, AlertCircle, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactChannels = [
    {
      name: 'Email',
      value: 'secistiak@gmail.com',
      href: 'mailto:secistiak@gmail.com',
      actionLabel: 'Send Email',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      copyable: true,
      tag: 'DIRECT_MAIL',
    },
    {
      name: 'Facebook',
      value: 'Istiak Ahmed Enan',
      href: 'https://www.facebook.com/share/1DPiQaRgF7/?mibextid=wwXIfr',
      actionLabel: 'Connect on Facebook',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      copyable: false,
      tag: 'OFFICIAL_PROFILE',
    },
    {
      name: 'WhatsApp',
      value: '@istiakahmedenan.2100',
      href: 'https://wa.me/?text=Hello%20Istiak%2C%20I%20am%20reaching%20out%20regarding%20security%20support.',
      actionLabel: 'Chat via WhatsApp',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      copyable: true,
      tag: 'INSTANT_MESSAGING',
    },
    {
      name: 'Telegram',
      value: 'Telegram Profile',
      href: 'https://t.me/Fuck_Your_System999',
      actionLabel: 'Open Telegram',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
      copyable: false,
      tag: 'ENCRYPTED_CHANNEL',
    },
    {
      name: 'GitHub',
      value: 'istiakahmedenan',
      href: 'https://github.com/istiakahmedenan',
      actionLabel: 'View Codebase',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      copyable: false,
      tag: 'DEVELOPER_HUB',
    },
  ];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide message details.';
    } else if (formData.message.length < 15) {
      errs.message = 'Please describe the inquiry in at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSendError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_gbrbg6w';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_6afyuyu';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'WEGOKMMQQxxPVf_ZS';

    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      user_name: formData.name,
      from_email: formData.email,
      email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Istiak Ahmed Enan',
      service: 'Sherpur Cyber Agency Contact Portal',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      console.error('EmailJS transmission failed:', err);
      setIsSubmitting(false);
      const errorMsg =
        typeof err === 'object' && err !== null && 'text' in err
          ? String((err as { text: unknown }).text)
          : err instanceof Error
            ? err.message
            : 'Failed to dispatch transmission via EmailJS. Please try again or reach out directly to secistiak@gmail.com.';
      setSendError(errorMsg);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            // SECURE_COMMUNICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            LET’S CONNECT
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg font-light">
            “Have a cybersecurity, social media security or digital-support question? Get in touch.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono tracking-wider text-cyan-400 font-bold uppercase mb-2">
              VERIFIED CHANNELS & PROFILES
            </div>

            {contactChannels.map((channel) => (
              <div
                key={channel.name}
                className="cyber-card rounded-xl p-4 transition-all duration-200 hover:border-cyan-400/60 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 flex items-center justify-center text-slate-300 transition-colors shrink-0">
                    {channel.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white uppercase font-mono">
                        {channel.name}
                      </span>
                      <span className="text-[9px] font-mono text-cyan-500 bg-cyan-950/40 px-1.5 py-0.2 rounded border border-cyan-500/20">
                        {channel.tag}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 font-mono truncate mt-0.5">
                      {channel.value}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {channel.copyable && (
                    <button
                      onClick={() => handleCopy(channel.value, channel.name)}
                      className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                      title={`Copy ${channel.name}`}
                      aria-label={`Copy ${channel.name}`}
                    >
                      {copiedField === channel.name ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-slate-900 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    title={channel.actionLabel}
                    aria-label={channel.actionLabel}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}

            {/* Response Time SLA Notice */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="text-xs font-mono text-slate-400">
                <span className="text-white font-semibold block">SECURITY GUARANTEE:</span>
                Inquiries are treated strictly in compliance with personal privacy standards. Never
                submit raw account passwords or unprompted credentials.
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="cyber-card rounded-2xl p-4 sm:p-8 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    TRANSMISSION PORTAL // SSL-ENCRYPTED
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                  INPUT_VALIDATION_ACTIVE
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-mono text-white">
                    TRANSMISSION DISPATCHED SUCCESSFULLY
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, your message has been formatted and queued. Istiak Ahmed Enan or the
                    Sherpur Cyber Agency team will review and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-mono text-xs font-bold hover:bg-cyan-500/30 transition-all cursor-pointer"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-sm font-sans placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-400 focus:ring-rose-500/30'
                            : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/30'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-sm font-sans placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-400 focus:ring-rose-500/30'
                            : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/30'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase"
                    >
                      Subject / Inquiry Type *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Social Media Account Security Audit"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-sm font-sans placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/30'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase"
                    >
                      Message / Incident Overview *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the platform, symptoms, or cybersecurity consultation needed. (Do not include sensitive passwords)."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-sm font-sans placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/30'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* EmailJS Transmission Error Alert */}
                  {sendError && (
                    <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/50 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div className="text-xs font-mono text-rose-300">
                        <span className="font-bold block uppercase text-rose-200">Transmission Alert:</span>
                        {sendError}
                        <div className="mt-2">
                          <a
                            href="mailto:secistiak@gmail.com"
                            className="text-cyan-400 underline hover:text-cyan-300"
                          >
                            Click here to dispatch directly to secistiak@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    id="submit-contact-button"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-black font-mono font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                        <span>DISPATCHING VIA EMAILJS…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE // EMAILJS ACTIVE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
