import { useCallback, useState } from 'react';
import type { Product } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { About, CustomOrders, Benefits, FinalCTA, Footer } from './components/BrandSections';
import { FloatingWhatsApp } from './components/WhatsAppButton';
export default function App(){const [selected,setSelected]=useState<Product|null>(null); const close=useCallback(()=>setSelected(null),[]);return <><a className="skip-link" href="#main">Pular para o conteúdo</a><Header/><main id="main"><Hero/><ProductGrid onSelect={setSelected}/><About/><CustomOrders/><Benefits/><FinalCTA/></main><Footer/><FloatingWhatsApp/><ProductModal product={selected} onClose={close}/></>}
