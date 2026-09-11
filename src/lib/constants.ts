export const SITE_TITLE = 'Venturare';
export const SITE_DESCRIPTION = 'Transformando Visão em Resultados. Conectamos estratégia, tecnologia e execução para transformar desafios complexos em resultados concretos.';
export const SITE_URL = 'https://venturare.com.br';

export const NAV_ITEMS = [
  { label: 'Como pensamos', href: '/como-pensamos' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Experiências', href: '/experiencias' },
  { label: 'Insights', href: '/insights' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Conversar', href: '/conversar', isCta: true },
];

/* ════════════════════════════════════════════════════════════
   ABORDAGEM — sequência proprietária (Compreensão → Resultados)
   ════════════════════════════════════════════════════════════ */

export interface ApproachStep {
  id: string;
  index: string;
  label: string;
  practice: string;
  headline: string;
  text: string;
}

export const APPROACH: ApproachStep[] = [
  {
    id: 'compreensao',
    index: '01',
    label: 'Compreensão',
    practice: 'ENTENDER',
    headline: 'ANTES DA SOLUÇÃO, EXISTE UMA PERGUNTA.',
    text: 'O que realmente está acontecendo?',
  },
  {
    id: 'visao',
    index: '02',
    label: 'Visão',
    practice: 'ENXERGAR',
    headline: 'QUEM ENXERGA MAIS, DECIDE MELHOR.',
    text: 'Ampliar o olhar antes de restringir as alternativas.',
  },
  {
    id: 'estrategia',
    index: '03',
    label: 'Estratégia',
    practice: 'ESCOLHER',
    headline: 'ESTRATÉGIA É ESCOLHER O QUE NÃO FAZER.',
    text: 'Direção, prioridades e foco.',
  },
  {
    id: 'tecnologia',
    index: '04',
    label: 'Tecnologia',
    practice: 'CONSTRUIR',
    headline: 'TECNOLOGIA SEM DIREÇÃO ACELERA O CAMINHO ERRADO.',
    text: 'Ferramentas a serviço da direção definida.',
  },
  {
    id: 'execucao',
    index: '05',
    label: 'Execução',
    practice: 'REALIZAR',
    headline: 'UMA DECISÃO SÓ EXISTE QUANDO COMEÇA A ACONTECER.',
    text: 'Gestão, capacidade e implementação consistente.',
  },
  {
    id: 'resultados',
    index: '06',
    label: 'Resultados',
    practice: 'EVOLUIR',
    headline: 'RESULTADO NÃO É O FIM DA JORNADA.',
    text: 'É a prova de que a direção funcionou.',
  },
];

export const APPROACH_DESCRIPTIONS: Record<string, string> = {
  compreensao: 'Entender o negócio antes de qualquer solução.',
  visao: 'Enxergar o horizonte e as possibilidades.',
  estrategia: 'Definir o caminho com clareza.',
  tecnologia: 'Escolher as ferramentas certas.',
  execucao: 'Implementar com consistência.',
  resultados: 'Transformar decisão em resultado concreto.',
};

export const TESE = 'O maior risco não é tomar a decisão errada. É tomar a decisão certa sobre uma realidade mal compreendida.';

export const PRINCIPAIS = [
  { label: 'Negócio antes da execução', value: 'NEGÓCIO ANTES DA EXECUÇÃO' },
  { label: 'Estratégia antes da tecnologia', value: 'ESTRATÉGIA ANTES DA TECNOLOGIA' },
];

/* ════════════════════════════════════════════════════════════
   SOLUÇÕES — domínios + conteúdo das páginas de detalhe
   ════════════════════════════════════════════════════════════ */

export const SOLUTIONS = [
  {
    id: 'estrategia-transformacao',
    title: 'Estratégia & Transformação',
    description: 'Compreender e definir a direção.',
    href: '/solucoes/estrategia-transformacao',
  },
  {
    id: 'tecnologia-inteligencia',
    title: 'Tecnologia & Inteligência',
    description: 'Transformar direção em possibilidades reais.',
    href: '/solucoes/tecnologia-inteligencia',
  },
  {
    id: 'execucao-evolucao',
    title: 'Execução & Evolução',
    description: 'Transformar possibilidades em movimento.',
    href: '/solucoes/execucao-evolucao',
  },
];

export interface SolutionDetail {
  id: string;
  hero: string;
  sub: string;
  reality: string;
  realityText?: string;
  principle?: { label: string; text?: string };
  ia?: { label: string; note: string };
  intros: Array<{ name: string; detail?: string }>;
  introType: 'ofertas' | 'modos';
  capabilities: string[];
  approach: string[];
  closing: string;
  closingNote?: string;
  cta: string;
}

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
  'estrategia-transformacao': {
    id: 'estrategia-transformacao',
    hero: 'ANTES DE TRANSFORMAR, É PRECISO COMPREENDER.',
    sub: 'Ajudamos organizações a transformar desafios complexos em clareza, direção e prioridades para agir.',
    reality: 'NEM TODO PROBLEMA ESTÁ ONDE PARECE.',
    intros: [
      { name: 'Diagnóstico & Direcionamento' },
      { name: 'Estratégia & Transformação' },
      { name: 'Advisory Estratégico' },
    ],
    introType: 'ofertas',
    capabilities: ['Diagnóstico', 'Processos & Jornadas', 'Priorização', 'Transformação', 'Roadmaps', 'Governança'],
    approach: ['Compreender', 'Ampliar', 'Decidir', 'Direcionar'],
    closing: 'CLAREZA PARA DECIDIR. DIREÇÃO PARA AGIR.',
    cta: 'Conversar sobre estratégia',
  },
  'tecnologia-inteligencia': {
    id: 'tecnologia-inteligencia',
    hero: 'TECNOLOGIA PARA TRANSFORMAR DECISÕES EM POSSIBILIDADES REAIS.',
    sub: 'Construímos e evoluímos capacidades digitais conectadas às necessidades do negócio.',
    reality: 'TECNOLOGIA NÃO É O PONTO DE PARTIDA.',
    ia: {
      label: 'IA É POSSIBILIDADE. VALOR É O OBJETIVO.',
      note: 'Não começamos pela tecnologia. Começamos pelo que precisa mudar. A IA é transversal às nossas capacidades — não uma oferta isolada.',
    },
    intros: [
      { name: 'Arquitetura & Modernização' },
      { name: 'Produtos Digitais & Automação' },
      { name: 'Dados, Inteligência & Integração' },
    ],
    introType: 'ofertas',
    capabilities: ['Arquitetura', 'Produtos Digitais', 'Automação', 'Dados & Inteligência', 'Integração', 'Modernização'],
    approach: ['Compreender', 'Definir', 'Projetar', 'Construir', 'Evoluir'],
    closing: 'A tecnologia pode acelerar qualquer caminho. Primeiro, precisamos ter certeza de que estamos seguindo o caminho certo.',
    cta: 'Conversar sobre tecnologia',
  },
  'execucao-evolucao': {
    id: 'execucao-evolucao',
    hero: 'ESTRATÉGIA SÓ EXISTE QUANDO A EXECUÇÃO SUSTENTA A DECISÃO.',
    sub: 'Transformamos direção em movimento por meio de gestão, liderança, especialistas e tecnologia.',
    reality: 'ENTRE UMA BOA DECISÃO E UM BOM RESULTADO EXISTE A EXECUÇÃO.',
    principle: {
      label: 'NÃO VENDEMOS PESSOAS. CONSTRUÍMOS CAPACIDADE DE EXECUÇÃO.',
    },
    intros: [
      { name: 'Projetos & Implementação', detail: 'quando existe objetivo claro e entrega definida.' },
      { name: 'Capacidade de Execução', detail: 'quando o desafio exige capacidade adicional.' },
      { name: 'Transformação Contínua', detail: 'quando a organização precisa continuar avançando.' },
    ],
    introType: 'modos',
    capabilities: ['Gestão & Governança', 'Liderança', 'Especialistas', 'Squads', 'Implementação', 'Evolução'],
    approach: ['Desafio', 'Compreensão', 'Capacidades necessárias', 'Composição', 'Gestão', 'Execução', 'Evolução'],
    closing: 'A COMPOSIÇÃO DO TIME MUDA CONFORME O DESAFIO. A DIREÇÃO NÃO.',
    cta: 'Conversar sobre execução',
  },
};

/* ════════════════════════════════════════════════════════════
   EXPERIÊNCIAS
   ════════════════════════════════════════════════════════════ */

export const EXPERIENCE_HERO = 'EXPERIÊNCIA NÃO SE EXPLICA. SE PROVA.';
export const EXPERIENCE_SUB = 'Experiência é transformar complexidade em decisões, decisões em execução e execução em resultados.';

export const EXPERIENCE_CONTEXTS = [
  {
    index: '01',
    title: 'Transformações em ambientes que exigem precisão',
    description: 'Mudanças importantes sem comprometer a operação.',
  },
  {
    index: '02',
    title: 'Decisões de tecnologia em escala',
    description: 'Tecnologia, arquitetura e inteligência acompanhando a complexidade.',
  },
  {
    index: '03',
    title: 'Estratégia na interseção com a execução',
    description: 'Decidir é apenas o começo.',
  },
];

export const CONFIDENTIAL_TITLE = 'EXPERIÊNCIAS QUE AINDA NÃO PODEM SER CONTADAS.';
export const CONFIDENTIAL_TEXT =
  'Muitos dos desafios em que atuamos envolvem informações estratégicas e ambientes que exigem confidencialidade. Algumas histórias podem ser compartilhadas. Outras, não. O trabalho continua sendo real.';

export const EXPERIENCE_CLOSING_HEADLINE = 'CADA DESAFIO MUDA. A FORMA DE ENCARÁ-LO NÃO.';
export const EXPERIENCE_CLOSING_TEXT = 'Compreender. Direcionar. Executar. Evoluir.';

export const EXPERIENCE_STRUCTURE = [
  { key: 'context', label: 'Contexto' },
  { key: 'challenge', label: 'Desafio' },
  { key: 'decision', label: 'Decisão' },
  { key: 'execution', label: 'Execução' },
  { key: 'result', label: 'Resultado' },
  { key: 'learned', label: 'Aprendizado' },
];

/* ════════════════════════════════════════════════════════════
   INSIGHTS
   ════════════════════════════════════════════════════════════ */

export const INSIGHT_HERO = 'ANTES DE DECIDIR, COMPREENDER.';
export const INSIGHT_SUB = 'Perspectivas sobre estratégia, tecnologia, transformação e execução.';
export const INSIGHT_FEATURED_EYEBROW = 'PERSPECTIVA';
export const INSIGHT_TRANSITION = 'BOAS PERGUNTAS MUDAM A QUALIDADE DAS DECISÕES.';

export const INSIGHT_CATEGORIES = [
  { id: 'estrategia', label: 'Estratégia', description: 'Decisões, modelos de negócio, prioridades e direção.' },
  { id: 'tecnologia', label: 'Tecnologia', description: 'Arquitetura, inteligência, produtos digitais e possibilidades.' },
  { id: 'transformacao', label: 'Transformação', description: 'Mudança organizacional, processos, jornadas e evolução.' },
  { id: 'execucao', label: 'Execução', description: 'Gestão, capacidade, liderança e transformação da estratégia em movimento.' },
];

export const INSIGHT_EDITORIAL_TITLES = [
  'O maior risco não é tomar a decisão errada.',
  'Tecnologia sem direção acelera o caminho errado.',
  'Transformação começa antes da solução.',
  'Estratégia só existe quando a execução sustenta a decisão.',
  'Estratégia é escolher o que não fazer.',
  'Não vendemos pessoas. Construímos capacidade de execução.',
  'IA é possibilidade. Valor é o objetivo.',
  'Mudar processos não é transformar um negócio.',
];

/* ════════════════════════════════════════════════════════════
   SOBRE
   ════════════════════════════════════════════════════════════ */

export const SOBRE_HERO = 'NÃO É SOBRE FAZER MAIS. É SOBRE FAZER O QUE IMPORTA.';
export const SOBRE_HERO_TEXT =
  'A Venturare nasceu para aproximar estratégia, tecnologia e execução — colocando compreensão e direção antes da ação.';

export const SOBRE_PORQUE_EXISTIMOS_TITLE = 'O mercado não precisa de mais soluções. Precisa de decisões melhores.';
export const SOBRE_PORQUE_EXISTIMOS_TEXT =
  'Organizações acumulam ferramentas, projetos e esforços — e ainda assim seguem distantes do resultado. O problema raramente é falta de opções. É falta de clareza sobre o que está acontecendo e sobre o que realmente importa.';
export const SOBRE_PORQUE_EXISTIMOS_CLOSE =
  'É nesse espaço que a Venturare atua. Entre o desafio e a execução. Entre a visão e a decisão. Entre a estratégia e o resultado.';

export const SOBRE_CRENCA = ['O MAIOR RISCO NÃO É TOMAR A DECISÃO ERRADA.', 'É TOMAR A DECISÃO CERTA SOBRE UMA REALIDADE MAL COMPREENDIDA.'];
export const SOBRE_CRENCA_NOTE = 'Compreender, antes de transformar.';

export const SOBRE_OQUE_APOIO =
  'A Venturare é uma consultoria orientada à transformação. Conectamos estratégia, tecnologia e capacidade de execução para ajudar organizações a tomar decisões mais claras, construir o que importa e transformar direção em resultados.';

export const SOBRE_OQUE_LINES = [
  'Não somos apenas consultoria.',
  'Não somos apenas tecnologia.',
  'Não somos apenas execução.',
];

export const SOBRE_OQUE_CLOSE = 'Conectamos os três.';

export const SOBRE_ATUAR = [
  { num: '01', label: 'CLAREZA ANTES DA VELOCIDADE.', text: 'Entender primeiro evita acelerar na direção errada.' },
  { num: '02', label: 'NEGÓCIO ANTES DA TECNOLOGIA.', text: 'A tecnologia é meio. O resultado é o objetivo.' },
  { num: '03', label: 'RESPONSABILIDADE SOBRE O RESULTADO.', text: 'Não entregamos apenas recomendações. Assumimos responsabilidade pelo que precisa acontecer.' },
  { num: '04', label: 'RELAÇÕES DE LONGO PRAZO.', text: 'Preferimos construir confiança e evolução contínua a entregar respostas pontuais.' },
];

export const SOBRE_LIDERANCA_EYEBROW = 'POR TRÁS DA VENTURARE, EXISTE EXPERIÊNCIA.';
export const FOUNDER = 'Marcos Penna';
export const FOUNDER_ROLE = 'Founder & CEO';
export const FOUNDER_QUOTE =
  'Acredito que tecnologia só cria valor quando existe clareza sobre o problema que estamos tentando resolver.';
export const FOUNDER_TEXT =
  'Experiência construída na interseção entre negócios, estratégia, tecnologia e execução — em contextos que exigem visão ampla, decisão precisa e capacidade de fazer acontecer.';
export const FOUNDER_CTA = 'Conheça minha trajetória no LinkedIn';
export const FOUNDER_LINKEDIN = 'https://www.linkedin.com/in/marcospenna';

export const SOBRE_DIFERENCIAL = ['ESTRATÉGIA', 'TECNOLOGIA', 'DADOS', 'INTELIGÊNCIA', 'GESTÃO', 'EXECUÇÃO'];
export const SOBRE_DIFERENCIAL_CLOSE = 'A composição muda conforme o desafio. A direção, não.';

export const SOBRE_CTA_HERO = 'TODA TRANSFORMAÇÃO COMEÇA COM UMA DECISÃO.';
export const SOBRE_CTA_SUB = 'Vamos começar pela compreensão.';

/* ════════════════════════════════════════════════════════════
   CONVERSAR
   ════════════════════════════════════════════════════════════ */

export const CONTACT_HERO = 'VAMOS ENTENDER O DESAFIO.';
export const CONTACT_SUB = 'Antes de falar sobre solução, queremos entender o que precisa mudar.';

export const CONTACT_FIELDS = [
  { name: 'name', label: 'Nome', type: 'text', required: true, placeholder: 'Seu nome' },
  { name: 'company', label: 'Empresa', type: 'text', required: false, placeholder: 'Sua empresa' },
  { name: 'role', label: 'Cargo', type: 'text', required: false, placeholder: 'Seu cargo' },
  { name: 'email', label: 'E-mail', type: 'email', required: true, placeholder: 'seu@email.com' },
  { name: 'phone', label: 'Telefone', type: 'tel', required: false, placeholder: 'Seu telefone' },
] as const;

export const CONTACT_LOOKING_FOR = [
  { value: 'estrategia', label: 'Estratégia & Transformação' },
  { value: 'tecnologia', label: 'Tecnologia & Inteligência' },
  { value: 'execucao', label: 'Execução & Evolução' },
  { value: 'nao-sei', label: 'Ainda não sei' },
] as const;

export const CONTACT_SUBMIT = 'INICIAR CONVERSA →';

export const CONTACT_SIDE_TITLE = 'NÃO PRECISA TER A RESPOSTA.';
export const CONTACT_SIDE_TEXT = 'Pode começar pelo problema. A primeira conversa existe para compreender.';
export const CONTACT_PRIVACY = 'Seus dados são usados exclusivamente para contato sobre a sua solicitação.';
export const CONTACT_SUCCESS_TITLE = 'RECEBEMOS.';
export const CONTACT_SUCCESS_TEXT = 'Agora começa a conversa.';