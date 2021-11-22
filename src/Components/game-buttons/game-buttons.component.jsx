import GameButton from '../game-button/game-button.component';

import { choices } from '../../utils/constants';

import './game-buttons.styles.scss';

const GameButtons = ({ getUserChoice }) => {
  return (
    <div className="game-buttons">
      {choices.map(choice => {
        return (
          <GameButton
            key={choice.id}
            {...choice}
            getUserChoice={getUserChoice}
          />
        );
      })}
    </div>
  );
};

export default GameButtons;
