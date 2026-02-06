import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ROS 2 Foundations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn the core building blocks of robotics software: <b>Nodes</b>,{' '}
        <b>Topics</b>, <b>Services</b>, and how to control robots using Python
        with <code>rclpy</code>.
      </>
    ),
  },
  {
    title: 'Digital Twin Simulation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Build realistic robot simulations using <b>Gazebo</b> for physics and{' '}
        <b>Unity</b> for high-fidelity visuals. Test sensors like LiDAR, Depthimport {themes as prismThemes} from 'prism-react-renderer';
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

  url: 'https://your-domain.com',
  baseUrl: '/',

  organizationName: 'your-github-username',
  projectName: 'humanoid-robotics-academy',

  // Keep strict mode for now
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
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },

        blog: false,

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

    // 🔥 NAVBAR — NO LINKS
    navbar: {
      title: 'Humanoid Robotics Academy',
      logo: {
        alt: 'Humanoid Robotics Academy Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },

    // 🔥 FOOTER — NO LINKS
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Humanoid Robotics Academy.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

        Cameras, and IMUs safely.
      </>
    ),
  },
  {
    title: 'AI + NVIDIA Isaac',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Train advanced robot perception and navigation using <b>Isaac Sim</b>,{' '}
        <b>Isaac ROS</b>, and <b>Nav2</b>. Build the real “brain” layer for
        humanoid autonomy.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
