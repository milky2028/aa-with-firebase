import Classes from './classes';

const menu = [
  { name: 'Our Center', link: '/our-center' },
  { name: 'Prices', link: '/prices' },
  { name: 'Enroll', link: '/enroll' },
  {
    name: 'Classes',
    link: '/classes/all-classes',
    subroutes: Classes.map(({ displayName, routeName }) => ({
      displayName,
      link: `/classes/${routeName}`
    }))
  },
  { name: 'News', link: '/news/overview' },
  { name: 'Careers', link: 'careers' },
  { name: 'Contact', link: 'contact' }
];

export default menu;
