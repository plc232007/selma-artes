import type { ReactNode } from 'react';
import { whatsappUrl, formatPrice } from '../utils/whatsapp';
import type { Product } from '../data/products';
export function WhatsAppIcon({ size = 20 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z"/><path d="M8.4 7.5c-.9.2-1.1 1.5-.5 2.9 1 2.4 3.2 4.3 5.5 4.9 1.4.4 2.5-.4 2.7-1.3l-2.4-1.4-1 1c-1.6-.6-2.8-1.8-3.4-3.3l.8-1-1-1.9Z"/></svg> }
export function productMessage(product: Product) { return `Olá, Selma! Vi no seu site ${product.name} por ${formatPrice(product.price)}${product.each ? ' cada' : ''} e gostaria de saber mais sobre ele.`; }
export function WhatsAppButton({ children = 'Falar no WhatsApp', message, className = '' }: { children?: ReactNode; message?: string; className?: string }) { return <a className={`button ${className}`} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />{children}</a>; }
export function FloatingWhatsApp() { return <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Fale com a Selma pelo WhatsApp"><span>Fale com a Selma</span><WhatsAppIcon size={28}/></a>; }
