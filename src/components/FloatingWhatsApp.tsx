import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildGeneralInquiryMessage, openWhatsApp } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <motion.button
      className="floating-whatsapp"
      onClick={() => openWhatsApp(buildGeneralInquiryMessage())}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="floating-whatsapp-pulse" />

      <style>{`
        .floating-whatsapp {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 1000;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          border: none;
          cursor: pointer;
        }

        .floating-whatsapp-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.5);
          animation: whatsappPulse 2s ease-in-out infinite;
        }

        @keyframes whatsappPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .floating-whatsapp {
            bottom: 20px;
            right: 20px;
            width: 54px;
            height: 54px;
          }
        }
      `}</style>
    </motion.button>
  );
}
