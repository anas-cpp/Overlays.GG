import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SITE } from '../config/site';
import { buildGeneralInquiryMessage, openWhatsApp } from '../utils/whatsapp';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        style={{ height: navHeight }}
      >
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-icon">◈</span>
            <span className="navbar__logo-text">{SITE.name}</span>
          </Link>

          <nav className="navbar__nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__actions">
            <motion.button
              className="navbar__whatsapp-btn"
              onClick={() => openWhatsApp(buildGeneralInquiryMessage())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </motion.button>

            <button
              className="navbar__mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        className={`navbar__mobile-menu ${mobileOpen ? 'navbar__mobile-menu--open' : ''}`}
        initial={false}
        animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, x: 20 }}
            animate={mobileOpen ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.08 }}
          >
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
        <motion.button
          className="btn btn-whatsapp btn-lg"
          onClick={() => openWhatsApp(buildGeneralInquiryMessage())}
          initial={{ opacity: 0, y: 20 }}
          animate={mobileOpen ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </motion.button>
      </motion.div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          background: rgba(5, 5, 8, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.3s, border-color 0.3s;
        }

        .navbar--scrolled {
          background: rgba(5, 5, 8, 0.85);
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.02em;
        }

        .navbar__logo-icon {
          color: var(--neon-red);
          font-size: 1.5rem;
          filter: drop-shadow(0 0 8px rgba(255, 0, 85, 0.5));
        }

        .navbar__nav {
          display: flex;
          gap: 8px;
        }

        .navbar__link {
          padding: 8px 18px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          transition: all var(--transition);
          position: relative;
        }

        .navbar__link:hover {
          color: var(--text-primary);
        }

        .navbar__link--active {
          color: var(--text-primary);
        }

        .navbar__link--active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 18px;
          right: 18px;
          height: 2px;
          background: var(--gradient-primary);
          border-radius: 1px;
          box-shadow: 0 0 8px rgba(255, 0, 85, 0.5);
        }

        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .navbar__whatsapp-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: white;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.3);
          transition: box-shadow var(--transition);
        }

        .navbar__whatsapp-btn:hover {
          box-shadow: 0 0 25px rgba(37, 211, 102, 0.5);
        }

        .navbar__mobile-toggle {
          display: none;
          color: var(--text-primary);
          padding: 8px;
        }

        .navbar__mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85vw);
          z-index: 850;
          background: rgba(10, 10, 18, 0.95);
          backdrop-filter: blur(30px);
          padding: 100px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .navbar__mobile-menu--open {
          pointer-events: auto;
        }

        .navbar__mobile-link {
          display: block;
          padding: 16px 0;
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: color var(--transition);
        }

        .navbar__mobile-link--active,
        .navbar__mobile-link:hover {
          color: var(--text-primary);
        }

        .navbar__mobile-menu .btn {
          margin-top: 24px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .navbar__nav {
            display: none;
          }

          .navbar__whatsapp-btn span {
            display: none;
          }

          .navbar__whatsapp-btn {
            padding: 10px;
          }

          .navbar__mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
