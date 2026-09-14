# Selma Artes em Detalhes

Site-catálogo responsivo com 28 peças reais e pedidos pelo WhatsApp.

## Executar

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite (normalmente http://localhost:5173).

```bash
npm run lint
npm run build
npm run preview
```

A pasta `dist/` contém o site pronto para hospedagem estática.

## Organização

- `src/data/products.ts`: catálogo centralizado, nomes, preços, categorias, descrições, fotos e referência aos originais. `each` indica valor unitário e `tags` controla os filtros.
- `src/utils/whatsapp.ts`: telefone, construção dos links e formatação monetária.
- `src/components/WhatsAppButton.tsx`: botões e mensagem personalizada de produto.
- `src/components/`: navegação, hero, catálogo, modal e seções institucionais.
- `src/styles/global.css`: identidade visual e breakpoints mobile first.
- `public/images/`: cópias WebP otimizadas e miniaturas. Os arquivos da raiz são os originais preservados.
- `INVENTARIO-IMAGENS.md`: relação de todas as 30 imagens, associação de produtos, duplicata e diferenças em relação à lista inicial.

As fotos do catálogo usam `contain` para preservar a peça completa. A fotografia principal tem prioridade de carregamento, as demais fotos do catálogo carregam sob demanda. O modal usa `dialog` nativo, retenção de foco, ESC, fechamento externo e retorno de foco ao disparador. As animações respeitam a preferência por movimento reduzido.

As fontes DM Sans e Playfair Display vêm do Google Fonts, com alternativas locais sans-serif e Georgia em caso de indisponibilidade. Nenhuma foto externa é utilizada.

## Testes no navegador

```bash
npx playwright install chromium
npm test
```

Os testes verificam filtros, 28 fotos e miniaturas, mensagens e número do WhatsApp, modal, foco e ausência de overflow em 320, 375, 390, 430, 768, 1024 e 1440 pixels.

## Publicação

Antes de publicar, substitua o caminho relativo de `og:image` em `index.html` pela URL pública absoluta da imagem e acrescente `og:url` e canonical com o domínio real. Esses dados não foram inventados. A disponibilidade e as personalizações são consultadas diretamente com a Selma; não há carrinho, checkout ou pagamento online.

## Validação realizada

- Build de produção e ESLint concluídos sem erros.
- 9 testes Playwright aprovados usando Chromium local.
- Responsividade validada nas sete larguras solicitadas, sem rolagem horizontal.
- 28 fotos e 28 miniaturas disponíveis; número e mensagens dos produtos verificados.
- Revisão visual da primeira tela em desktop (1440 px) e celular (390 px).
- Integridade das 30 imagens originais confirmada por SHA-256.
