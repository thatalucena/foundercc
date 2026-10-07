# Founders Bio · Design System

Sistema visual da LP de link da bio do **@founders.cc**. É uma página curta, pensada para o celular: o lead chega pelo Instagram, entende em uma tela o que é o Founders e para quem é, e toca no botão que leva ao formulário de diagnóstico no Inlead.

A direção é a de uma **gravura impressa em uma tinta só**: papel creme e tinta azul. As cores foram tiradas da gravura de referência, e é a mesma dupla dos e-mails da newsletter, então bio e e-mail têm a mesma cara.

---

## 1. Cores

Uma tinta azul sobre papel creme. Sem preto e sem uma segunda cor de destaque.

### Tema claro (padrão)

| Token | Hex | Uso |
| --- | --- | --- |
| `papel` | `#F3EDDF` | Fundo da página e da barra fixa do botão. |
| `papel-escuro` | `#EAE3D1` | Fundo de quadros: caixa do case, coluna "Não é pra você se", miolo dos destaques. |
| `tinta-texto` | `#101A5E` | Todo texto principal: headline, números, títulos de item. |
| `tinta-apoio` | `#565C82` | Texto secundário: linha fina, legendas dos números, descrições, rótulos. |
| `fio` | `#DCD3BE` | Filetes, bordas da lista de oferta, divisórias dos números, anel de destaque inativo. |
| `tinta` | `#2334BD` | A cor da marca: palavra destacada da headline, prazos, anel ativo, botão. |
| `tinta-sobre-azul` | `#F3EDDF` | Texto em cima de `tinta` (o botão). |
| `azul-lavado` | `#E2DFE6` | Fundo da coluna "É pra você se". Só um bloco por página. |

### Tema escuro (celular em modo escuro)

A página inverte: o azul vira papel, o creme vira letra.

| Token | Hex |
| --- | --- |
| `papel` | `#0D1446` |
| `papel-escuro` | `#162060` |
| `tinta-texto` | `#F3EDDF` |
| `tinta-apoio` | `#AEB2D2` |
| `fio` | `#26307A` |
| `tinta` | `#8F9CFF` |
| `tinta-sobre-azul` | `#0D1446` |
| `azul-lavado` | `#1D2875` |

### Contraste (verificado)

| Par | Claro | Escuro |
| --- | --- | --- |
| `tinta-texto` sobre `papel` | 13,5 : 1 | 14,9 : 1 |
| `tinta-apoio` sobre `papel` | 5,5 : 1 | 8,4 : 1 |
| `tinta-apoio` sobre `papel-escuro` | 5,1 : 1 | 7,2 : 1 |
| `tinta-apoio` sobre `azul-lavado` | 4,9 : 1 | 6,3 : 1 |
| `tinta` sobre `papel` | 7,8 : 1 | 6,9 : 1 |
| `tinta-sobre-azul` sobre `tinta` (botão) | 7,8 : 1 | 6,9 : 1 |

`fio` é decorativo e nunca leva texto.

---

## 2. Tipografia

Duas famílias do Google Fonts, ambas gratuitas.

| Papel | Família | Pesos |
| --- | --- | --- |
| Display (headline, números, prazos, case) | **Bricolage Grotesque** | 600, 800 |
| Corpo (textos, listas, rótulos, botão) | **Figtree** | 400, 500, 600, 700 |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Figtree:wght@400;500;600;700&display=swap">
```

Pilhas com fallback:

- `--display: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;`
- `--body: "Figtree", system-ui, -apple-system, "Segoe UI", sans-serif;`

### Escala

| Estilo | Família | Tamanho | Entrelinha | Peso | Extra | Onde |
| --- | --- | --- | --- | --- | --- | --- |
| `headline` | Display | 30 a 38px (`clamp(30px, 8.4vw, 38px)`) | 1,04 | 800 | espaçamento -0,025em, `text-wrap: balance` | Tese da página. Uma por página. |
| `case-titulo` | Display | 22px | 1,1 | 800 | -0,02em | Resultado em destaque na caixa do case. |
| `numero` | Display | 20px | 1,2 | 800 | -0,02em, números tabulares | Linha de números dos membros. |
| `prazo` | Display | 18px | 1,2 | 800 | números tabulares, cor `tinta` | "90 dias", "1 ano" na lista de oferta. |
| `botao` | Corpo | 17px | 1,15 | 700 | | Texto do botão principal. |
| `corpo` | Corpo | 16px | 1,5 | 400 | | Linha fina abaixo da headline. |
| `item` | Corpo | 15px | 1,5 | 700 | | Título de item da lista de oferta. |
| `apoio` | Corpo | 14px | 1,5 | 400 | cor `tinta-apoio` | Descrições, texto do case. |
| `lista-curta` | Corpo | 13,5px | 1,35 | 400 | cor `tinta-apoio` | Itens de "É pra você se / Não é". |
| `legenda` | Corpo | 12px | 1,3 | 400 a 500 | cor `tinta-apoio` | Legenda dos números e nome dos destaques. |
| `rubrica` | Corpo | 12px | 1,2 | 700 | caixa-alta, 0,08em | Rótulo de seção ("O que você recebe"). |

---

## 3. Espaçamento, raios e linhas

| Token | Valor | Uso |
| --- | --- | --- |
| `respiro-lateral` | 18px | Margem lateral da página (nunca menos de 16px). |
| `entre-blocos` | 22px | Distância entre as seções da página. |
| `interno` | 16px | Respiro horizontal de quadros e da lista de oferta. |
| `interno-curto` | 14px | Respiro vertical de quadros e linhas. |
| `vao` | 10px | Entre as duas colunas de "Pra quem é" e abaixo de rótulos. |
| `vao-curto` | 6px | Entre itens de lista curta e entre anel e nome do destaque. |

| Token | Valor | Uso |
| --- | --- | --- |
| `raio-botao` | 12px | Botão principal. |
| `raio-quadro` | 14px | Caixa do case e colunas "Pra quem é". |
| `raio-lista` | 16px | Contorno da lista de oferta. |
| `raio-circulo` | 50% | Anéis dos destaques. |
| `filete` | 1px | Bordas, divisórias e fios. Sempre em `fio`. |

Largura máxima do conteúdo: **480px**, centralizada. Barra do botão com respiro inferior de `16px + env(safe-area-inset-bottom)`.

---

## 4. Estrutura da página

De cima para baixo, nesta ordem:

1. **Tese:** rubrica opcional, headline com uma palavra em `tinta`, linha fina em `tinta-apoio`.
2. **Números dos membros:** três colunas iguais com fio entre elas.
3. **Destaques (cases):** anéis tocáveis com o nome do membro e uma caixa de case logo abaixo.
4. **O que você recebe:** lista contornada com prazo à esquerda.
5. **Pra quem é / não é:** duas colunas lado a lado, que viram uma só abaixo de 360px.
6. **Assinatura:** "Dante Araújo e Gustavo Macedo", centralizada, em `legenda`.
7. **Botão fixo:** barra presa ao rodapé com o botão principal.

A página não abre com cabeçalho de perfil (avatar e @). Foi retirado de propósito: a headline é a primeira coisa que o lead lê.

---

## 5. Componentes

### Headline (tese)
- Uma frase com verbo, até três linhas no celular.
- Uma única palavra ou expressão em `tinta` (`<em>`, sem itálico). Exemplo: "Seu perfil pode ser o **melhor vendedor** da sua empresa."
- Linha fina em `corpo`, com a última frase em `tinta-texto` 600 para fechar.

### Números dos membros
- Grade de 3 colunas iguais, fio `filete` acima e abaixo e entre as colunas.
- Número em `numero`, legenda em `legenda` com até 3 palavras.
- Exemplos em uso: **3x** em contratos/mês · **+R$200 mil** vendidos pelo perfil · **5 dias** pra vender 1 imóvel.
- Só número real, autorizado pelo membro.

### Destaques
Inspirado nos destaques do Instagram.
- Anel de 62px com borda de 2px: `fio` quando inativo, `tinta` quando selecionado. Miolo em `papel-escuro` com as iniciais em `tinta` (Display 800, 16px).
- Nome abaixo em `legenda`, até duas linhas, largura de 64px.
- Faixa com rolagem lateral, sem barra visível, sangrando até a borda da tela.
- O primeiro já vem selecionado, para a caixa do case nunca aparecer vazia.
- Caixa do case: fundo `papel-escuro`, `raio-quadro`, título em `case-titulo` e texto em `apoio`.

### Lista "O que você recebe"
- Contorno de 1px em `fio`, `raio-lista`, linhas separadas por fio.
- Prazo à esquerda (coluna de 52px) em `prazo`; título em `item` e descrição em `apoio`.

### Pra quem é / não é
- Duas colunas com `vao` entre elas.
- "É pra você se" em `azul-lavado`, com título em `tinta`. "Não é pra você se" em `papel-escuro`, com título em `tinta-texto`.
- Três itens curtos em cada, sem marcador.

### Botão principal
- Fundo `tinta`, texto `tinta-sobre-azul`, `raio-botao`, altura mínima de 56px, largura cheia (até 444px).
- Duas linhas: ação em `botao` ("Fazer meu diagnóstico") e apoio em 12,5px, peso 500, 85% de opacidade ("2 minutos · sem custo").
- Fica em uma barra fixa no rodapé, com degradê de `papel` por trás para o conteúdo não brigar com o botão.
- Toque: encolhe para 98%. Foco: contorno de 3px em `tinta-texto`.

---

## 6. Texto

- Fala de quem faz, não de quem vende curso. Fato antes de adjetivo: "fechou a venda em 5 dias" vence "resultados incríveis".
- Headline sempre com verbo e com o resultado, não com o processo.
- Todo case diz quem executou quando a execução foi do membro.
- O botão diz o que acontece ("Fazer meu diagnóstico") e quanto custa em tempo.
- Proibido: emoji, exclamação, "transformação", "jornada", "virada de chave", "mindset".
- Nunca ir contra a tese de que visibilidade traz venda.

---

## 7. Movimento e acessibilidade

- Só dois movimentos: troca de cor do anel do destaque (0,2s) e o toque do botão (0,15s). Ambos desligam com `prefers-reduced-motion`.
- Todo elemento tocável tem foco visível.
- Os destaques são botões com `aria-pressed`, e a caixa do case tem `aria-live="polite"`.

---

## 8. CSS de referência

```css
:root{
  --papel:#F3EDDF; --papel-escuro:#EAE3D1; --tinta-texto:#101A5E; --tinta-apoio:#565C82;
  --fio:#DCD3BE; --tinta:#2334BD; --tinta-sobre-azul:#F3EDDF; --azul-lavado:#E2DFE6;
  --display:"Bricolage Grotesque","Figtree",system-ui,sans-serif;
  --body:"Figtree",system-ui,-apple-system,"Segoe UI",sans-serif;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --papel:#0D1446; --papel-escuro:#162060; --tinta-texto:#F3EDDF; --tinta-apoio:#AEB2D2;
    --fio:#26307A; --tinta:#8F9CFF; --tinta-sobre-azul:#0D1446; --azul-lavado:#1D2875;
    color-scheme:dark;
  }
}
```

---

## 9. Relação com o design system do Founders

O design system oficial do Founders ("o jornal da comunidade") usa outras regras: serifa (Newsreader) nos títulos, Libre Franklin nos rótulos, cantos retos e Masthead no topo. Esta LP diverge dele em três pontos:

- **Tipografia:** Bricolage Grotesque e Figtree, no lugar da serifa.
- **Cantos:** arredondados (12 a 16px), no lugar de retos.
- **Linguagem visual:** destaques e números no estilo Instagram, no lugar da página de jornal.

As cores são quase as mesmas (papel creme e tinta azul). Para alinhar a LP ao sistema oficial, basta trocar as fontes e zerar os raios.
