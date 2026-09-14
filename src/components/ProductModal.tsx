import { useEffect, useRef } from 'react';
import { X, Heart } from 'lucide-react';
import type { Product } from '../data/products';
import { formatPrice } from '../utils/whatsapp';
import { WhatsAppButton, productMessage } from './WhatsAppButton';
export function ProductModal({ product, onClose }: { product: Product | null; onClose: ()=>void }) {
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(!product)return; const dialog=ref.current!; const previous=document.activeElement as HTMLElement;const overflow=document.body.style.overflow;dialog.showModal();document.body.style.overflow='hidden';return()=>{dialog.close();document.body.style.overflow=overflow;previous?.focus()}},[product]);
 return <dialog ref={ref} className="product-modal" aria-labelledby="modal-title" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose()}}>{product&&<div className="modal-content"><button autoFocus className="icon-button modal-close" onClick={onClose} aria-label="Fechar detalhes do produto"><X/></button><div className="modal-image"><img src={product.image} alt={product.name} width={product.width} height={product.height}/></div><div className="modal-info"><p className="eyebrow">{product.category}</p><h2 id="modal-title">{product.name}</h2><p className="price">{formatPrice(product.price)}{product.each&&<small> / cada</small>}</p><p>{product.description}</p><span className="modal-handmade"><Heart size={17}/> Feito à mão, com carinho</span><WhatsAppButton message={productMessage(product)}>Quero este produto</WhatsAppButton><small>Converse diretamente com a Selma pelo WhatsApp.</small></div></div>}</dialog>;
}
