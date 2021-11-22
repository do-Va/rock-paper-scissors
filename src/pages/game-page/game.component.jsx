import React from 'react';

import User from '../../Components/user/user.component';
import Computer from '../../Components/computer/computer.component';
import Result from '../../Components/result/result.component';
import GameOver from '../../Components/game-over/game-over.component';

import './game.styles.scss';

class GamePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userScore: 0,
      computerScore: 0,
      userChoice: 'Rock',
      computerChoice: 'Rock',
      result: '',
      isSelected: false,
      isFinished: false,
      gameOver: '',
    };
  }

  getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
  };

  getUserChoice = choice => {
    const choices = ['Rock', 'Paper', 'Scissors'];

    this.setState(prevState => {
      return {
        ...prevState,
        userChoice: choice,
        computerChoice: choices[this.getComputerChoice()],
      };
    });

    setTimeout(() => {
      this.gameResult(this.state.userChoice, this.state.computerChoice);
      this.gameOver(this.state.userScore, this.state.computerScore);

      this.setState(prevState => {
        return {
          ...prevState,
          isSelected: true,
        };
      });
    }, 0);

    setTimeout(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          isSelected: false,
        };
      });
    }, 500);
  };

  gameResult = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
      case 'RockScissors':
      case 'PaperRock':
      case 'ScissorsPaper':
        this.win();
        break;

      case 'RockPaper':
      case 'PaperScissors':
      case 'ScissorsRock':
        this.lose();
        break;

      case 'RockRock':
      case 'PaperPaper':
      case 'ScissorsScissors':
        this.draw();
        break;

      default:
        break;
    }
  };

  win = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        userScore: prevState.userScore + 1,
        result: 'win',
      };
    });
  };

  lose = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        computerScore: prevState.computerScore + 1,
        result: 'lose',
      };
    });
  };

  draw = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        result: 'draw',
      };
    });
  };

  gameOver = (userScore, computerScore) => {
    if (userScore + computerScore === 10) {
      this.setState({ isFinished: true });
      if (userScore > computerScore) {
        this.setState(prevState => {
          return { ...prevState, gameOver: 'win', isFinished: true };
        });
        this.props.updateScore(this.state.gameOver);
      }

      if (computerScore > userScore) {
        this.setState(prevState => {
          return { ...prevState, gameOver: 'lose', isFinished: true };
        });
        this.props.updateScore(this.state.gameOver);
      }
    }
  };

  reset = () => {
    this.setState(prevState => {
      return {
        userScore: 0,
        computerScore: 0,
        userChoice: 'Rock',
        computerChoice: 'Rock',
        result: '',
        isSelected: false,
        isFinished: false,
        gameOver: '',
      };
    });
  };

  render() {
    return (
      <section className="game">
        {this.state.isFinished && (
          <GameOver
            gameOver={this.state.gameOver}
            reset={this.reset}
            isLoading={this.props.isLoading}
          />
        )}
        <Computer {...this.state} gameOver={this.state.gameOver} />
        <Result {...this.state} />
        <User
          {...this.state}
          getUserChoice={this.getUserChoice}
          currentUser={this.props.currentUser}
        />
      </section>
    );
  }
}

export default GamePage;
