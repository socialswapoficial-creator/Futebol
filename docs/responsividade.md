# Revisão de responsividade — Centro Esportivo HB

Data: 17/11/2026. Landing page institucional com pré-matrícula e painel administrativo. React/TypeScript com Vinext. Identidade amarela e preta preservada.

## Diagnóstico

- Viewport fixo em 1280 px impedia reflow natural em celulares.
- Regras antigas sobrepostas afetavam navegação, cards, fontes e formulário.
- Grid de jogos e carrossel dependiam de dimensões rígidas; títulos e controles ficavam pequenos na versão reduzida.
- Cabeçalho transparente precisava acomodar os quatro links sem novo menu.
- Espaçamentos e larguras não tinham limites consistentes em monitores grandes.

## Implementação

A camada `app/responsive.css` centraliza as restrições do design atual, após os estilos existentes. Viewport device-width com zoom permitido. Containers fluidos até 1200 px, cabeçalho até 1280 px e vídeo até 1120 px. Gutters de 20 a 72 px e espaçamento de seção de 56 a 100 px. Recortes usam uma variável compartilhada de 24 a 48 px, com sobreposição coerente entre hero, agenda e história.

| Faixa | Organização |
|---|---|
| Até 600 px | Logo acima dos quatro links visíveis; agenda em uma coluna; categorias em duas linhas; formulário de largura total; rodapé vertical |
| 601 a 1000 px | Agenda com duas colunas; história e categorias reorganizadas; painel com métricas em duas colunas |
| Acima de 1000 px | Agenda com três colunas; cabeçalho horizontal; formulário à direita e conteúdo limitado em telas amplas |

Fontes fluidas com clamp, linhas confortáveis e inputs de 16 px. Controles principais com pelo menos 44 px de altura. Imagem do hero com variantes WebP de 640, 960 e 1536 px. Proporções e object-fit preservados. Vídeo panorâmico mantém reprodução por visibilidade e áudio ativado por toque. Sub-6 preserva fotos; Sub-7 a Sub-13 preservam os placeholders. O carrossel usa dimensões fluidas e recorta somente a composição decorativa em seu próprio espaço. Tabela administrativa tem scroll próprio e região focável por teclado.

## Matriz de validação

Chrome em prévia local, usando iframe com largura controlada. A barra vertical do navegador ocupou 15 px dentro do frame. Sem overflow horizontal da página ou campos maiores que o contêiner nas larguras abaixo. Não são testes em aparelhos físicos.

| Largura do frame | Landing page | Painel | Colunas de jogos |
|---|---|---|---|
| 320 px | Sem overflow | Sem overflow | 1 |
| 375 px | Sem overflow | Sem overflow | 1 |
| 390 px | Sem overflow | Sem overflow | 1 |
| 430 px | Sem overflow | Sem overflow | 1 |
| 600 px | Sem overflow | Sem overflow | 1 |
| 768 px | Sem overflow | Sem overflow | 2 |
| 850 px | Sem overflow | Sem overflow | 2 |
| 1024 px | Sem overflow | Sem overflow | 3 |
| 1280 px | Sem overflow | Sem overflow | 3 |
| 1440 px | Sem overflow | Sem overflow | 3 |
| 1920 px | Sem overflow | Sem overflow | 3 |

Inspeção visual adicional em 320 px e 390 px e formato horizontal 768 × 360. Os links do cabeçalho mantiveram altura mínima de 44 px na matriz; título ficou abaixo do cabeçalho em todas as medições. Campos mantiveram fonte de 16 px. Filtro Sub-11 exibiu um card, Sub-13 exibiu três placeholders e ativação de áudio alterou muted para false, reiniciando o vídeo. Vídeo observado com readyState 4 e reprodução ativa.

## Checklist e limites

- [x] Viewport fluido e zoom habilitado.
- [x] Containers, gaps, tipos e gutters adaptáveis.
- [x] Navegação, hero e CTA legíveis nas larguras testadas.
- [x] Grid 3 → 2 → 1 e imagens com proporção preservada.
- [x] Formulário com teclado telefônico e campos de 16 px.
- [x] Filtro, categorias e ativação de áudio verificados.
- [x] Sem overflow horizontal nos testes da página e do painel.
- [x] Tratamento de movimento reduzido preservado.
- [x] Painel revisado nos estados sem registros/acesso disponível na prévia.
- [ ] Safari, Firefox, Edge e dispositivos físicos: não disponíveis nesta validação.
- [ ] Tabela com registros reais, envio de pré-matrícula e alterações de status: não executados; não foram criados registros para teste.
- [ ] Zoom ampliado e leitores de tela: não validados manualmente.

Critério: aprovado nas larguras e interações verificadas, com as pendências de ambiente e estados de dados descritas acima.
