import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'slide-in-left' | 'slide-in-right' | 'fade';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    }

    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const currentEl = domRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentEl);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      }
    };
  }, [threshold]);

  // If user prefers reduced motion, render without animation delays or transforms
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialClasses = () => {
    switch (animation) {
      case 'slide-in-left':
        return 'opacity-0 -translate-x-10';
      case 'slide-in-right':
        return 'opacity-0 translate-x-10';
      case 'fade':
        return 'opacity-0';
      case 'fade-up':
      default:
        return 'opacity-0 translate-y-10';
    }
  };

  const getActiveClasses = () => {
    switch (animation) {
      case 'slide-in-left':
      case 'slide-in-right':
        return 'opacity-100 translate-x-0';
      case 'fade':
        return 'opacity-100';
      case 'fade-up':
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out will-change-[transform,opacity] ${
        isVisible ? getActiveClasses() : getInitialClasses()
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
