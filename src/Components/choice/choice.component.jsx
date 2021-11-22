import './choice.styles.scss';

import Rock from '../../assets/choice-images/rock.png';
import Paper from '../../assets/choice-images/paper.png';
import Scissors from '../../assets/choice-images/scissors.png';

const Choice = ({ name, choice }) => {
  const choices = { Rock, Paper, Scissors };

  return (
    <div className={`choice ${name === 'user' ? 'user' : ''}`}>
      <img src={choices[choice]} alt="" />
    </div>
  );
};

export default Choice;
