import { motion } from 'framer-motion';
import { Award, Heart, Rocket, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Instant Delivery',
    desc: 'Order via WhatsApp and receive your files within minutes. No waiting, no hassle.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Every asset is crafted by professional designers with years of streaming experience.',
  },
  {
    icon: Heart,
    title: 'Creator First',
    desc: 'Built by streamers, for streamers. We understand what you need to stand out.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    desc: 'Our packs are shaped by feedback from thousands of content creators worldwide.',
  },
];

const timeline = [
  { year: '2022', title: 'The Beginning', desc: 'Started as a small passion project creating overlays for friends.' },
  { year: '2023', title: 'Growing Fast', desc: 'Reached 500+ happy customers and expanded our product catalog.' },
  { year: '2024', title: 'Going Global', desc: 'Serving streamers across 30+ countries with premium digital assets.' },
  { year: '2025', title: 'Overlays.GG', desc: 'Rebranded and launched our full marketplace with 50+ unique packs.' },
];

export default function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              className="about-hero__icon"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Rocket size={48} />
            </motion.div>
            <h1 className="about-hero__title">
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="about-hero__subtitle">
              Empowering streamers and content creators with premium digital gaming assets
              since 2022.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className="about-story__grid">
            <motion.div
              className="about-story__text"
              initial={{ opacity: 0, x: -50, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Built for Creators</h2>
              <p>
                Overlays.GG was born from a simple idea: every streamer deserves access to
                professional-quality visuals without breaking the bank. What started as custom
                overlay designs for a few friends quickly grew into a full-fledged digital
                marketplace.
              </p>
              <p>
                Today, we serve thousands of streamers across Twitch, Kick, YouTube, and
                beyond — providing everything from animated alerts to complete broadcast
                packages. Our mission remains the same: help creators look their best so they
                can focus on what matters — entertaining their audience.
              </p>
            </motion.div>

            <motion.div
              className="about-story__visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-visual-card glass">
                <div className="about-visual-card__gradient" />
                <div className="about-visual-card__content">
                  <span className="about-visual-card__number">2K+</span>
                  <span className="about-visual-card__label">Happy Streamers</span>
                </div>
              </div>
              <div className="about-visual-orb about-visual-orb--1" />
              <div className="about-visual-orb about-visual-orb--2" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 className="section-title">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
              We&apos;re more than just a shop — we&apos;re your creative partner.
            </p>
          </motion.div>

          <div className="about-values__grid">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="about-value glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="about-value__icon">
                  <val.icon size={24} />
                </div>
                <h3 className="about-value__title">{val.title}</h3>
                <p className="about-value__desc">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-timeline">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="about-timeline__track">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="about-timeline__item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <span className="about-timeline__year">{item.year}</span>
                <div className="about-timeline__content glass">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          position: relative;
          z-index: 1;
        }

        .about-hero {
          padding: 60px 0 20px;
        }

        .about-hero__icon {
          display: inline-flex;
          padding: 20px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
          color: var(--neon-purple);
          margin-bottom: 24px;
          box-shadow: var(--glow-purple);
        }

        .about-hero__title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          margin-bottom: 16px;
        }

        .about-hero__subtitle {
          color: var(--text-secondary);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .about-story__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-story__text p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-story__visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }

        .about-visual-card {
          width: 280px;
          height: 280px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          z-index: 2;
        }

        .about-visual-card__gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 0, 85, 0.2), rgba(168, 85, 247, 0.2));
          animation: gradientShift 6s ease infinite;
          background-size: 200% 200%;
        }

        .about-visual-card__content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .about-visual-card__number {
          display: block;
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 900;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-visual-card__label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .about-visual-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
        }

        .about-visual-orb--1 {
          width: 150px;
          height: 150px;
          background: rgba(255, 0, 85, 0.15);
          top: 0;
          right: 10%;
          animation: float 5s ease-in-out infinite;
        }

        .about-visual-orb--2 {
          width: 120px;
          height: 120px;
          background: rgba(168, 85, 247, 0.15);
          bottom: 0;
          left: 10%;
          animation: float 5s ease-in-out infinite reverse;
        }

        .about-values__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }

        .about-value {
          padding: 32px;
          border-radius: var(--radius-lg);
          transition: all var(--transition);
        }

        .about-value__icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          background: rgba(168, 85, 247, 0.1);
          color: var(--neon-purple);
          margin-bottom: 20px;
        }

        .about-value__title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .about-value__desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .about-timeline__track {
          max-width: 700px;
          margin: 48px auto 0;
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
        }

        .about-timeline__track::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(var(--neon-red), var(--neon-purple));
          transform: translateX(-50%);
          opacity: 0.3;
        }

        .about-timeline__item {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .about-timeline__item:nth-child(even) {
          flex-direction: row-reverse;
          text-align: right;
        }

        .about-timeline__year {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--neon-red);
          flex-shrink: 0;
          width: 60px;
          text-align: center;
        }

        .about-timeline__content {
          flex: 1;
          padding: 24px;
          border-radius: var(--radius-lg);
        }

        .about-timeline__content h3 {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .about-timeline__content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-story__grid {
            grid-template-columns: 1fr;
          }

          .about-timeline__track::before {
            left: 30px;
          }

          .about-timeline__item,
          .about-timeline__item:nth-child(even) {
            flex-direction: row;
            text-align: left;
            padding-left: 60px;
          }

          .about-timeline__year {
            position: absolute;
            left: 0;
            width: 60px;
          }
        }
      `}</style>
    </motion.div>
  );
}
