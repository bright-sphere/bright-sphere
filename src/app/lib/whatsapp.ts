
const WHATSAPP_PHONE = "9108905064";

export const getWhatsAppLink = (message?: string) => {
    const encodedMessage = message
        ? `?text=${encodeURIComponent(message)}`
        : "";

    return `https://wa.me/${WHATSAPP_PHONE}${encodedMessage}`;
};
