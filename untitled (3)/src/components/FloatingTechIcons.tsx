import React, { useState } from 'react';

interface BrandLogoDef {
  id: string;
  name: string;
  category: 'Social Media' | 'Programming' | 'Frameworks' | 'Security';
  left: string;
  top: string;
  size: number;
  animationClass: string;
  duration: string;
  delay: string;
  glowColor: string;
  svg: React.ReactNode;
}

export const FloatingTechIcons: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Expanded collection of 34 authentic logos covering Social Media, Programming & Cybersecurity
  const logos: BrandLogoDef[] = [
    // --- 1. SOCIAL MEDIA & MESSAGING ---
    {
      id: 'facebook',
      name: 'Facebook',
      category: 'Social Media',
      left: '3%',
      top: '10%',
      size: 40,
      animationClass: 'animate-drift-1',
      duration: '18s',
      delay: '0s',
      glowColor: '#1877F2',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11.5" fill="#1877F2" />
          <path
            d="M15.14 12.87l.45-3.03h-2.9v-1.97c0-.83.41-1.64 1.71-1.64h1.33V3.65s-1.2-.2-2.35-.2c-2.4 0-3.96 1.45-3.96 4.09v2.3H6.75v3.03h2.67V20.2c.54.08 1.09.13 1.65.13s1.11-.05 1.65-.13v-7.33h2.42z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      category: 'Social Media',
      left: '92%',
      top: '12%',
      size: 42,
      animationClass: 'animate-drift-2',
      duration: '22s',
      delay: '1s',
      glowColor: '#25D366',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11.5" fill="#25D366" />
          <path
            d="M17.47 14.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      id: 'telegram',
      name: 'Telegram',
      category: 'Social Media',
      left: '4%',
      top: '74%',
      size: 40,
      animationClass: 'animate-drift-3',
      duration: '20s',
      delay: '2s',
      glowColor: '#229ED9',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11.5" fill="#229ED9" />
          <path
            d="M5.4 11.8l11.6-4.5c.5-.2 1.1.1 1 .7l-2 9.4c-.1.6-.8.8-1.3.5l-3.3-2.4-1.6 1.5c-.2.2-.4.4-.8.4l.2-3.4 6.2-5.6c.3-.3-.1-.4-.4-.2l-7.7 4.9-3.3-1c-.6-.2-.6-.7.1-1z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      category: 'Social Media',
      left: '91%',
      top: '70%',
      size: 40,
      animationClass: 'animate-drift-5',
      duration: '23s',
      delay: '2.5s',
      glowColor: '#E1306C',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="ig_grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="50%" stopColor="#fd5949" />
              <stop offset="100%" stopColor="#d6249f" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig_grad)" />
          <path
            d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.6a1.17 1.17 0 11-2.34 0 1.17 1.17 0 012.34 0z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      id: 'meta',
      name: 'Meta',
      category: 'Social Media',
      left: '8%',
      top: '22%',
      size: 36,
      animationClass: 'animate-drift-4',
      duration: '24s',
      delay: '3s',
      glowColor: '#0081FB',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#030712" stroke="#0081FB" strokeWidth="1.6" />
          <path
            d="M16.9 8.2c-1.1 0-2.1.6-2.7 1.6-.7-1-1.7-1.6-2.8-1.6-2.1 0-3.6 1.8-3.6 4.1 0 2.3 1.5 4.1 3.6 4.1 1.1 0 2.1-.6 2.8-1.6.6 1 1.6 1.6 2.7 1.6 2 0 3.5-1.8 3.5-4.1 0-2.3-1.5-4.1-3.5-4.1zm-5.5 5.8c-.8 0-1.6-.8-1.6-2.3s.8-2.3 1.6-2.3c.9 0 1.6.9 1.6 2.3s-.7 2.3-1.6 2.3zm5.5 0c-.8 0-1.6-.8-1.6-2.3s.8-2.3 1.6-2.3c.9 0 1.6.9 1.6 2.3s-.7 2.3-1.6 2.3z"
            fill="#0081FB"
          />
        </svg>
      ),
    },
    {
      id: 'youtube',
      name: 'YouTube',
      category: 'Social Media',
      left: '88%',
      top: '32%',
      size: 38,
      animationClass: 'animate-drift-6',
      duration: '21s',
      delay: '1.2s',
      glowColor: '#FF0000',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="5" fill="#FF0000" />
          <polygon points="10,8.5 16,12 10,15.5" fill="#ffffff" />
        </svg>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      category: 'Social Media',
      left: '14%',
      top: '64%',
      size: 35,
      animationClass: 'animate-drift-3',
      duration: '25s',
      delay: '2.1s',
      glowColor: '#00F2FE',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#00F2FE" strokeWidth="1.2" />
          <path
            d="M16.5 7.5a4.2 4.2 0 01-2.5-1.5V14a3.5 3.5 0 11-3.5-3.5c.3 0 .6.04.9.11V13a1.5 1.5 0 101.5 1.5V4h2.1a4.2 4.2 0 003 3.5h-1.5z"
            fill="#FE2C55"
          />
          <path
            d="M15.5 6.5a4.2 4.2 0 01-2.5-1.5V13a3.5 3.5 0 11-3.5-3.5c.3 0 .6.04.9.11V12a1.5 1.5 0 101.5 1.5V3h2.1a4.2 4.2 0 003 3.5h-1.5z"
            fill="#25F4EE"
          />
        </svg>
      ),
    },
    {
      id: 'twitter-x',
      name: 'X (Twitter)',
      category: 'Social Media',
      left: '84%',
      top: '84%',
      size: 36,
      animationClass: 'animate-drift-2',
      duration: '23s',
      delay: '0.9s',
      glowColor: '#FFFFFF',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#ffffff" strokeWidth="1.2" />
          <path
            d="M15.8 6.5h1.9l-4.2 4.8 4.9 6.2h-3.8l-3-3.9-3.4 3.9H6.3l4.5-5.1L6 6.5h3.9l2.7 3.5 3.2-3.5zm-.7 9.8h1.1L9 7.6H7.8l7.3 8.7z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      id: 'discord',
      name: 'Discord',
      category: 'Social Media',
      left: '6%',
      top: '86%',
      size: 38,
      animationClass: 'animate-drift-5',
      duration: '22s',
      delay: '3.5s',
      glowColor: '#5865F2',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#5865F2" />
          <path
            d="M17.2 7.8c-1.1-.5-2.3-.9-3.5-1-.2.3-.3.8-.5 1.2-1.3-.2-2.7-.2-4 0-.2-.4-.4-.9-.6-1.2-1.2.1-2.4.5-3.5 1C3.3 10.4 2.8 14 3.4 17.5c1.4 1 2.8 1.6 4.1 2 .3-.4.6-.9.9-1.4-.5-.2-1-.4-1.4-.7.1-.1.2-.2.3-.3 2.7 1.2 5.6 1.2 8.3 0 .1.1.2.2.3.3-.4.3-.9.5-1.4.7.3.5.6 1 .9 1.4 1.3-.4 2.7-1 4.1-2 .7-4.1-.2-7.7-1.3-9.7zM9.5 14.7c-.8 0-1.5-.7-1.5-1.6s.6-1.6 1.5-1.6c.8 0 1.5.7 1.5 1.6s-.7 1.6-1.5 1.6zm5 0c-.8 0-1.5-.7-1.5-1.6s.6-1.6 1.5-1.6c.8 0 1.5.7 1.5 1.6s-.7 1.6-1.5 1.6z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      id: 'messenger',
      name: 'Messenger',
      category: 'Social Media',
      left: '94%',
      top: '50%',
      size: 37,
      animationClass: 'animate-drift-1',
      duration: '20s',
      delay: '1.7s',
      glowColor: '#00B2FF',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#0084FF" />
          <path
            d="M12 4.5c-4.4 0-8 3.3-8 7.3 0 2.3 1.2 4.3 3 5.7V20l2.4-1.3c.8.2 1.7.3 2.6.3 4.4 0 8-3.3 8-7.3s-3.6-7.2-8-7.2zm.8 9.9l-2-2.1-4 2.1 4.4-4.6 2.1 2.1 3.9-2.1-4.4 4.6z"
            fill="#ffffff"
          />
        </svg>
      ),
    },

    // --- 2. PROGRAMMING & CODING LANGUAGES ---
    {
      id: 'python',
      name: 'Python',
      category: 'Programming',
      left: '15%',
      top: '6%',
      size: 38,
      animationClass: 'animate-drift-1',
      duration: '21s',
      delay: '0.8s',
      glowColor: '#3776AB',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path
            d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.01 1.4h3v.4H6.2S4 4.9 4 8c0 3.1 1.8 3 1.8 3h1.1v-1.5c0-1.8 1.5-1.7 1.5-1.7h3.1c1.7 0 1.6-1.5 1.6-1.5V3.8S13.4 2 11.9 2zm-.9 1.1a.6.6 0 110 1.2.6.6 0 010-1.2z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.01-1.4h-3v-.4h5.8s2.2.2 2.2-2.9c0-3.1-1.8-3-1.8-3h-1.1v1.5c0 1.8-1.5 1.7-1.5 1.7h-3.1c-1.7 0-1.6 1.5-1.6 1.5v2.5s-.2 1.8 1.3 1.8zm.9-1.1a.6.6 0 110-1.2.6.6 0 010 1.2z"
            fill="#FFD43B"
          />
        </svg>
      ),
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Programming',
      left: '12%',
      top: '42%',
      size: 36,
      animationClass: 'animate-drift-2',
      duration: '25s',
      delay: '2.5s',
      glowColor: '#F7DF1E',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
          <path
            d="M9.5 17.5c-.3 0-.6-.1-.9-.3-.5-.4-.7-1-.6-1.7l1.4-.2c0 .4.2.7.5.9.3.1.7.1 1-.1.3-.2.4-.5.4-.8 0-.4-.2-.7-.7-.9l-.8-.4c-.7-.3-1.2-.7-1.5-1.1-.3-.4-.4-.9-.4-1.5 0-.7.3-1.4.8-1.8.5-.5 1.3-.7 2.2-.7.8 0 1.5.2 2 .6.5.4.8 1 .8 1.7l-1.4.3c-.1-.4-.2-.6-.5-.8-.3-.2-.6-.2-.9-.2-.4 0-.7.1-.9.3-.2.2-.3.4-.3.7 0 .3.2.6.6.8l.8.4c.8.3 1.4.7 1.7 1.1.3.5.5 1 .5 1.7 0 .8-.3 1.5-.9 2-.5.5-1.3.7-2.2.7zm6.7 0c-1.1 0-1.9-.3-2.5-.9-.6-.6-.9-1.5-.9-2.7V9h1.5v4.8c0 .8.2 1.4.5 1.8.3.4.8.6 1.4.6.6 0 1-.2 1.4-.6.3-.4.5-1 .5-1.8V9h1.5v4.9c0 1.2-.3 2.1-.9 2.7-.6.6-1.4.9-2.5.9z"
            fill="#000000"
          />
        </svg>
      ),
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Programming',
      left: '81%',
      top: '58%',
      size: 36,
      animationClass: 'animate-drift-6',
      duration: '21s',
      delay: '1s',
      glowColor: '#3178C6',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <path
            d="M5.5 9h6v1.4h-2.2v6.6H7.7v-6.6H5.5V9zm7.2 6.6c.3.5.7.9 1.2 1.1.5.2 1.1.4 1.7.4.7 0 1.2-.1 1.7-.4.4-.3.7-.7.7-1.2 0-.4-.1-.8-.4-1-.3-.3-.7-.5-1.4-.7l-.8-.3c-.7-.2-1.2-.5-1.5-.9-.3-.4-.5-.9-.5-1.4 0-.7.3-1.3.8-1.7.5-.4 1.2-.6 2.1-.6.7 0 1.4.2 2 .5.6.3 1 .8 1.2 1.4l-1.3.6c-.2-.4-.4-.7-.8-.8-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.2.3-.3.2-.5.5-.5.8 0 .3.1.5.3.7.2.2.6.4 1.2.6l.8.3c.9.3 1.5.7 1.9 1.1.4.5.6 1 .6 1.7 0 .8-.3 1.5-.9 2-.6.5-1.4.7-2.4.7-.9 0-1.8-.2-2.5-.7-.7-.5-1.1-1.2-1.3-2l1.4-.6z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      id: 'cpp',
      name: 'C++',
      category: 'Programming',
      left: '2%',
      top: '30%',
      size: 36,
      animationClass: 'animate-drift-3',
      duration: '22s',
      delay: '3.2s',
      glowColor: '#00599C',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <polygon points="12,2 21,7.2 21,16.8 12,22 3,16.8 3,7.2" fill="#00599C" />
          <path d="M11 8.5a3.5 3.5 0 00-3.5 3.5 3.5 3.5 0 003.5 3.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14.5 11v2M13.5 12h2" stroke="#659AD2" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18.5 11v2M17.5 12h2" stroke="#659AD2" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'terminal',
      name: 'Bash & Shell',
      category: 'Programming',
      left: '2%',
      top: '50%',
      size: 36,
      animationClass: 'animate-drift-4',
      duration: '19s',
      delay: '0.4s',
      glowColor: '#00FF66',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="2" y="3" width="20" height="18" rx="3.5" fill="#030712" stroke="#00FF66" strokeWidth="1.6" />
          <path d="M6 8l4 4-4 4" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="16" x2="18" y2="16" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'html5',
      name: 'HTML5',
      category: 'Programming',
      left: '18%',
      top: '80%',
      size: 34,
      animationClass: 'animate-drift-5',
      duration: '24s',
      delay: '1.4s',
      glowColor: '#E34F26',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <polygon points="3,2 21,2 19.4,20 12,22 4.6,20" fill="#E34F26" />
          <polygon points="12,3.8 19.5,3.8 18.2,18.4 12,20.1" fill="#EF652A" />
          <path d="M7 6.5h10l-.3 3.5H12v2.5h4.4l-.5 5.5-3.9 1.1-3.9-1.1-.3-3H10l.1 1.5 1.9.5 1.9-.5.2-2H7z" fill="#ffffff" />
        </svg>
      ),
    },
    {
      id: 'css3',
      name: 'CSS3',
      category: 'Programming',
      left: '74%',
      top: '78%',
      size: 34,
      animationClass: 'animate-drift-3',
      duration: '22s',
      delay: '2.8s',
      glowColor: '#1572B6',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <polygon points="3,2 21,2 19.4,20 12,22 4.6,20" fill="#1572B6" />
          <polygon points="12,3.8 19.5,3.8 18.2,18.4 12,20.1" fill="#33A9DC" />
          <path d="M7 6.5h10l-.3 3.5H9.5l.2 2.5h6.8l-.5 5.5-4 1.1-4-1.1-.2-2.5h2.1l.1 1.2 1.9.5 1.9-.5.2-2.5H7z" fill="#ffffff" />
        </svg>
      ),
    },

    // --- 3. FRAMEWORKS & MODERN TOOLS ---
    {
      id: 'react',
      name: 'React.js',
      category: 'Frameworks',
      left: '86%',
      top: '5%',
      size: 40,
      animationClass: 'animate-drift-1',
      duration: '22s',
      delay: '0.5s',
      glowColor: '#61DAFB',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        </svg>
      ),
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Frameworks',
      left: '22%',
      top: '70%',
      size: 36,
      animationClass: 'animate-drift-2',
      duration: '24s',
      delay: '3s',
      glowColor: '#5FA04E',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path d="M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2z" fill="#5FA04E" />
          <path d="M12 4.2l7 4v8.2l-7 4-7-4V8.2l7-4z" fill="#030712" />
          <path d="M10 16.5V9.8l4 4.5V9.8" stroke="#5FA04E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'Frameworks',
      left: '76%',
      top: '20%',
      size: 35,
      animationClass: 'animate-drift-4',
      duration: '26s',
      delay: '1.9s',
      glowColor: '#FFFFFF',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#ffffff" strokeWidth="1.4" />
          <path d="M9.5 8v8M14.5 8v4" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.5 8l6 8.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Frameworks',
      left: '26%',
      top: '90%',
      size: 36,
      animationClass: 'animate-drift-6',
      duration: '22s',
      delay: '2.4s',
      glowColor: '#38BDF8',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#030712" stroke="#38BDF8" strokeWidth="1.4" />
          <path
            d="M6 13c1.5-3 3.5-3 5-1.5s2.5 2 4.5 1.5c1.5-.5 2.5-2 3-3-1.5 3-3.5 3-5 1.5S11 9.5 9 10c-1.5.5-2.5 2-3 3zm-2 4c1.5-3 3.5-3 5-1.5s2.5 2 4.5 1.5c1.5-.5 2.5-2 3-3-1.5 3-3.5 3-5 1.5S9 13.5 7 14c-1.5.5-2.5 2-3 3z"
            fill="#38BDF8"
          />
        </svg>
      ),
    },
    {
      id: 'git',
      name: 'Git',
      category: 'Frameworks',
      left: '8%',
      top: '94%',
      size: 35,
      animationClass: 'animate-drift-3',
      duration: '21s',
      delay: '0.6s',
      glowColor: '#F05032',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <polygon points="12,2 22,12 12,22 2,12" fill="#F05032" />
          <circle cx="8" cy="12" r="2" fill="#ffffff" />
          <circle cx="14" cy="8" r="2" fill="#ffffff" />
          <circle cx="16" cy="14" r="2" fill="#ffffff" />
          <path d="M8 12h5a3 3 0 003-3V8M13 12v2" stroke="#ffffff" strokeWidth="1.8" />
        </svg>
      ),
    },

    // --- 4. CYBERSECURITY, LINUX & FORENSICS ---
    {
      id: 'kali',
      name: 'Kali Linux',
      category: 'Security',
      left: '68%',
      top: '66%',
      size: 40,
      animationClass: 'animate-drift-3',
      duration: '22s',
      delay: '2s',
      glowColor: '#00E5FF',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#030712" stroke="#00E5FF" strokeWidth="1.6" />
          <path
            d="M12 4L5 7v6c0 5 3.5 8.5 7 9.5 3.5-1 7-4.5 7-9.5V7l-7-3z"
            fill="rgba(0,229,255,0.18)"
            stroke="#00E5FF"
            strokeWidth="1.5"
          />
          <path
            d="M10 9l4 3-4 3"
            stroke="#00E5FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'linux-tux',
      name: 'Linux Kernel',
      category: 'Security',
      left: '30%',
      top: '15%',
      size: 38,
      animationClass: 'animate-drift-4',
      duration: '24s',
      delay: '1.1s',
      glowColor: '#FCC624',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#030712" stroke="#FCC624" strokeWidth="1.5" />
          <ellipse cx="12" cy="13" rx="5" ry="6" fill="#ffffff" />
          <ellipse cx="12" cy="14" rx="3.5" ry="4.5" fill="#030712" />
          <circle cx="10" cy="8.5" r="1.2" fill="#030712" />
          <circle cx="14" cy="8.5" r="1.2" fill="#030712" />
          <polygon points="12,10 10.5,11.5 13.5,11.5" fill="#FCC624" />
        </svg>
      ),
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'Security',
      left: '92%',
      top: '92%',
      size: 36,
      animationClass: 'animate-drift-5',
      duration: '23s',
      delay: '4s',
      glowColor: '#FFFFFF',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.8c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .28.18.6.69.49 3.97-1.36 6.83-5.18 6.83-9.7C22 6.58 17.52 2 12 2z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'Security',
      left: '77%',
      top: '44%',
      size: 36,
      animationClass: 'animate-drift-1',
      duration: '26s',
      delay: '4.5s',
      glowColor: '#2496ED',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path
            d="M22.5 11c-.5-.4-1.3-.4-1.8 0-.4.3-.6.8-.5 1.3-1-1.3-2.5-1.8-3.7-1.3-.2-.5-.5-.9-.9-1.2l-.7-.4-.4.7c-.5.8-.3 1.8.3 2.5C13.5 12.8 11 13 8 13c-.5 0-1 .1-1.5.2l-.5-.7-.4-.6-.6.4c-1.3.8-1.5 2.5-.5 3.7.8.9 2 1.4 3.2 1.4 5.8 0 10.4-3.4 12-6.5.9.1 1.7-.1 2.3-.5V11z"
            fill="#2496ED"
          />
          <rect x="6" y="9.5" width="2" height="1.8" fill="#2496ED" />
          <rect x="8.5" y="9.5" width="2" height="1.8" fill="#2496ED" />
          <rect x="11" y="9.5" width="2" height="1.8" fill="#2496ED" />
        </svg>
      ),
    },
    {
      id: 'vscode',
      name: 'VS Code',
      category: 'Security',
      left: '14%',
      top: '92%',
      size: 35,
      animationClass: 'animate-drift-4',
      duration: '23s',
      delay: '1s',
      glowColor: '#007ACC',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path
            d="M17.5 2.5l5 2.5v14l-5 2.5-9.5-8.5 9.5-10.5zm-9.5 10.5l-4-3-2 1.5 4 3.5-4 3.5 2 1.5 4-3.5 5.5 5v-13l-5.5 4.5z"
            fill="#007ACC"
          />
        </svg>
      ),
    },
    {
      id: 'wireshark',
      name: 'Wireshark',
      category: 'Security',
      left: '64%',
      top: '12%',
      size: 38,
      animationClass: 'animate-drift-2',
      duration: '21s',
      delay: '3.1s',
      glowColor: '#1679A7',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle cx="12" cy="12" r="11" fill="#030712" stroke="#1679A7" strokeWidth="1.6" />
          <path
            d="M6 16c2-4 5-8 9-9-1 3-1 6 3 9-4 0-8-1-12 0z"
            fill="#1679A7"
          />
        </svg>
      ),
    },
    {
      id: 'shield-lock',
      name: '2FA & Crypto Defense',
      category: 'Security',
      left: '4%',
      top: '40%',
      size: 38,
      animationClass: 'animate-drift-1',
      duration: '20s',
      delay: '1.5s',
      glowColor: '#00FFFF',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path
            d="M12 2L4 6v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V6l-8-4z"
            fill="rgba(0,255,255,0.15)"
            stroke="#00FFFF"
            strokeWidth="1.8"
          />
          <rect x="9" y="11" width="6" height="5" rx="1" fill="#00FFFF" />
          <path d="M10 11V9a2 2 0 114 0v2" stroke="#00FFFF" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      id: 'burp-pentest',
      name: 'Penetration Testing',
      category: 'Security',
      left: '88%',
      top: '40%',
      size: 36,
      animationClass: 'animate-drift-3',
      duration: '24s',
      delay: '2.7s',
      glowColor: '#FF6600',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <polygon points="12,2 21,7.5 21,18.5 12,24 3,18.5 3,7.5" fill="rgba(255,102,0,0.15)" stroke="#FF6600" strokeWidth="1.6" />
          <circle cx="12" cy="13" r="3" fill="#FF6600" />
          <line x1="12" y1="5" x2="12" y2="8" stroke="#FF6600" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {logos.map((item) => {
        const isHovered = hoveredId === item.id;

        return (
          /* Outer continuous drift container: uses GPU transform3d only, no layout shifts */
          <div
            key={item.id}
            className={`absolute pointer-events-auto cursor-pointer will-change-transform ${item.animationClass}`}
            style={{
              left: item.left,
              top: item.top,
              animationDuration: item.duration,
              animationDelay: item.delay,
              contain: 'layout style',
            }}
          >
            {/* Inner interactive target with vibrant ambient glow */}
            <div
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative select-none flex items-center justify-center p-1 rounded-xl transition-all duration-300 ease-out"
              style={{
                width: `${item.size}px`,
                height: `${item.size}px`,
                // Enhanced glow so icons are unmistakably vibrant & eye-catching
                filter: isHovered
                  ? `drop-shadow(0 0 18px ${item.glowColor}) brightness(1.35)`
                  : `drop-shadow(0 0 7px ${item.glowColor}55) brightness(1.05)`,
                opacity: isHovered ? 1 : 0.68,
                transform: isHovered ? 'scale(1.28) translateZ(0)' : 'scale(1) translateZ(0)',
              }}
            >
              {/* Brand Vector Icon */}
              <div className="w-full h-full pointer-events-none">
                {item.svg}
              </div>

              {/* Hover/Tap Tooltip Pill */}
              {isHovered && (
                <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-[#030712]/95 border border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-1.5 whitespace-nowrap z-50 pointer-events-none animate-fadeIn">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-ping"
                    style={{ backgroundColor: item.glowColor }}
                  />
                  <span className="text-[10px] font-mono font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <span className="text-[8px] font-mono text-cyan-300">
                    //{item.category}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
