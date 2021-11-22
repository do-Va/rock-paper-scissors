import Rank from '../rank/rank.component';

import './ranks.styles.scss';

const Ranks = ({ users, isShow }) => {
  return (
    <ul className={`ranks ${isShow ? 'show' : ''}`}>
      <li className="title">
        <p>POS</p>
        <p>NAME</p>
        <p>SCORE</p>
      </li>
      {users
        .sort((a, b) => b.score - a.score)
        .map((user, idx) => {
          return <Rank key={idx} {...user} idx={idx} />;
        })}
    </ul>
  );
};

export default Ranks;
