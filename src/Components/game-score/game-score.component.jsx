import './game-score.styles.scss';

const GameScore = ({ name, score }) => {
  return (
    <div className="game-score">
      <span className="name">{name}</span>
      <span>Score :</span>
      <span className="score">{score}</span>
    </div>
  );
};

export default GameScore;
