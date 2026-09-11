# PROMPT MASTER — IMPLEMENTAÇÃO DE TEMA CLARO E ESCURO NA VENTURARE

## Objetivo

Implementar no site da Venturare um sistema completo de alternância entre tema escuro e tema claro, com botão no header, persistência da preferência e adaptação correta das cores.

O tema escuro atual deve permanecer visualmente equivalente ao site publicado. O tema claro deve ser uma variação oficial da mesma identidade visual, não um novo design.

## Restrição absoluta

Esta tarefa é exclusivamente visual e funcional relacionada ao sistema de temas.

NÃO alterar:
- Textos, títulos, subtítulos, slogans ou chamadas para ação.
- Ordem, quantidade ou estrutura das seções.
- Imagens, fotografias ou logotipo.
- Links, rotas, SEO ou metadados.
- Arquivos MDX ou dados das collections.
- Formulários, campos, validações ou integração com Formspree.
- Variáveis de ambiente ou endpoint do formulário.
- Posicionamento comercial ou identidade da Venturare.
- Layout, espaçamentos, tamanhos tipográficos ou animações, salvo ajustes estritamente necessários ao tema.

Não aproveitar esta tarefa para fazer redesign, refatoração geral ou corrigir problemas não relacionados. Problemas fora do escopo devem apenas ser registrados no relatório final.

## Preservação do tema escuro

O tema escuro atual foi aprovado. Não redesenhá-lo.

Apenas substituir cores fixas por tokens semânticos quando necessário. O resultado deve ser visualmente equivalente ao atual.

Paleta de referência:

- Fundo principal: `#080A0B`
- Superfície: `#111518`
- Superfície elevada: `#123142`
- Navy: `#0B1B26`
- Verde institucional: `#2EB837`
- Texto principal: `#F5F7F6`
- Texto secundário: `#9BA5A8`
- Texto discreto: `#718087`
- Bordas: `#263237`

## Análise obrigatória antes de editar

Antes de alterar qualquer arquivo:

1. Identificar a arquitetura atual.
2. Localizar layout base, header, footer e estilos globais.
3. Localizar tokens e cores existentes.
4. Localizar componentes compartilhados, botões, cards, inputs, selects e navegação.
5. Verificar o uso de Tailwind, `dark:`, `data-theme` e variáveis CSS.
6. Localizar a implementação de tema do projeto Ordem da Consciência, caso esteja disponível.
7. Analisar como são tratados persistência, preferência do sistema, acessibilidade e prevenção de flash visual.

Usar Ordem da Consciência como referência técnica e visual, sem copiar código cegamente. Se o projeto não estiver disponível, seguir este documento.

## Estratégia técnica

Preferir:

- CSS custom properties.
- Tokens semânticos.
- Atributo `data-theme` no elemento `<html>`.
- Componente global de alternância.
- `localStorage`.
- `prefers-color-scheme`.
- Script mínimo de inicialização precoce.

Estrutura preferencial:

```html
<html data-theme="dark">
```

Valores permitidos: `dark` e `light`.

Não criar múltiplos sistemas concorrentes nem instalar dependências desnecessárias.

## Tokens semânticos

Organizar as cores em tokens globais, por exemplo:

```css
:root {
  --color-background: ...;
  --color-surface: ...;
  --color-surface-elevated: ...;
  --color-text-primary: ...;
  --color-text-secondary: ...;
  --color-text-muted: ...;
  --color-border: ...;
  --color-border-strong: ...;
  --color-accent: ...;
  --color-accent-hover: ...;
  --color-accent-contrast: ...;
  --color-navy: ...;
  --color-input-background: ...;
  --color-input-border: ...;
  --color-input-placeholder: ...;
  --color-success: ...;
  --color-error: ...;
  --color-focus-ring: ...;
}
```

Utilizar os tokens nos componentes em vez de espalhar cores fixas.

## Tema claro

O tema claro deve ser sofisticado, sóbrio, editorial e coerente com a Venturare. Não deve ser uma inversão automática nem um template branco genérico.

Paleta inicial:

- Fundo principal: `#F7F8F7`
- Superfície: `#FFFFFF`
- Superfície secundária: `#EEF2F1`
- Navy principal: `#0B1B26`
- Texto principal: `#0B1B26`
- Texto secundário: `#52616B`
- Texto discreto: `#6B7780`
- Bordas: `#DCE3E1`
- Borda forte: `#C9D5D1`
- Verde para textos e elementos pequenos: `#168A46`
- Verde hover: `#11733A`
- Fundo de destaque: `#0B1B26`
- Texto sobre navy: `#F5F7F6`
- Texto sobre verde: `#FFFFFF`
- Fundo dos campos: `#FFFFFF`
- Placeholder: `#7A878D`
- Foco: `#168A46`

Se houver valores oficiais no projeto Ordem da Consciência, analisá-los e usar os compatíveis com a Venturare.

Nunca usar verde claro em textos pequenos sobre branco se o contraste for insuficiente.

## Contraste

Validar nos dois temas:

- Títulos, subtítulos e textos secundários.
- Labels, eyebrows, links e navegação.
- Botões, ícones, bordas e placeholders.
- Cards, rodapé e elementos sobre navy ou verde.
- Mensagens de erro e sucesso.
- Estados de foco e disabled.

Não usar branco sobre fundo claro, cinza claro sobre branco ou verde claro como texto pequeno sobre branco. O foco de teclado deve ser visível.

## Botão de alternância

Adicionar o botão ao header existente. Não criar ou duplicar header.

O botão deve:
- Ser discreto e integrado ao header.
- Respeitar o layout atual.
- Funcionar no desktop e mobile.
- Não criar overflow.
- Não deslocar indevidamente logo ou navegação.
- Não quebrar o menu mobile.

Preferência de ícones:
- Tema escuro: ícone de sol indicando alternância para claro.
- Tema claro: ícone de lua indicando alternância para escuro.

Reutilizar biblioteca de ícones existente, se houver. Não instalar dependência apenas para isso.

Garantir `aria-label`, foco visível, navegação por teclado, área de toque adequada e contraste suficiente.

Exemplos de acessibilidade:
- `Alternar para tema claro`
- `Alternar para tema escuro`

## Persistência

Usar `localStorage` com a chave:

```text
venturare-theme
```

Valores: `light` e `dark`.

Regras:
1. Preferir o tema salvo.
2. Sem escolha salva, respeitar `prefers-color-scheme`.
3. Sem preferência detectável, usar tema escuro.
4. Manter a escolha após atualizar e navegar.
5. Funcionar com Astro/SSG.
6. Ter fallback seguro se `localStorage` não estiver disponível.
7. Não acessar `window` ou `document` em SSR.

## Prevenção de flash visual

Aplicar o tema o mais cedo possível para evitar a página abrir em um tema e mudar depois.

A solução deve:
- Ser compatível com Astro e SSG.
- Ser mínima.
- Não bloquear desnecessariamente o carregamento.
- Não gerar erros de SSR, hidratação ou navegador.
- Não duplicar a lógica do botão.

## Elementos a adaptar

Adaptar somente cores e estados, preservando estrutura e conteúdo:

- Body e fundos das seções.
- Header, navegação, menu mobile e botão de tema.
- Hero, títulos, subtítulos, eyebrows e botões.
- Trajetórias e linhas gráficas.
- Cards, números, ícones, links e hover.
- Inputs, textareas, selects, placeholders, foco, disabled, erro e sucesso.
- Footer.
- Página 404.
- Todas as páginas existentes.

Atenção especial ao `<select>`:
- No escuro, não pode ficar com fundo claro e texto claro.
- No claro, não pode ficar com texto branco sobre fundo claro.
- Opções, placeholder e valor selecionado devem ser legíveis.
- Não alterar os textos ou valores das opções.

## Formulário

Não alterar endpoint, variáveis, campos, nomes, validação, método, mensagens ou estrutura de dados.

Apenas adaptar visualmente:
- Fundo, textos, labels, inputs, textarea, select, placeholder, bordas, foco, botões, carregamento, sucesso e erro.

Confirmar que o envio pelo Formspree continua funcionando.

## Responsividade

Validar em desktop, tablet e mobile, incluindo:
- Header no topo e após rolagem.
- Menu mobile aberto e fechado.
- Formulário e select em mobile.
- Footer em mobile.

O botão não pode quebrar o header, sobrepor a navegação, criar rolagem horizontal ou ficar sem contraste.

## Transições

Pode haver transição discreta de 180ms a 400ms apenas para cores:

```css
transition:
  background-color 180ms ease,
  color 180ms ease,
  border-color 180ms ease;
```

Não animar layout, tamanhos, imagens, logo ou seções. Respeitar `prefers-reduced-motion: reduce`.

## Escopo de arquivos

Alterar somente os arquivos realmente necessários, preferencialmente:
- Estilos globais.
- Layout base.
- Header/componente compartilhado.
- Componente de alternância.
- Utilitário de tema.
- Configuração mínima de tokens.

Não alterar arquivos de conteúdo, MDX, imagens ou logo. Não duplicar regras de tema em cada página sem necessidade.

## Validação obrigatória

Executar:

```bash
npm run check
npm run build
```

Ou os comandos equivalentes existentes.

Verificar:
- Zero erros de TypeScript, Astro, SSR ou hidratação.
- Build concluído.
- Todas as rotas funcionando.
- Nenhum erro de console relacionado ao tema.
- Nenhum overflow horizontal.
- Nenhum conteúdo, imagem, logo ou rota alterado.
- Formulário funcionando.

## Critérios de aceite

A tarefa só estará concluída quando:

1. O botão estiver no header atual.
2. Alternar entre claro e escuro funcionar sem recarregar.
3. A preferência for persistida.
4. A preferência for mantida ao navegar.
5. A preferência do sistema funcionar sem escolha salva.
6. Não houver flash visual relevante.
7. O tema escuro permanecer equivalente ao atual.
8. O tema claro for legível e coerente.
9. Todos os textos e imagens forem preservados.
10. Nenhuma seção ou rota for adicionada/removida.
11. O formulário continuar funcionando.
12. O select de `/conversar` for legível nos dois temas.
13. Menu mobile e footer funcionarem nos dois temas.
14. O build passar sem erros.
15. Nenhuma alteração fora do escopo tiver sido feita.

## Relatório final

Informar:
1. Arquivos alterados.
2. Descrição objetiva da implementação.
3. Estratégia de persistência.
4. Estratégia de prevenção de flash.
5. Tokens criados ou ajustados.
6. Confirmação de preservação do tema escuro.
7. Confirmação de que nenhum conteúdo foi alterado.
8. Confirmação de que o formulário não foi alterado funcionalmente.
9. Resultado do check.
10. Resultado do build.
11. Problemas fora do escopo apenas registrados.

## Instrução final

Implemente somente o sistema de tema claro/escuro.

Preserve integralmente o conteúdo, a estrutura, o layout, a identidade visual, as imagens, o logotipo, as rotas, o SEO, o formulário e o funcionamento atual do site Venturare.

Se houver dúvida entre alterar e preservar, preserve o estado atual.
