import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Humanoid Robotics Academy',
  tagline: 'Learn ROS 2, Simulation, NVIDIA Isaac, and VLA Robotics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Your live domain
  url: 'https://your-domain.com',
  baseUrl: '/',

  // If NOT using GitHub Pages, you can remove these or keep them
  organizationName: 'your-github-username',
  projectName: 'humanoid-robotics-academy',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          editUrl: undefined, // removes edit button
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },

        blog: false, // Disable blog for a course website (cleaner)

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Humanoid Robotics Academy',
      logo: {
        alt: 'Humanoid Robotics Academy Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Course Modules',
        },
        {
          to: '/docs/module-1-ros2',
          label: 'Start Learning',
          position: 'left',
        },
        {
          to: '/docs/intro',
          label: 'Intro',
          position: 'left',
        },
        {
          href: 'https://github.com/your-github-username',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {label: 'Module 1: ROS 2', to: '/docs/module-1-ros2'},
            {label: 'Module 2: Digital Twin', to: '/docs/module-2-digital-twin'},
            {label: 'Module 3: NVIDIA Isaac', to: '/docs/module-3-nvidia-isaac'},
            {label: 'Module 4: VLA Robotics', to: '/docs/module-4-vla'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'ROS 2 Docs', href: 'https://docs.ros.org/'},
            {label: 'Nav2 Docs', href: 'https://navigation.ros.org/'},
            {label: 'NVIDIA Isaac', href: 'https://developer.nvidia.com/isaac-sim'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.com/'},
            {label: 'GitHub', href: 'https://github.com/your-github-username'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Humanoid Robotics Academy.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
