import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildProductOrderMessage, openWhatsApp } from '../utils/whatsapp';

interface WhatsAppButtonProps {
  productName: string;
  price: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function WhatsAppButton({
  productName,
  price,
  size = 'md',
  className = '',
}: WhatsAppButtonProps) {
  const handleClick = () => {
    openWhatsApp(buildProductOrderMessage(productName, price));
  };

  return (
    <motion.button
      className={`btn btn-whatsapp ${size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : ''} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle size={size === 'lg' ? 22 : size === 'sm' ? 16 : 18} />
      Buy via WhatsApp
    </motion.button>
  );
}
