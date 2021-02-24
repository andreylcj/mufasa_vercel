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
      query: {
        carteira: '',
        periodo: '',
      },
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

export const questions = [
  {
    title: 'O que é a calculadora Mufasa?',
    response: `A calculadora do Mufasa é nossa alternativa para facilitar sua vida. Assim como tudo no Mufasa, ela foi desenhada para todos que desejam um serviço simples, sem burocracias, e sem tarifas abusivas.
    
    Seu propósito é calcular com exatidão os impostos provindos de operações na Bolsa de Valores, para que o investidor tenha mais tempo livre e menos dor de cabeça. Para cumprir esse papel, o Mufasa:
    
    — Possibilita automação total, desde apurar as movimentações feitas até efetuar o pagamento dos Impostos quando há lucro;
    
    — Possui uma plataforma com interface simples e intuitiva;
    
    — Oferece compatibilidade com todas as corretoras;
    
    — Disponibiliza suas principais funcionalidades de forma gratuita`,
    queryQuest: 'o-que',
  },
  {
    title: 'Como funciona?',
    response: `Após cadastrar-se na plataforma Mufasa, basta sincronizar sua conta do CEI, no menu do site.

    Uma vez feita a sincronização, seus dados se manterão atualizados automaticamente, a todo tempo.
    
    A partir daí, tornam-se disponíveis dados em tempo real como:
    
    — Evolução Patrimonial
    — Cálculo Atualizado do Imposto de Renda em Ações
    
    Além de serviços como:
    — Emissão da DARF
    — Pagamento Automático`,
    queryQuest: 'como-funciona',
  },
  {
    title: 'Como começar?',
    response: `É bem simples! Basta criar sua conta! Para isso, siga o passo-a-passo:

    No canto superior direito, clique em "Login".
    Na página de Login, selecione a opção "Ainda não sou Cliente".
    
    Pronto! Agora é só completar com seu e-mail e a senha desejada!`,
    queryQuest: 'como-comecar',
  },
  {
    title: 'Como crio minha conta?',
    response: `No canto superior direito, clique em "Login".
    Na página de Login, selecione a opção "Ainda não sou Cliente".
    
    Pronto! Agora é só completar com seu e-mail e a senha desejada!`,
    queryQuest: 'como-criar-conta',
  },
  {
    title: 'Não tem nenhuma tarifa?',
    response: 'A calculadora do Mufasa não tem tarifa, você não paga nada para calcular seus impostos nem para emitir suas DARFs. Você também não tem nenhum custo para sincronizar sua conta do CEI e acompanhar a evolução de sua carteira de investimentos em tempo real.',
    queryQuest: 'taxa',
  },
  {
    title: 'Qual a vantagem em ser Mufasa?',
    response: `Ao optar por usar as soluções desenvolvidas pelo Mufasa, você está optando por:

    — Automação no cálculo dos Impostos
    
    — Velocidade em todos os processos envolvidos
    
    — Custo Zero no levantamento, cálculo, e emissão da DARF
    
    — Suporte exclusivo
    
    — Facilidade no uso`,
    queryQuest: 'vantagem',
  },
];
