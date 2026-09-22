import React, { useEffect, useRef } from 'react';

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Lightweight nodes for cyber network (capped to 24 for ultra-smooth 60fps)
    const nodeCount = Math.min(Math.floor((width * height) / 45000), 24);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.4 + 0.8,
        alpha: Math.random() * 0.4 + 0.2,
      });
    }

    // Binary code stream columns (capped to max 14 columns)
    const streamColumns = Math.min(Math.floor(width / 110), 14);
    const streams: Array<{
      x: number;
      y: number;
      speed: number;
      chars: string[];
      opacity: number;
    }> = [];

    const binaryChars = ['0', '1', 'S', 'E', 'C', '#'];
    for (let i = 0; i < streamColumns; i++) {
      streams.push({
        x: i * 110 + (Math.random() * 30),
        y: Math.random() * height,
        speed: Math.random() * 0.6 + 0.3,
        chars: Array.from({ length: 5 }, () => binaryChars[Math.floor(Math.random() * binaryChars.length)]),
        opacity: Math.random() * 0.09 + 0.03,
      });
    }

    let animationId: number;
    let lastTime = performance.now();

    const render = (currentTime: number) => {
      // Throttle slightly if needed, smooth delta
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // 1. Matrix Streams
      ctx.font = '10px monospace';
      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        ctx.fillStyle = `rgba(0, 220, 255, ${stream.opacity})`;
        for (let c = 0; c < stream.chars.length; c++) {
          ctx.fillText(stream.chars[c], stream.x, stream.y - c * 14);
        }
        stream.y += stream.speed * 60 * delta;
        if (stream.y - 70 > height) {
          stream.y = 0;
          stream.x = Math.random() * width;
        }
      }

      // 2. Nodes & Connection Mesh
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx * 60 * delta;
        node.y += node.vy * 60 * delta;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${node.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 13000) {
            // ~114px distance check without sqrt
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 180, 255, ${(1 - dist / 114) * 0.12})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
      {/* Deep atmospheric gradients */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Top subtle cyan spotlight */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-cyan-600/10 via-blue-900/10 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle deep violet accent */}
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-purple-900/08 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25" />

      {/* Canvas for dynamic particles and matrix streams */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none" />

      {/* Moving scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.012] to-transparent h-28 w-full animate-scanline pointer-events-none" />
    </div>
  );
};
