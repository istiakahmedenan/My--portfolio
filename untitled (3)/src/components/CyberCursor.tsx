import React, { useEffect, useRef } from 'react';

export const CyberCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Disable on touch devices or if reduced motion is requested
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check for hover target without triggering React state
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        if (ringRef.current) {
          ringRef.current.classList.add('w-11', 'h-11', 'border-cyan-300', 'bg-cyan-400/10');
          ringRef.current.classList.remove('w-7', 'h-7', 'border-cyan-400/40', 'bg-transparent');
        }
      } else {
        if (ringRef.current) {
          ringRef.current.classList.remove('w-11', 'h-11', 'border-cyan-300', 'bg-cyan-400/10');
          ringRef.current.classList.add('w-7', 'h-7', 'border-cyan-400/40', 'bg-transparent');
        }
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth trailing ring lerp without React state re-renders
    const loop = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer interactive ring */}
      <div
        ref={ringRef}
        style={{ opacity: 0, willChange: 'transform' }}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-cyan-400/40 bg-transparent -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-150 ease-out pointer-events-none shadow-[0_0_10px_rgba(6,182,212,0.3)]"
      />

      {/* Center glowing cyber dot */}
      <div
        ref={dotRef}
        style={{ opacity: 0, willChange: 'transform' }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-[0_0_8px_#00e5ff]"
      />
    </div>
  );
};
