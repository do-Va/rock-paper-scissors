import Win from '../win/win.component';
import Lose from '../lose/lose.component';
import Draw from '../draw/draw.component';

import './result.styles.scss';

const Result = ({ result, isSelected }) => {
  return (
    <div className="result">
      {isSelected ? (
        result === 'win' ? (
          <Win />
        ) : result === 'lose' ? (
          <Lose />
        ) : (
          <Draw />
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default Result;
