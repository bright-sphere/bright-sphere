
const WHATSAPP_PHONE = "919876543210";

export const getWhatsAppLink = (message?: string) => {
    const encodedMessage = message
        ? `?text=${encodeURIComponent(message)}`
        : "";

    return `https://wa.me/${WHATSAPP_PHONE}${encodedMessage}`;
};
