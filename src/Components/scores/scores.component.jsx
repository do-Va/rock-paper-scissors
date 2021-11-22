import { useState, useEffect } from 'react';

import { getAllUsers } from '../../firebase/firabase.utils';

import Ranks from '../ranks/ranks.component';

import './scores.styles.scss';

const Scores = ({ currentUser, isWin, isLoading }) => {
  const [isShow, setIsShow] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    setUsers(getAllUsers());
  }, [isWin, isLoading]);

  return (
    <div className="scores">
      <p className="title">
        Score : <span className="score">{currentUser.score}</span>
      </p>
      <button className="btn" onClick={handleClick}>
        {isShow ? 'Close' : 'High Scores'}
      </button>
      {isShow && <Ranks isShow={isShow} users={users} />}
    </div>
  );
};

export default Scores;
