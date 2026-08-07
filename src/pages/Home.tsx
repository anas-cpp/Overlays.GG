import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />

      <section className="section cta-banner">
        <div className="container">
          <motion.div
            className="cta-banner__inner glass"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-banner__title">
              Ready to <span className="gradient-text">Upgrade</span> Your Stream?
            </h2>
            <p className="cta-banner__text">
              Browse our collection of premium digital assets and order instantly via WhatsApp.
            </p>
            <Link to="/shop" className="btn btn-primary btn-lg">
              Start Shopping
            </Link>
          </motion.div>
        </div>

        <style>{`
          .cta-banner {
            position: relative;
            z-index: 1;
            padding-bottom: 120px;
          }

          .cta-banner__inner {
            text-align: center;
            padding: 64px 40px;
            border-radius: var(--radius-xl);
            animation: glowBorder 4s ease-in-out infinite;
          }

          .cta-banner__title {
            font-family: var(--font-display);
            font-size: clamp(1.8rem, 4vw, 2.5rem);
            font-weight: 800;
            margin-bottom: 16px;
          }

          .cta-banner__text {
            color: var(--text-secondary);
            font-size: 1.05rem;
            margin-bottom: 32px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </section>
    </motion.div>
  );
}
