import GameScore from '../game-score/game-score.component';
import Choice from '../choice/choice.component';

import './computer.styles.scss';

const Computer = ({ computerChoice, computerScore }) => {
  return (
    <div className="computer">
      <GameScore name="Computer" score={computerScore} />
      <Choice choice={computerChoice} />
    </div>
  );
};

export default Computer;
