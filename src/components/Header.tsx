import { useEffect, useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
export const links = [['Início','inicio'],['Produtos','produtos'],['Sobre','sobre'],['Encomendas','encomendas'],['Contato','contato']];
export function Brand() { return <a className="brand" href="#inicio" aria-label="Selma Artes em Detalhes — início"><Flower2 size={37} strokeWidth={1}/><span><strong>Selma</strong><small>ARTES EM DETALHES</small></span></a>; }
export function Header() {
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>20); onScroll(); window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 return <><div className="announcement">Peças únicas, feitas com carinho <span>♡</span> Crochê e muito mais...</div><header className={scrolled?'site-header scrolled':'site-header'}><div className="container header-inner"><Brand/><nav id="main-navigation" aria-label="Navegação principal" className={open?'navigation is-open':'navigation'} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);document.getElementById('menu-toggle')?.focus()}}}>{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}</nav><WhatsAppButton className="header-cta"/><button id="menu-toggle" className="icon-button menu-toggle" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header></>;
}
