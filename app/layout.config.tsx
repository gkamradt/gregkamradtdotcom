import { type HomeLayoutProps } from 'fumadocs-ui/layouts/home';

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Greg Kamradt',
  },
  links: [
    {
      text: 'Projects',
      url: '/projects',
      active: 'nested-url',
    },
    {
      text: 'Media',
      url: '/media',
      active: 'nested-url',
    },
    {
      text: 'Writing',
      url: '/writing',
      active: 'nested-url',
    },
    {
      text: 'Contact',
      url: '/contact',
      active: 'nested-url',
    },
  ],
};
