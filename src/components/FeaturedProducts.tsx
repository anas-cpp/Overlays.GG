import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="section featured">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="section-subtitle">
            Hand-picked premium packs loved by top streamers worldwide.
          </p>
        </motion.div>

        <div className="featured__grid">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          className="featured__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/shop" className="btn btn-outline">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <style>{`
        .featured {
          position: relative;
          z-index: 1;
        }

        .featured__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .featured__cta {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }
      `}</style>
    </section>
  );
}
