import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alex "NightWolf" Chen',
    role: 'Twitch Partner · 15K followers',
    avatar: '🐺',
    rating: 5,
    text: 'The Neon Cyber pack completely transformed my stream. My viewers constantly ask where I got my overlays. Worth every penny!',
  },
  {
    id: 2,
    name: 'Sarah "PixelQueen" Rodriguez',
    role: 'Kick Streamer · 8K followers',
    avatar: '👑',
    rating: 5,
    text: 'Best investment for my streaming career. The Kick pack is perfectly tailored and the quality is unmatched. Instant delivery via WhatsApp!',
  },
  {
    id: 3,
    name: 'Marcus "ProGamer" Johnson',
    role: 'Esports Caster · 25K followers',
    avatar: '🎙️',
    rating: 5,
    text: 'We use the Esports Broadcast Package for our tournaments. Professional quality that rivals major broadcast productions.',
  },
  {
    id: 4,
    name: 'Emma "KawaiiStar" Park',
    role: 'Just Chatting · 12K followers',
    avatar: '⭐',
    rating: 5,
    text: 'The Kawaii Stream Pack is absolutely adorable! My chat loves the cute animations and the pastel aesthetic is perfect.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const t = testimonials[current];

  return (
    <section className="section testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="section-title">
            Loved by <span className="gradient-text">Streamers</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Join thousands of creators who trust Overlays.GG for their stream visuals.
          </p>
        </motion.div>

        <div className="testimonials__slider">
          <button
            className="testimonials__nav"
            onClick={() => navigate(-1)}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials__card-wrap">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                className="testimonials__card glass"
                custom={direction}
                initial={{ opacity: 0, x: direction * 60, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: direction * -60, filter: 'blur(8px)' }}
                transition={{ duration: 0.4 }}
              >
                <div className="testimonials__stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="#ffd700" color="#ffd700" />
                  ))}
                </div>
                <p className="testimonials__text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonials__author">
                  <span className="testimonials__avatar">{t.avatar}</span>
                  <div>
                    <strong className="testimonials__name">{t.name}</strong>
                    <span className="testimonials__role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="testimonials__nav"
            onClick={() => navigate(1)}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials {
          position: relative;
          z-index: 1;
        }

        .testimonials__slider {
          display: flex;
          align-items: center;
          gap: 24px;
          max-width: 800px;
          margin: 0 auto;
        }

        .testimonials__nav {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          transition: all var(--transition);
        }

        .testimonials__nav:hover {
          color: var(--neon-purple);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: var(--glow-purple);
        }

        .testimonials__card-wrap {
          flex: 1;
          min-height: 260px;
        }

        .testimonials__card {
          padding: 40px;
          border-radius: var(--radius-xl);
          text-align: center;
        }

        .testimonials__stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 24px;
        }

        .testimonials__text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 32px;
          font-style: italic;
        }

        .testimonials__author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .testimonials__avatar {
          font-size: 2rem;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .testimonials__name {
          display: block;
          font-family: var(--font-display);
          font-size: 0.9rem;
          margin-bottom: 2px;
        }

        .testimonials__role {
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        .testimonials__dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }

        .testimonials__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          transition: all var(--transition);
          padding: 0;
        }

        .testimonials__dot--active {
          width: 24px;
          border-radius: 4px;
          background: var(--gradient-primary);
          box-shadow: var(--glow-red);
        }

        @media (max-width: 768px) {
          .testimonials__nav {
            display: none;
          }

          .testimonials__card {
            padding: 28px 20px;
          }

          .testimonials__text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
