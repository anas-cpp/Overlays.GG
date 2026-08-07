import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, PRODUCTS, type ProductCategory } from '../data/products';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as ProductCategory | null;

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(
    initialCategory && CATEGORIES.some((c) => c.id === initialCategory)
      ? initialCategory
      : 'all',
  );

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        search === '' ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <motion.div
      className="shop-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="shop-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="shop-hero__title">
              Digital <span className="gradient-text">Shop</span>
            </h1>
            <p className="shop-hero__subtitle">
              Browse our full collection of premium gaming assets and stream overlays.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section shop-content">
        <div className="container">
          <motion.div
            className="shop-toolbar glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="shop-search">
              <Search size={18} className="shop-search__icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="shop-search__input"
              />
            </div>

            <div className="shop-filters">
              <SlidersHorizontal size={16} className="shop-filters__icon" />
              <button
                className={`shop-filter ${activeCategory === 'all' ? 'shop-filter--active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`shop-filter ${activeCategory === cat.id ? 'shop-filter--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="shop-results-count"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${search}`}
              className="shop-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))
              ) : (
                <motion.div
                  className="shop-empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <span className="shop-empty__icon">🔍</span>
                  <h3>No products found</h3>
                  <p>Try adjusting your search or filter criteria.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <style>{`
        .shop-page {
          position: relative;
          z-index: 1;
        }

        .shop-hero {
          padding: 40px 0 20px;
        }

        .shop-hero__title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          margin-bottom: 12px;
        }

        .shop-hero__subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .shop-content {
          padding-top: 20px;
        }

        .shop-toolbar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 24px;
          border-radius: var(--radius-lg);
          margin-bottom: 32px;
        }

        .shop-search {
          position: relative;
        }

        .shop-search__icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .shop-search__input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: var(--font-body);
          transition: all var(--transition);
        }

        .shop-search__input:focus {
          outline: none;
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }

        .shop-search__input::placeholder {
          color: var(--text-muted);
        }

        .shop-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .shop-filters__icon {
          color: var(--text-muted);
          margin-right: 4px;
        }

        .shop-filter {
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all var(--transition);
          white-space: nowrap;
        }

        .shop-filter:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .shop-filter--active {
          background: rgba(168, 85, 247, 0.15);
          color: var(--neon-purple);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.15);
        }

        .shop-results-count {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-bottom: 24px;
        }

        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .shop-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 20px;
        }

        .shop-empty__icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 16px;
        }

        .shop-empty h3 {
          font-family: var(--font-display);
          margin-bottom: 8px;
        }

        .shop-empty p {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .shop-filters {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 8px;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </motion.div>
  );
}
