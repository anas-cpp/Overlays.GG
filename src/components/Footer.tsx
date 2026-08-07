import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SITE } from '../config/site';
import SocialIcon from './SocialIcon';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: SITE.socials.instagram, icon: 'instagram' as const, label: 'Instagram' },
  { href: SITE.socials.twitter, icon: 'twitter' as const, label: 'Twitter' },
  { href: SITE.socials.youtube, icon: 'youtube' as const, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">◈</span>
              {SITE.name}
            </Link>
            <p className="footer__tagline">{SITE.tagline}</p>
            <p className="footer__desc">
              Premium digital gaming assets for streamers, content creators, and esports
              professionals worldwide.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Categories</h4>
            <ul className="footer__links">
              <li><Link to="/shop" className="footer__link">Stream Overlays</Link></li>
              <li><Link to="/shop" className="footer__link">Twitch / Kick Packs</Link></li>
              <li><Link to="/shop" className="footer__link">Animated Overlays</Link></li>
              <li><Link to="/shop" className="footer__link">Gaming Graphics</Link></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Connect</h4>
            <div className="footer__socials">
              {socialLinks.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon name={icon} size={20} />
                </motion.a>
              ))}
            </div>
            <p className="footer__email">{SITE.email}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="footer__bottom-tag">Crafted for gamers, by gamers.</p>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          z-index: 1;
          padding: 80px 0 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(5, 5, 8, 0.8);
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .footer__logo-icon {
          color: var(--neon-red);
          filter: drop-shadow(0 0 8px rgba(255, 0, 85, 0.5));
        }

        .footer__tagline {
          color: var(--neon-purple);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .footer__desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
          max-width: 320px;
        }

        .footer__heading {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .footer__links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer__link {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: all var(--transition);
          position: relative;
          width: fit-content;
        }

        .footer__link:hover {
          color: var(--neon-purple);
          transform: translateX(4px);
        }

        .footer__socials {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer__social {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          transition: all var(--transition);
        }

        .footer__social:hover {
          color: var(--neon-purple);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
        }

        .footer__email {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .footer__bottom-tag {
          font-family: var(--font-display);
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer__bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
