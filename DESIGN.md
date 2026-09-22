# Design System: Rafael Fernandes — Portfólio

**Projeto:** rafael-portfolio (React + Vite + Tailwind, código-fonte próprio — não gerado via Stitch)
**Repositório:** https://github.com/rafaffernandes/rafael-portfolio
**Direção:** "Editorial de dados"

## 1. Visual Theme & Atmosphere

Um portfólio de liderança sênior tratado como relatório executivo, não como landing page de produto SaaS. A atmosfera é **serena, confiante e orientada a dados** — papel quente em vez de branco clínico, tinta escura em vez de preto puro, e um único acento âmbar usado com moderação cirúrgica (nunca decorativo). A hierarquia vem da tipografia e do espaço negativo, não de sombra ou cor: quase não há `box-shadow` perceptível no sistema. Números de impacto (-25%, +R$1,5M) são tratados como elementos editoriais grandes, não como badges de UI. Seções são numeradas (01–05) como um sumário de revista/relatório, reforçando a ideia de "prova documentada" em vez de "página de vendas."

Densidade: média-baixa, com respiro generoso entre blocos, mas sem cair em minimalismo vazio — cada seção carrega dado real (métrica, empresa, resultado).

## 2. Color Palette & Roles

| Nome descritivo | Hex (light) | Hex (dark) | Papel funcional |
|---|---|---|---|
| Papel Quente (`--background`) | `#FAF6EE` (aprox., hsl 42 33% 97%) | `#0A0E17` (hsl 222 45% 7%) | Fundo base — nunca branco puro |
| Tinta (`--foreground` / `--primary`) | `#12172A` (hsl 222 45% 10%) | `#F2ECDD` (hsl 42 28% 95%) | Texto principal, CTAs de alto contraste |
| Âmbar Sinal (`--accent`) | `#F5A524`-ish (hsl 36 92% 50%) | hsl 36 92% 55% | Único acento — CTA primário, números de destaque, rótulos "eyebrow", hover states |
| Cinza-Papel (`--muted` / `--secondary`) | hsl 40 18% 91% | hsl 222 30% 14% | Fundos de seção alternados, divisores sutis |
| Texto Secundário (`--muted-foreground`) | hsl 220 12% 38% | hsl 220 12% 65% | Parágrafos de apoio, legendas |
| Traço (`--border`) | hsl 40 15% 83% | hsl 222 25% 20% | Linhas finas no lugar de sombra — separadores, molduras de card |

**Regra de uso do acento:** âmbar aparece em no máximo 1–2 elementos por seção (rótulo eyebrow, um CTA, um hover). Nunca em fundos grandes.

## 3. Typography Rules

- **Display (títulos, nomes, métricas grandes):** `Fraunces` — serifada com personalidade, variable font (peso 300–900, optical size 9–144). Usada em `text-4xl` a `text-7xl`, sempre `font-semibold` ou mais pesado, `tracking-tight`. Números de impacto também usam Fraunces + `tabular-nums` para alinhamento.
- **Corpo (parágrafos, descrições):** `IBM Plex Sans` — grotesca legível e discreta, pesos 400/500/600/700. Nunca Inter/Roboto/Arial.
- **Rótulos, mono, dados (eyebrows, nav, índices de seção, datas):** `IBM Plex Mono` — uppercase, `tracking-[0.15em]` a `tracking-[0.25em]`, tamanho `text-xs`. Reforça a leitura de "ficha técnica" sem virar estética de dashboard.
- **Pareamento:** serifada grande + mono pequeno é o contraste que carrega a identidade "editorial de dados" — nunca usar as duas em elementos do mesmo peso visual.

## 4. Component Stylings

* **Buttons:** cantos quase retos (`rounded-sm`, `--radius: 0.25rem`). Variante `hero`/`default` = fundo âmbar sólido, texto tinta, hover inverte para fundo tinta/texto papel (nunca `scale()` ou sombra elevada). Variante `outline` = borda fina `foreground/30`, preenche com tinta no hover. Sem gradientes em botão.
* **Cards/Containers:** **sem sombra** (`shadow-sm`/`shadow-card` reduzido a 1px quase imperceptível). Grids de destaque (About, Skills, Projects) usam a técnica `gap-px bg-border` — um traço de 1px entre células no lugar de card individual com borda + gap, criando efeito de tabela/ficha. Cantos sempre retos ou `rounded-sm`.
* **Inputs/Forms:** não há formulários no site atual (contato é só links diretos — mailto, WhatsApp, LinkedIn); se forem adicionados, seguir a mesma regra de traço fino (`border-foreground/30`), sem preenchimento colorido, foco em `ring-accent`.
* **Imagens de projeto:** `grayscale` por padrão, `grayscale-0` no hover (transição 500ms) — reforça o tom editorial/documental e faz o acento âmbar (que nunca desatura) se destacar mais.
* **Retrato (Hero):** moldura quadrada deslocada (borda âmbar 3px offset atrás da foto), `aspect-[4/5]`, sem borda circular nem blur de gradiente atrás.

## 5. Layout Principles

- **Grid assimétrico no Hero:** 8/12 colunas de texto + 4/12 de retrato deslocado à direita — nunca centralizado.
- **Alinhamento à esquerda como padrão** em títulos de seção (exceto quando um alinhamento centralizado é explicitamente pedido); título de seção sempre precedido por índice numérico (`01`–`05`) + rótulo mono em âmbar (padrão implementado em [`SectionHeading.tsx`](src/components/SectionHeading.tsx)).
- **Timeline vertical** (Experiência) usa traço fino + marcador circular âmbar, não cards empilhados.
- **Faixa de estatísticas** (Hero) usa divisores verticais finos entre números — o dado "flutua" no espaço em vez de estar dentro de um card.
- **Container:** `max-w-5xl`/`max-w-6xl` conforme densidade da seção; padding lateral padrão `px-4 sm:px-6 lg:px-8`.
- **Responsivo:** grids de 2–4 colunas colapsam para 1 coluna abaixo de `sm` (640px); nav desktop (`md:flex`) vira CTA único "Contato" no mobile.
