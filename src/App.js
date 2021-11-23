import React from 'react';
import { Route, Routes } from 'react-router-dom';

import FormPage from './pages/form-page/form-page.component';
import MenuPage from './pages/menu-page/menu.component';
import AnimationBg from './Components/animation-bg/animation-bg.component';
import ErrorPage from './pages/error-page/error-page.component';

import {
  auth,
  createUserProfileDocument,
  updatedScore,
} from './firebase/firabase.utils';

import PrivateRoute from './route/private-route';

import './app.css';
import GamePage from './pages/game-page/game.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
      isLoading: JSON.parse(localStorage.getItem('isLoading')) || false,
      isWin: JSON.parse(localStorage.getItem('isWin')) || false,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
            isLoading: true,
          });
        });
      } else {
        this.setState({
          currentUser: userAuth,
          isLoading: false,
        });
      }
    });
  }

  updateScore = gameOver => {
    if (gameOver === 'win') {
      this.setState(prevState => {
        return {
          ...prevState,
          currentUser: {
            ...prevState.currentUser,
            score: Number(prevState.currentUser.score) + 100,
          },
          isWin: true,
        };
      });

      updatedScore(this.state.currentUser);
    }

    if (gameOver === 'lose') {
      this.setState(prevState => {
        return {
          ...prevState,
          currentUser: {
            ...prevState.currentUser,
            score: Number(prevState.currentUser.score) - 100,
          },
          isWin: false,
        };
      });
      updatedScore(this.state.currentUser);
    }
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  changeIsLoading = param => {
    this.setState({ isLoading: param, isWin: false });
  };

  componentDidUpdate() {
    localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser));
    localStorage.setItem('isLoading', JSON.stringify(this.state.isLoading));
    localStorage.setItem('isWin', JSON.stringify(this.state.isWin));
  }

  render() {
    return (
      <main className="app">
        <AnimationBg />
        <Routes>
          <Route
            path="/"
            element={
              <FormPage
                {...this.state}
                changeIsLoading={this.changeIsLoading}
              />
            }
          />
          <Route
            path="menu"
            element={
              <PrivateRoute isLoading={this.state.isLoading}>
                <MenuPage
                  {...this.state}
                  changeIsLoading={this.changeIsLoading}
                />
              </PrivateRoute>
            }
          />

          <Route
            path="game"
            element={
              <PrivateRoute isLoading={this.state.isLoading}>
                <GamePage {...this.state} updateScore={this.updateScore} />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    );
  }
}

export default App;
