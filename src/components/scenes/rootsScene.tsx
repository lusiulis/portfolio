import styles from '@/styles/components/scenes/rootsscene.module.scss';
import FunTitle from '../common/funTitle';

const RootsScene = () => {
  return (
    <div className={styles.container}>
      <FunTitle
        args='.()'
        subtitle='Self-taugth/Academy Software Developer.'
        title='Roots'
        description='For as long as I can remember my life has revolved around technology. Growing up, my free time was dedicated to classic and online video games where I connected with people from all over the world. I think thanks to these roots I understood how important the internet is and found my passion for web development, where I can create tools to connect people by showing useful and entertaining content.'
      />
    </div>
  );
};

export default RootsScene;
