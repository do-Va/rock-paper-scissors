import './rank.styles.scss';

const Rank = ({ name, score, idx }) => {
  return (
    <li className="rank">
      <p className="number">{idx + 1}</p>
      <p className="name">{name}</p>
      <p className="score">{score}</p>
    </li>
  );
};

export default Rank;
