export const whatsappUrl = (message?: string) => `https://wa.me/5561998219571${message ? `?text=${encodeURIComponent(message)}` : ''}`;
export const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
