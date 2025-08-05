'use client';

import FunTitle from '../common/funTitle';
import Dino from '../characters/dino';

const RootsScene = () => {
  return (
    <div className='scene-overall'>
      <div className='scene-container'>
        <FunTitle
          args='.(x)'
          subtitle='Self-taugth/Academy Software Developer.'
          title='Roots'
          description='For as long as I can remember my life has revolved around technology. Growing up, my free time was dedicated to classic and online video games where I connected with people from all over the world. I think thanks to these roots I understood how important the internet is and found my passion for web development, where I can create tools to connect people by showing useful and entertaining content.'
        />
        <Dino />
      </div>
    </div>
  );
};

export default RootsScene;
