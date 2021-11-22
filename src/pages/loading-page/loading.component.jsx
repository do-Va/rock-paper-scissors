import Rock from '../../assets/Rock.svg';
import Paper from '../../assets/Paper.svg';
import Scissors from '../../assets/Scissors.svg';

import './loading.styles.scss';

const Loading = () => {
  return (
    <div className="container">
      <span className="box">
        <img className="box-img" src={Paper} alt="" />
      </span>
      <span className="box">
        <img className="box-img" src={Scissors} alt="" />
      </span>
      <span className="box">
        <img className="box-img" src={Rock} alt="" />
      </span>
    </div>
  );
};

export default Loading;
