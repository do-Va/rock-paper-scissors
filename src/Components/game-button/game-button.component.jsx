import Rock from '../../assets/Rock.svg';
import Paper from '../../assets/Paper.svg';
import Scissors from '../../assets/Scissors.svg';

import './game-button.styles.scss';

const GameButton = ({ name, bColor, sColor, getUserChoice }) => {
  const choiceImgs = { Rock, Paper, Scissors };

  const handleClick = () => {
    getUserChoice(name);
  };

  return (
    <button
      className="game-button"
      style={{ background: bColor, color: sColor }}
      onClick={handleClick}
    >
      <img src={choiceImgs[name]} alt="" />
    </button>
  );
};

export default GameButton;
