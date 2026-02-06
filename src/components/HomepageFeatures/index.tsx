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
        <b>Unity</b> for high-fidelity visuals. Test sensors like LiDAR, Depth
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
