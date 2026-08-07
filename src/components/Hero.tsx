import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Download } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Products Sold' },
  { value: '2K+', label: 'Happy Streamers' },
  { value: '50+', label: 'Unique Packs' },
  { value: '4.9★', label: 'Average Rating' },
];

const features = [
  { icon: Zap, text: 'Instant Download' },
  { icon: Shield, text: 'Commercial License' },
  { icon: Download, text: 'Free Updates' },
  { icon: Sparkles, text: 'Premium Quality' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={14} />
            Premium Digital Gaming Assets
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Level Up Your
            <br />
            <span className="gradient-text">Stream Aesthetic</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Premium overlays, animated alerts, Twitch/Kick packs, and gaming graphics.
            Designed for creators who demand the best visual experience.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/shop" className="btn btn-primary btn-lg">
              Browse Shop
              <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              Our Story
            </Link>
          </motion.div>

          <motion.div
            className="hero__features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {features.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                className="hero__feature"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <Icon size={16} />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        >
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__card glass">
            <div className="hero__card-header">
              <div className="hero__card-dots">
                <span /><span /><span />
              </div>
              <span className="hero__card-label">LIVE PREVIEW</span>
            </div>
            <div className="hero__card-body">
              <div className="hero__card-gradient" />
              <div className="hero__card-elements">
                <div className="hero__card-bar hero__card-bar--1" />
                <div className="hero__card-bar hero__card-bar--2" />
                <div className="hero__card-bar hero__card-bar--3" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__stats"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="container hero__stats-inner">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="hero__stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
            >
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          z-index: 1;
          padding: 60px 0 0;
          min-height: calc(100vh - var(--nav-height));
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          flex: 1;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--neon-purple);
          margin-bottom: 24px;
        }

        .hero__title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .hero__subtitle {
          color: var(--text-secondary);
          font-size: 1.15rem;
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 36px;
        }

        .hero__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .hero__features {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .hero__feature {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .hero__feature svg {
          color: var(--neon-purple);
        }

        .hero__visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        .hero__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 6s ease-in-out infinite;
        }

        .hero__orb--1 {
          width: 200px;
          height: 200px;
          background: rgba(255, 0, 85, 0.2);
          top: 10%;
          left: 10%;
        }

        .hero__orb--2 {
          width: 150px;
          height: 150px;
          background: rgba(168, 85, 247, 0.2);
          bottom: 20%;
          right: 10%;
          animation-delay: -2s;
        }

        .hero__orb--3 {
          width: 100px;
          height: 100px;
          background: rgba(99, 102, 241, 0.15);
          top: 50%;
          left: 50%;
          animation-delay: -4s;
        }

        .hero__card {
          width: 100%;
          max-width: 420px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          position: relative;
          z-index: 2;
          animation: glowBorder 4s ease-in-out infinite;
        }

        .hero__card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hero__card-dots {
          display: flex;
          gap: 6px;
        }

        .hero__card-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
        }

        .hero__card-dots span:first-child { background: #ff0055; }
        .hero__card-dots span:nth-child(2) { background: #ffd700; }
        .hero__card-dots span:last-child { background: #25d366; }

        .hero__card-label {
          font-family: var(--font-display);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--neon-red);
        }

        .hero__card-body {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .hero__card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1a0a2e, #ff006e, #7b2ff7);
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }

        .hero__card-elements {
          position: absolute;
          inset: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero__card-bar {
          height: 12px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .hero__card-bar--1 { width: 60%; }
        .hero__card-bar--2 { width: 80%; margin-top: auto; }
        .hero__card-bar--3 { width: 45%; }

        .hero__stats {
          margin-top: 40px;
          padding: 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hero__stats-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .hero__stat {
          text-align: center;
        }

        .hero__stat-value {
          display: block;
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }

        .hero__stat-label {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        @media (max-width: 968px) {
          .hero__inner {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero__subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero__actions,
          .hero__features {
            justify-content: center;
          }

          .hero__visual {
            min-height: 300px;
          }

          .hero__stats-inner {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
