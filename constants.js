export const headerNavTitles = {
  landingPage: [
    {
      title: 'Início',
      href: '/',
      query: { },
    },
    {
      title: 'Produtos',
      href: '/sobre-nos',
      query: {
        scroll: '',
      },
      scroll: '#produtos',
    },
    {
      title: 'Sobre Nós',
      href: '/sobre-nos',
      query: { },
    },
    {
      title: 'Contato',
      href: '/contato',
      query: { },
    },
  ],
  bend: [
    {
      title: 'Website',
      href: '/',
      query: { },
    },
    {
      title: 'My Profile',
      href: '/bend-admin/profile',
      query: { },
    },
    {
      title: 'Users',
      href: '/bend-admin/users',
      query: { },
    },
  ],
  afterLogin: [
    {
      title: 'Carteira',
      href: '/carteira',
      query: { },
    },
    {
      title: 'Imposto de Renda',
      href: '/imposto-de-renda',
      query: { },
    },
  ],
};

export const timeOptionsNavBar = [
  {
    title: 'No mês',
    href: '/carteira',
    query: {
      periodo: 'no-mes',
    },
  },
  {
    title: '6 meses',
    href: '/carteira',
    query: {
      periodo: '6-meses',
    },
  },
  {
    title: '12 meses',
    href: '/carteira',
    query: {
      periodo: '12-meses',
    },
  },
  {
    title: '2021',
    href: '/carteira',
    query: {
      periodo: 'no-ano',
    },
  },
  {
    title: 'Máximo',
    href: '/carteira',
    query: {
      periodo: 'maximo',
    },
  },
];

export const subNavOptions = [
  {
    title: 'Rentabilidade',
    href: '/carteira',
    query: {
      opcao: 'rentabilidade',
    },
  },
  {
    title: 'Posições',
    href: '/carteira',
    query: {
      opcao: 'posicoes',
    },
  },
  {
    title: 'Posições1',
    href: '/carteira',
    query: {
      opcao: 'posicoes1',
    },
  },
  {
    title: 'Posições2',
    href: '/carteira',
    query: {
      opcao: 'posicoes2',
    },
  },
  {
    title: 'Posições3',
    href: '/carteira',
    query: {
      opcao: 'posicoes3',
    },
  },

];
export const differentials = [
  {
    title: 'Automação Total',
    description: 'Mufasa possibilita a automação de todas as etapas ao lidar com Impostos: Desde a obtenção da Movimentação até a efetuação do Pagamento à Receita.',
    img_src: '/images/icons/lightbulb/LightBulbg.webp',
  },
  {
    title: 'Suporte',
    description: 'Suporte exclusivo para solucionar dúvidas ou demandas 24h por dia.',
    img_src: '/images/icons/support/Supportg.webp',
  },
  {
    title: 'Grátis',
    description: 'As principais funções da plataforma estão disponíveis de forma inteiramente gratuita.',
    img_src: '/images/icons/money/Moneyg.webp',
  },
  {
    title: 'Interface Amigável',
    description: 'Plataforma simples e intuitiva para que seus impostos de renda de investimentos sejam calculados de forma agradável.',
    img_src: '/images/icons/cellphone/Cellphoneg.webp',
  },
  {
    title: 'Multi corretoras',
    description: 'Compatível com todas as corretoras através da integração com o Canal Eletrônico do Investidor.',
    img_src: '/images/icons/diverse/Diverseg.webp',
  },
  {
    title: 'Veloz',
    description: 'Com dados atualizados em tempo real, e sincronização da carteira em tempo recorde, pode-se dizer que Mufasa é ágil como todo leão que se preze.',
    img_src: '/images/icons/bolt/Boltg.webp',
  },
];

export const freeServices = [
  {
    srcIcon: '/images/icons/SlicesBLACK.webp',
    title: 'Sincronização CEI',
    alt: 'Sincronização CEI',
    desc1: 'Tenha sua',
    strong: 'Carteira de Investimentos',
    desc2: 'sincronizada em tempo real. Monitore suas movimentações, acompanhe as valorizações, e acesse o histórico de sua evolução.',
  },
  {
    srcIcon: '/images/icons/CalcTrans.webp',
    title: 'Calculadora de IR',
    alt: 'Calculadora de IR',
    desc1: 'Seu',
    strong: 'Imposto de Renda em ações',
    desc2: 'calculado de forma 100% automática e rápida, levando em conta as movimentações e as compensações acumuladas.',
  },
  {
    srcIcon: '/images/icons/darftrans.webp',
    title: 'Emissão do DARF',
    alt: 'Emissão do DARF',
    desc1: 'Quando há imposto a ser pago, Mufasa gera seu DARF, já considerando os diversos mercados, e as compensações de prejuízos e IRRF.',
    strong: 'É só gerar e pagar!',
    desc2: '',
  },
];

export const paidServices = [
  {
    srcIcon: '/images/icons/AutomaticOKblack.webp',
    title: 'Pagamento Automático',
    alt: 'Pagamento Automático',
    desc1: 'Ative o Pagamento Automático e',
    strong: 'nunca mais se preocupe',
    desc2: 'com seus Impostos. Foque em suas operações e Mufasa cuidará de todo o resto.',
  },
];
