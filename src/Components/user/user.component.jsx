import GameButtons from '../game-buttons/game-buttons.component';
import Choice from '../choice/choice.component';
import GameScore from '../game-score/game-score.component';

import './user.styles.scss';

const User = ({ getUserChoice, userScore, userChoice, currentUser }) => {
  return (
    <div className="user">
      <Choice name="user" choice={userChoice} />
      <GameButtons getUserChoice={getUserChoice} />
      <GameScore
        // name={currentUser.displayName.toUpperCase()}
        name="Dogu"
        score={userScore}
      />
    </div>
  );
};

export default User;
