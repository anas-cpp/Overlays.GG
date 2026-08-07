import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { SITE } from '../config/site';
import SocialIcon from '../components/SocialIcon';
import { buildGeneralInquiryMessage, openWhatsApp } from '../utils/whatsapp';

const contactInfo = [
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly', action: 'whatsapp' },
  { icon: Mail, label: 'Email', value: SITE.email, action: 'email' },
  { icon: Clock, label: 'Response Time', value: 'Usually within 1 hour', action: null },
  { icon: MapPin, label: 'Delivery', value: 'Instant digital download', action: null },
];

const socials = [
  { icon: 'instagram' as const, href: SITE.socials.instagram, label: 'Instagram' },
  { icon: 'twitter' as const, href: SITE.socials.twitter, label: 'Twitter' },
  { icon: 'youtube' as const, href: SITE.socials.youtube, label: 'YouTube' },
];

export default function Contact() {
  const handleInfoClick = (action: string | null) => {
    if (action === 'whatsapp') {
      openWhatsApp(buildGeneralInquiryMessage());
    } else if (action === 'email') {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h1 className="contact-hero__title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-hero__subtitle">
              Have questions? Want a custom pack? Reach out — we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="contact-info__title">Contact Information</h2>
              <p className="contact-info__desc">
                The fastest way to reach us is via WhatsApp. We typically respond within an hour
                during business hours.
              </p>

              <div className="contact-info__cards">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    className={`contact-info__card glass ${info.action ? 'contact-info__card--clickable' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={info.action ? { scale: 1.02, y: -2 } : {}}
                    onClick={() => handleInfoClick(info.action)}
                  >
                    <div className="contact-info__card-icon">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <span className="contact-info__card-label">{info.label}</span>
                      <span className="contact-info__card-value">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="btn btn-whatsapp btn-lg contact-whatsapp-btn"
                onClick={() => openWhatsApp(buildGeneralInquiryMessage())}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </motion.button>

              <div className="contact-socials">
                <span className="contact-socials__label">Follow us</span>
                <div className="contact-socials__links">
                  {socials.map(({ icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-socials__link"
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SocialIcon name={icon} size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
                <h2 className="contact-form__title">Send a Message</h2>
                <p className="contact-form__desc">
                  Fill out the form below and we&apos;ll get back to you. For faster response, use WhatsApp.
                </p>

                <div className="contact-form__group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="you@example.com" />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="What's this about?" />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us what you need..." />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary contact-form__submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          position: relative;
          z-index: 1;
        }

        .contact-hero {
          padding: 60px 0 20px;
        }

        .contact-hero__title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          margin-bottom: 16px;
        }

        .contact-hero__subtitle {
          color: var(--text-secondary);
          font-size: 1.15rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .contact-content {
          padding-top: 20px;
          padding-bottom: 100px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info__title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .contact-info__desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .contact-info__cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .contact-info__card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border-radius: var(--radius-md);
          transition: all var(--transition);
        }

        .contact-info__card--clickable {
          cursor: pointer;
        }

        .contact-info__card--clickable:hover {
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.1);
        }

        .contact-info__card-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          background: rgba(168, 85, 247, 0.1);
          color: var(--neon-purple);
          flex-shrink: 0;
        }

        .contact-info__card-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 2px;
        }

        .contact-info__card-value {
          font-size: 0.95rem;
          font-weight: 500;
        }

        .contact-whatsapp-btn {
          width: 100%;
          margin-bottom: 32px;
        }

        .contact-socials__label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .contact-socials__links {
          display: flex;
          gap: 12px;
        }

        .contact-socials__link {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          transition: all var(--transition);
        }

        .contact-socials__link:hover {
          color: var(--neon-purple);
          border-color: rgba(168, 85, 247, 0.3);
        }

        .contact-form {
          padding: 40px;
          border-radius: var(--radius-xl);
        }

        .contact-form__title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .contact-form__desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 28px;
        }

        .contact-form__group {
          margin-bottom: 20px;
        }

        .contact-form__group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .contact-form__group input,
        .contact-form__group textarea {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: var(--font-body);
          transition: all var(--transition);
          resize: vertical;
        }

        .contact-form__group input:focus,
        .contact-form__group textarea:focus {
          outline: none;
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }

        .contact-form__group input::placeholder,
        .contact-form__group textarea::placeholder {
          color: var(--text-muted);
        }

        .contact-form__submit {
          width: 100%;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 28px 20px;
          }
        }
      `}</style>
    </motion.div>
  );
}
