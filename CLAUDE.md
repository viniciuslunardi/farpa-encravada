# CLAUDE.md — Contexto do projeto FARPA ENCRAVADA

## O que é este projeto

Site pessoal e portfolio do Vinicius Lunardi sob a marca **Farpa Encravada**: quem ele é,
o trabalho com a banda (Budang), os créditos como produtor/mixador e o conteúdo
(YouTube/Reels). Posicionamento definido em entrevista: guitarrista, produtor musical e
criador de conteúdo — **os três com peso igual**, cada seção com seu próprio CTA.

É o projeto irmão do BACKSTAGE (`../backstage`) — mesmo dono, mesmas diretrizes de
fluxo, board próprio no Notion.

## Stack e estrutura

- React 18 + Vite, site estático de página única
- `src/content.js`: **todo o conteúdo editável** (textos, links, créditos) vive aqui,
  separado dos componentes — tasks de "Conteúdo" no board só mexem neste arquivo
- `src/App.jsx`: componentes e layout · `src/styles.css`: estilos (CSS puro, sem lib)
- Deploy: GitHub Pages via Actions (`.github/workflows/deploy.yml`), push na `main`
  publica. `base: "/farpa-encravada/"` no `vite.config.js` — mudar pra `"/"` quando
  houver domínio próprio.

## Design (punk editorial claro)

Evolução do DNA punk do BACKSTAGE, mas em paleta clara e com mais classe:
- Fundo off-white `#f4f4f2`, tinta `#111`, cinzas, fio de vermelho `#d92b1c` como acento
- Helvetica (system stack), pesos 700/900, títulos enormes uppercase com tracking
  negativo, segunda linha do hero em outline
- Seções numeradas (01–05), linhas finas, muito respiro — editorial, não app
- Idioma da UI: pt-BR

## Fluxo de trabalho (igual ao BACKSTAGE)

Tasks no board do Notion **"FARPA ENCRAVADA — Board do Projeto"**
(mesmas colunas: Backlog / Em andamento / Feito · propriedades: Prioridade, Área, Notas;
Área tem opção extra "Conteúdo" pra tasks de texto/foto/links).

Ciclo: task em "Em andamento" → branch descritiva a partir de `main` → implementar →
PR pra revisão do Vinicius (nunca mergear por conta própria) → merge → "Feito".

Especificação de tasks novas: sempre em Backlog, com `## Objetivo`, `## Passos`
(checklist) e `## Notas`, sem duplicar tasks existentes.

## Convenções

- Commits e PRs em português, pequenos, um por task
- Sem segredos no código: o site é estático no GitHub Pages — **nenhuma chave de API
  pode ir pro bundle**. Integrações (YouTube/Instagram) via fontes públicas (RSS,
  embeds) ou fetch em build-time via Action com secret do repo.
- Placeholders são marcados com `TODO:` em `src/content.js`

## Contexto de produto

- Usuário final: visitantes (bandas em busca de produção/mix, audiência do canal)
- Dono: Vinicius — canal de YouTube sobre home studio/guitarra/gear, tour vlogs com a
  Budang, Reels; produz e mixa bandas independentes no home studio
- Contato: e-mail público (mailto) — sem WhatsApp no site, decisão de entrevista
- Roadmap: conteúdo real (bio/fotos/créditos/links) → SEO/OG → integrações YT/IG
  pra vitrine e insights de nicho → domínio próprio
