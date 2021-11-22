import Item from './item.component';

import './animation-bg.styles.scss';

const AnimationBg = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="circle-container">
      <ul className="circles">
        {arr.map(item => {
          return <Item key={item} />;
        })}
      </ul>
    </div>
  );
};

export default AnimationBg;
