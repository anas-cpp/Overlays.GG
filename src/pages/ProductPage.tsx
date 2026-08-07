import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import { getProductBySlug } from '../data/products';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const navigateImage = (dir: number) => {
    setDirection(dir);
    setActiveImage((prev) => {
      const next = prev + dir;
      if (next < 0) return product.images.length - 1;
      if (next >= product.images.length) return 0;
      return next;
    });
  };

  return (
    <motion.div
      className="product-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container product-page__inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link to="/shop" className="product-page__back">
            <ArrowLeft size={18} />
            Back to Shop
          </Link>
        </motion.div>

        <div className="product-page__grid">
          <motion.div
            className="product-page__gallery"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="product-gallery">
              <div className="product-gallery__main">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeImage}
                    className="product-gallery__slide"
                    style={{ background: product.images[activeImage] }}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {product.badge && (
                  <span className="product-gallery__badge">{product.badge}</span>
                )}

                <button
                  className="product-gallery__nav product-gallery__nav--prev"
                  onClick={() => navigateImage(-1)}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="product-gallery__nav product-gallery__nav--next"
                  onClick={() => navigateImage(1)}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="product-gallery__thumbs">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`product-gallery__thumb ${i === activeImage ? 'product-gallery__thumb--active' : ''}`}
                    onClick={() => {
                      setDirection(i > activeImage ? 1 : -1);
                      setActiveImage(i);
                    }}
                    style={{ background: img }}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="product-page__info"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="product-page__title">{product.name}</h1>
            <p className="product-page__desc">{product.longDescription}</p>

            <div className="product-page__price-wrap">
              <span className="product-page__price">{product.price}</span>
              <span className="product-page__price-label">One-time purchase</span>
            </div>

            <div className="product-page__buy">
              <WhatsAppButton
                productName={product.name}
                price={product.price}
                size="lg"
              />
            </div>

            <div className="product-page__features">
              <h3 className="product-page__features-title">What&apos;s Included</h3>
              <ul className="product-page__features-list">
                {product.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="product-page__feature"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <span className="product-page__feature-icon">
                      <Check size={14} />
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .product-page {
          position: relative;
          z-index: 1;
          padding: 40px 0 100px;
        }

        .product-page__back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 32px;
          transition: color var(--transition);
        }

        .product-page__back:hover {
          color: var(--neon-purple);
        }

        .product-page__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .product-gallery__main {
          position: relative;
          aspect-ratio: 16 / 10;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--border-glass);
          animation: glowBorder 4s ease-in-out infinite;
        }

        .product-gallery__slide {
          width: 100%;
          height: 100%;
        }

        .product-gallery__badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 6px 14px;
          background: var(--gradient-primary);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-display);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-radius: 20px;
          z-index: 2;
        }

        .product-gallery__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(5, 5, 8, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          z-index: 2;
          transition: all var(--transition);
        }

        .product-gallery__nav:hover {
          background: rgba(168, 85, 247, 0.3);
          border-color: rgba(168, 85, 247, 0.4);
        }

        .product-gallery__nav--prev { left: 12px; }
        .product-gallery__nav--next { right: 12px; }

        .product-gallery__thumbs {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }

        .product-gallery__thumb {
          width: 80px;
          height: 50px;
          border-radius: var(--radius-sm);
          border: 2px solid transparent;
          cursor: pointer;
          transition: all var(--transition);
          opacity: 0.6;
        }

        .product-gallery__thumb--active {
          border-color: var(--neon-purple);
          opacity: 1;
          box-shadow: var(--glow-purple);
        }

        .product-gallery__thumb:hover {
          opacity: 1;
        }

        .product-page__title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .product-page__desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .product-page__price-wrap {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 28px;
        }

        .product-page__price {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 900;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .product-page__price-label {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .product-page__buy {
          margin-bottom: 40px;
        }

        .product-page__buy .btn {
          width: 100%;
          max-width: 360px;
        }

        .product-page__features-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .product-page__features-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .product-page__feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .product-page__feature-icon {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.1);
          color: #25d366;
          flex-shrink: 0;
        }

        @media (max-width: 968px) {
          .product-page__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .product-page__buy .btn {
            max-width: 100%;
          }
        }
      `}</style>
    </motion.div>
  );
}
