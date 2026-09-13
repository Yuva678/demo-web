import { WHATSAPP_NUMBER } from '../config';

/**
 * Generate a WhatsApp click-to-chat URL with a pre-filled message.
 * @param {string} [message] — optional pre-filled message
 * @returns {string} fully encoded wa.me URL
 */
export function getWhatsAppUrl(message = '') {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Build the standard property enquiry message.
 */
export function getPropertyEnquiryUrl(propertyName, location) {
  const msg = `Hi, I'm interested in the ${propertyName} in ${location}. I'd like to know more about this property.`;
  return getWhatsAppUrl(msg);
}
