# Venturare — Site Institucional

> Transformando Visão em Resultados

## Stack

- **Framework:** Astro 5.18.x (SSG)
- **Linguagem:** TypeScript (strict)
- **CSS:** Tailwind CSS 3.x
- **Conteúdo:** MDX + Zod (content collections)
- **Deploy:** GitHub → Vercel
- **Domínio:** venturare.com.br

## Como rodar

```bash
npm install
npm run dev
```

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build estático |
| `npm run preview` | Preview do build |
| `npm run check` | Verificação de tipos |

## Estrutura

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── ui/           # Button, Container, Section, Eyebrow, Heading, Badge
│   ├── trajectory/   # Trajetória (Fase 2)
│   ├── cards/        # SolutionCard, ExperienceCard, InsightCard (Fase 2)
│   ├── seo/          # SEO/Head
│   ├── navigation/   # SkipLink, Breadcrumb
│   └── forms/        # ContactForm (Fase 8)
├── content/
│   ├── config.ts     # Zod schemas
│   ├── insights/     # MDX insights por categoria
│   └── experiences/  # MDX experiências
├── layouts/
│   ├── BaseLayout.astro
│   └── PageLayout.astro
├── pages/            # Rotas
├── lib/              # Utils, constants, json-ld
├── data/             # Dados de navegação
└── styles/
    └── global.css    # Design system base
```

## Convenções

- Componentes: PascalCase (`Button.astro`)
- Páginas: kebab-case (`como-pensamos.astro`)
- Content: kebab-case (`meu-insight.mdx`)
- Imports: alias `@/` → `src/`
- TypeScript: strict mode
- CSS: Tailwind utility-first com tokens customizados

## Paleta

| Token | Cor | Uso |
|-------|-----|-----|
| `venturare-black` | #080A0B | Fundo principal |
| `venturare-graphite` | #111518 | Cards, superfícies |
| `venturare-dark-navy` | #0B1B26 | Variações de fundo |
| `venturare-navy` | #123142 | Bordas, elementos |
| `venturare-green` | #2EB837 | Identidade, CTAs |
| `venturare-white` | #F5F7F6 | Texto principal |
| `venturare-muted` | #9BA5A8 | Texto secundário |
| `venturare-border` | #263237 | Bordas |
| `venturare-copper` | #B8895A | Acento experimental |

## Licença

Proprietário — Venturare
