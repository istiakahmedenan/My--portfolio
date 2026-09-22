import React, { useState, useEffect } from 'react';
import { Shield, Terminal, CheckCircle2, Lock } from 'lucide-react';

interface StartupSequenceProps {
  onComplete: () => void;
}

export const StartupSequence: React.FC<StartupSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SECURE PORTFOLIO…');
  const [hexLine, setHexLine] = useState('0x7F 0x00 0x00 0x01');
  const [isGranted, setIsGranted] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Generate simulated cryptographic hex line updates
    const hexInterval = setInterval(() => {
      const chars = '0123456789ABCDEF';
      let str = 'SEC_HASH: ';
      for (let i = 0; i < 4; i++) {
        str += '0x' + chars[Math.floor(Math.random() * 16)] + chars[Math.floor(Math.random() * 16)] + ' ';
      }
      setHexLine(str);
    }, 90);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          clearInterval(hexInterval);
          setStatusText('ACCESS GRANTED');
          setIsGranted(true);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              onComplete();
            }, 500);
          }, 600);
          return 100;
        }

        const increment = Math.floor(Math.random() * 18) + 8;
        const nextVal = Math.min(prev + increment, 100);

        if (nextVal > 30 && nextVal < 70) {
          setStatusText('VERIFYING DIGITAL SIGNATURES…');
        } else if (nextVal >= 70 && nextVal < 100) {
          setStatusText('ESTABLISHING ENCRYPTED SESSION…');
        }

        return nextVal;
      });
    }, 110);

    return () => {
      clearInterval(timer);
      clearInterval(hexInterval);
    };
  }, [onComplete]);

  return (
    <div
      id="startup-sequence"
      className={`fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle background cyber grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="relative w-full max-w-md px-6 text-center z-10">
        {/* Animated Cyber Shield Icon */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className={`w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center ${isGranted ? 'bg-cyan-500/10 border-cyan-400' : 'bg-slate-900/80'} transition-all duration-300`}>
            {isGranted ? (
              <CheckCircle2 className="w-8 h-8 text-cyan-400 animate-pulse" />
            ) : (
              <Lock className="w-8 h-8 text-cyan-400 animate-pulse" />
            )}
          </div>
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" style={{ animationDuration: '2s' }} />
        </div>

        {/* Identity Label */}
        <div className="text-xs font-mono tracking-widest text-cyan-500/80 mb-2 uppercase">
          ISTIAK AHMED ENAN // SEC_OS v5.2
        </div>

        {/* Status Line */}
        <h2 className="text-lg md:text-xl font-mono tracking-wider font-semibold text-slate-100 mb-4 h-7 flex items-center justify-center gap-2">
          {statusText}
          {!isGranted && <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />}
        </h2>

        {/* Cryptographic hash streamer */}
        <div className="text-[11px] font-mono text-cyan-400/50 mb-6 tracking-wider">
          {hexLine}
        </div>

        {/* Progress bar container */}
        <div className="w-full bg-slate-900 border border-cyan-500/20 rounded-full h-2.5 p-0.5 overflow-hidden mb-3">
          <div
            className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 h-full rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(6,182,212,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-xs font-mono text-slate-400">
          <span>SEC_AUTH: ACTIVE</span>
          <span className="text-cyan-400">{progress}%</span>
        </div>

        {/* Skip button for user convenience */}
        <button
          onClick={() => {
            setIsFading(true);
            setTimeout(onComplete, 200);
          }}
          className="mt-8 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-widest cursor-pointer underline underline-offset-4"
        >
          [ Bypass Sequence ]
        </button>
      </div>
    </div>
  );
};
