import { test, expect } from '@playwright/test';
import { products } from '../src/data/products';

test('catálogo, filtros, fotos e mensagens de todas as peças', async ({page}) => {
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('.product-card')).toHaveCount(28);
 for (const product of products) {
  const response=await page.request.get(product.image);expect(response.ok()).toBeTruthy();expect(response.headers()['content-type']).toContain('image/webp');
  const thumbnail=await page.request.get(product.thumbnail);expect(thumbnail.ok()).toBeTruthy();
  const link=page.locator('.product-card').filter({has:page.getByRole('heading',{name:product.name,exact:true})}).getByRole('link');
  const href=await link.getAttribute('href');const url=new URL(href!);
  expect(url.origin+url.pathname).toBe('https://wa.me/5561998219571');
  expect(url.searchParams.get('text')).toContain(product.name);
  expect(url.searchParams.get('text')).toContain(product.price.toFixed(2).replace('.',','));
 }
 for(const category of ['Crochê','Tapetes','Jogos de banheiro','Infantil','Sandálias']){
  await page.getByRole('button',{name:category,exact:true}).click();
  await expect(page.locator('.product-card')).toHaveCount(products.filter(p=>p.tags.includes(category)).length);
 }
 await page.getByRole('button',{name:'Todos',exact:true}).click();
 await expect(page.locator('.product-card')).toHaveCount(28);
 const links=await page.locator('a[href*="wa.me"]').evaluateAll(elements=>elements.map(e=>(e as HTMLAnchorElement).href));
 expect(links.every(h=>new URL(h).pathname==='/5561998219571')).toBeTruthy();expect(errors).toEqual([]);
});

test('modal acessível: teclado, foco, fechar e clique externo',async({page})=>{
 await page.goto('/');const trigger=page.getByRole('button',{name:`Ver detalhes de ${products[0].name}`,exact:true});
 await trigger.click();const dialog=page.getByRole('dialog');await expect(dialog).toBeVisible();
 await expect(dialog.getByRole('heading')).toHaveText(products[0].name);
 await expect(dialog.locator('img')).toBeVisible();
 await page.keyboard.press('Escape');await expect(dialog).not.toBeVisible();await expect(trigger).toBeFocused();
 await trigger.click();await page.getByRole('button',{name:'Fechar detalhes do produto'}).click();await expect(dialog).not.toBeVisible();
 await trigger.click();await page.mouse.click(3,3);await expect(dialog).not.toBeVisible();
});

for(const width of [320,375,390,430,768,1024,1440])test(`responsividade em ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.goto('/');
 await page.evaluate(()=>document.fonts.ready);
 if(width===1440||width===390)await page.screenshot({path:`test-results/home-${width}.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
 if(width<=800){await page.getByRole('button',{name:'Abrir menu'}).click();await page.locator('#main-navigation').getByRole('link',{name:'Produtos',exact:true}).click();await expect(page.getByRole('button',{name:'Abrir menu'})).toHaveAttribute('aria-expanded','false')}
 await page.locator('.product-image').first().click();await expect(page.getByRole('dialog')).toBeVisible();
 expect(await page.getByRole('dialog').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
 await page.keyboard.press('Escape');
 await page.locator('footer').scrollIntoViewIfNeeded();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
});
