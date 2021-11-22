import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { getAllUsers } from '../../firebase/firabase.utils';

import Win from '../win/win.component';
import Lose from '../lose/lose.component';

import './game-over.styles.scss';

import You from '../../assets/you.svg';

const GameOver = ({ gameOver, reset, isWin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, [isWin]);

  const playAgain = () => {
    reset();
  };

  const goMenu = () => {
    reset();
    navigate('/menu');
  };

  return (
    <div className="game-over">
      <div className="game-over-container">
        <h2>Game Over</h2>
        <img src={You} alt="" />
        {gameOver === 'win' ? <Win /> : <Lose />}
        <button className="btn" onClick={playAgain}>
          Play Again
        </button>
        <button className="btn" onClick={goMenu}>
          Menu
        </button>
      </div>
    </div>
  );
};

export default GameOver;
