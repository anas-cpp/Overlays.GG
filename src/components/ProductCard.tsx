import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/product/${product.slug}`} className="product-card__link">
        <div className="product-card__image-wrap">
          <div
            className="product-card__image"
            style={{ background: product.images[0] }}
          />
          {product.badge && (
            <span className="product-card__badge">{product.badge}</span>
          )}
          <div className="product-card__overlay">
            <span className="product-card__view">
              View Details <ArrowRight size={16} />
            </span>
          </div>
        </div>

        <div className="product-card__content">
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__desc">{product.description}</p>
          <div className="product-card__footer">
            <span className="product-card__price">{product.price}</span>
            <span className="product-card__cta">
              <ShoppingBag size={16} />
            </span>
          </div>
        </div>
      </Link>

      <style>{`
        .product-card {
          border-radius: var(--radius-lg);
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          overflow: hidden;
          transition: all var(--transition);
          animation: glowBorder 4s ease-in-out infinite;
        }

        .product-card:hover {
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 8px 40px rgba(168, 85, 247, 0.15), 0 0 0 1px rgba(168, 85, 247, 0.1);
        }

        .product-card__link {
          display: block;
        }

        .product-card__image-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .product-card__image {
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-card__image {
          transform: scale(1.08);
        }

        .product-card__badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 12px;
          background: var(--gradient-primary);
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          font-family: var(--font-display);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-radius: 20px;
          box-shadow: var(--glow-red);
        }

        .product-card__overlay {
          position: absolute;
          inset: 0;
          background: rgba(5, 5, 8, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition);
          backdrop-filter: blur(4px);
        }

        .product-card:hover .product-card__overlay {
          opacity: 1;
        }

        .product-card__view {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
          padding: 10px 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
        }

        .product-card__content {
          padding: 20px;
        }

        .product-card__name {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .product-card__desc {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-card__price {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .product-card__cta {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          background: rgba(168, 85, 247, 0.1);
          color: var(--neon-purple);
          transition: all var(--transition);
        }

        .product-card:hover .product-card__cta {
          background: var(--neon-purple);
          color: white;
          box-shadow: var(--glow-purple);
        }
      `}</style>
    </motion.article>
  );
}
