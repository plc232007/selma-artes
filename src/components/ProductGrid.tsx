import { useState } from 'react';
import { Flower2 } from 'lucide-react';
import { categories, products } from '../data/products';
import type { Category, Product } from '../data/products';
import { ProductCard } from './ProductCard';
export function ProductGrid({ onSelect }: { onSelect: (p: Product)=>void }) {
 const [category,setCategory]=useState<Category>('Todos');
 const filtered=products.filter(p=>category==='Todos'||p.tags.includes(category));
 return <section id="produtos" className="catalog section-space"><div className="container"><div className="section-heading"><div><p className="eyebrow">DETALHES QUE ENCANTAM</p><h2>Nossas peças<span>.</span></h2><p>Cada peça é produzida com carinho e atenção aos detalhes.</p></div><Flower2 className="heading-flower" size={65} strokeWidth={.8}/></div><div className="category-bar" aria-label="Filtrar produtos por categoria">{categories.map(c=><button key={c} className={category===c?'category active':'category'} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="catalog-meta"><span aria-live="polite">{filtered.length} peças para se apaixonar</span><span>Clique na foto para ver os detalhes <ArrowIcon/></span></div><div className="product-grid">{filtered.map(p=><ProductCard key={p.id} product={p} onSelect={onSelect}/>)}</div><p className="catalog-footnote">Gostou de uma peça? Converse com a Selma para consultar disponibilidade e personalizações.</p></div></section>;
}
function ArrowIcon(){return <span aria-hidden="true">↗</span>}
