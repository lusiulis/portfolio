import GapBlock from '@/components/common/gapBlock';
import IntroScene from '@/components/scenes/introScene';
import RootsScene from '@/components/scenes/rootsScene';
import styles from '@/styles/pages/home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <GapBlock />
      <IntroScene />
      <GapBlock isFull />
      <RootsScene />
      <GapBlock isFull />
    </div>
  );
};

export default Home;
