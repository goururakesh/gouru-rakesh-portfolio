import { PERSONAL } from '../constants';

/**
 * Opens WhatsApp with a pre-filled message (works on mobile & desktop).
 */
export function sendToWhatsApp({ name, email, message }) {
  const phone = PERSONAL.whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent(
    `*Portfolio Contact*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Message:*\n${message}`
  );
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
