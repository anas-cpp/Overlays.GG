import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Categories() {
  return (
    <section className="section categories">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="section-title">
            Browse by <span className="gradient-text">Category</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Find the perfect assets for your streaming setup.
          </p>
        </motion.div>

        <div className="categories__grid">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/shop?category=${cat.id}`} className="category-card glass">
                <span className="category-card__icon">{cat.icon}</span>
                <h3 className="category-card__name">{cat.label}</h3>
                <span className="category-card__arrow">
                  <ArrowRight size={18} />
                </span>
                <div className="category-card__glow" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .categories {
          position: relative;
          z-index: 1;
        }

        .categories__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .category-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 36px 24px;
          border-radius: var(--radius-lg);
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all var(--transition);
        }

        .category-card:hover {
          transform: translateY(-6px) scale(1.03);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 12px 40px rgba(168, 85, 247, 0.15);
        }

        .category-card__icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));
        }

        .category-card__name {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .category-card__arrow {
          color: var(--text-muted);
          transition: all var(--transition);
        }

        .category-card:hover .category-card__arrow {
          color: var(--neon-purple);
          transform: translateX(4px);
        }

        .category-card__glow {
          position: absolute;
          bottom: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent);
          transition: all var(--transition);
          pointer-events: none;
        }

        .category-card:hover .category-card__glow {
          bottom: -20%;
          width: 180px;
          height: 180px;
        }
      `}</style>
    </section>
  );
}
