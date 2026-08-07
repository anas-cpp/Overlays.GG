import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));
}

export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(40));
  }, []);

  return (
    <div className="bg-effects" aria-hidden="true">
      <div className="bg-mesh" />
      <div className="bg-noise" />
      <div className="bg-beam" />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="bg-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -80, -40, -100, 0],
            x: [0, 20, -10, 15, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <style>{`
        .bg-effects {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-mesh {
          position: absolute;
          inset: -50%;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(255, 0, 85, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 50%);
          animation: gradientShift 15s ease infinite;
          background-size: 200% 200%;
        }

        .bg-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 256px 256px;
        }

        .bg-beam {
          position: absolute;
          top: -50%;
          left: 50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 0, 85, 0.03) 45%,
            rgba(168, 85, 247, 0.05) 50%,
            rgba(255, 0, 85, 0.03) 55%,
            transparent 100%
          );
          animation: beamSweep 8s ease-in-out infinite;
          transform-origin: center;
        }

        .bg-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.8), transparent);
          box-shadow: 0 0 6px rgba(168, 85, 247, 0.4);
        }
      `}</style>
    </div>
  );
}
