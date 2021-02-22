const headerNavTitles = {
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

export default headerNavTitles;
