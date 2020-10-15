import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import * as questionAPI from '../../services/questions-api';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import Station from '../../components/Station/Station';
import Space from '../../components/Space/Space';

class App extends Component {
  constructor() {
    super();
    this.state = {
      astroCount: 0,
      focused: 0,
      asteroids: [],
      user: userService.getUser()
    };
  }

  animateAstroid() {
    const newAsteroids = this.state.asteroids.slice();
    newAsteroids.forEach((asteroid, idx, asteroids) => {
      // The line below determines where the astroid will disappear (and cause damage to the station)
      if (asteroid.progress > 76) {
        asteroids.splice(idx, 1);
      } else {
        asteroid.progress = asteroid.progress + 0.10
      }
    });
    this.setState({asteroids: newAsteroids});
  }

  async createAsteroid() {
    const question = await questionAPI.getRandom();
    // The below line will randomize the vertical orientation of the astroids within the lane they appear
    const margin = Math.floor(Math.random() * 40);
    const asteroid = {
      progress:-80,
      lane: Math.floor(Math.random() * 3),
      question: question.question,
      answer: question.answer,
      margin: margin,
      key: this.state.astroCount += 1
    }
    let asteroids = this.state.asteroids.slice();
    asteroids.push(asteroid);
    this.setState({asteroids: asteroids, astroCount: (this.state.astroCount += 1)});
  }
  
  /*--- Callback Methods ---*/
  fireLaser = (answer) => {
    const newAsteroids = this.state.asteroids.slice();
    newAsteroids.forEach((asteroid, idx, astChk) => {
      console.log("gabagaba", asteroid.answer, "goww", answer);
      if ( asteroid.answer === answer.answer ) {
        astChk.splice(idx, 1);
      }
    })
    this.setState({asteroids: newAsteroids})
  }
  
  handleFocus = (focusedLane) => {
    this.setState({focused: focusedLane})
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }

  /*--- Lifecycle Methods ---*/
  componentDidMount() {
    this.createAsteroid();

    // the line below determines how smooth the astroid movement is
    this.anim = setInterval(()=> this.animateAstroid(), 40);

    // the line below determines how often an asteroid appears
    this.interval = setInterval(()=> this.createAsteroid(), 18000);

    window.addEventListener('keydown', (e)=> {
      if(e.keyCode === 38) {
        // hardcoded lane count
        if (this.state.focused === 0) {
          this.handleFocus(2)
        } else {
          this.handleFocus(Math.abs((this.state.focused - 1) % 3))
        }
      } else if(e.keyCode === 40) {
        // again hardcoded lane count
        this.handleFocus(Math.abs((this.state.focused + 1) % 3))
      } 
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <div className="App">
              <Station focused={this.state.focused} fireLaser={this.fireLaser} /> 
              <Space 
                asteroids={this.state.asteroids} 
                focused={this.state.focused} 
                astroCount={this.state.astroCount}
                handleCollision={this.handleCollision}
                destroyAsteroid={this.destroyAsteroid}
              />
            </div>
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
