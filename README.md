## Fórmula do Básico ao Barman — Landing Page

Landing page construída com React + Vite + TypeScript e Tailwind CSS v4, seguindo o layout e a copy dos PDFs anexos (Oferta/Produto/Layout). Foco em conversão, com CTA claro, mecanismo único e lista de entregáveis e bônus.

### Stack
- React 19 + Vite 7 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`) + Typography plugin

## Como rodar

Requisitos: Node 18+.

1. Instalar dependências
```powershell
npm install
```

2. Rodar em desenvolvimento
```powershell
npm run dev
```
Abra http://localhost:5173

3. Build de produção
```powershell
npm run build
npm run preview
```

## Estrutura principal
- `src/App.tsx`: layout da página (Hero, Mecanismo Único, O que é, Entregáveis, Bônus, CTA).
- `src/index.css`: importa Tailwind v4 e plugins, define fontes e referências de conteúdo.
- `index.html`: meta tags e hook do React.

## Tailwind v4 (importante)
Este projeto usa Tailwind v4 com PostCSS:
- Configuração em `postcss.config.js` usando `@tailwindcss/postcss` e `autoprefixer`.
- As utilities estão disponíveis via `@import "tailwindcss";` no `src/index.css`.
- O plugin Typography é habilitado com `@plugin "@tailwindcss/typography";`.

Se aparecer erro de classe desconhecida, reinicie o `npm run dev` após mudanças grandes no CSS.

## Customização de design
- Paleta orientada a drinks/hospitalidade; ajuste classes Tailwind em `App.tsx` (cores, sombras, gradientes).
- Imagens dummy: troque os placeholders (`https://images.unsplash.com/...`) por imagens próprias na pasta `public/` ou CDN.
- Tipografia: ajuste fontes no `index.css` (variáveis `--font-display`/`--font-body`) e classes em títulos/paragraphs.

## Deploy (GitHub Pages)
Opção simples com GitHub Pages (SPA):
1. Adicione `"homepage": "."` no `package.json` (para paths relativos).
2. Faça o build: `npm run build`.
3. Publique o conteúdo de `dist/` no branch `gh-pages` (manualmente ou com Action):
  - via CLI: `npx gh-pages -d dist` (requer instalar `gh-pages`).
  - ou crie uma GitHub Action de deploy (Pages) apontando para `dist`.

## Licença
Uso interno do projeto/formato de landing. Ajuste conforme necessidade.
