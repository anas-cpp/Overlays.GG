import { SITE } from '../config/site';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildProductOrderMessage(productName: string, price: string): string {
  return `Assalamualaikum, I want to buy this product.

Product: ${productName}
Price: ${price}

Please send payment details.`;
}

export function buildGeneralInquiryMessage(): string {
  return 'Hi, I want to know about your products';
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}
