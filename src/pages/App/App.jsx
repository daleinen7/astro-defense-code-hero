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
import Shields from '../../components/Shields/Shields';
import themeMusic from '../../sounds/astro-defense-code-hero_theme.mp3';
import astroImpact from '../../sounds/astroidImpact1.mp3';
import shieldHit from '../../sounds/shield1.mp3';
import laserSound from '../../sounds/laser4.mp3';
import gameOverSound from '../../sounds/gameOver.mp3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameOver: false,
      astroCount: 0,
      focused: 0,
      firing: false,
      asteroids: [],
      shields: 0.9,
      user: userService.getUser()
    };
  }

  animateAstroid() {
    const newAsteroids = this.state.asteroids.slice();
    newAsteroids.forEach((asteroid, idx, asteroids) => {
      // The line below determines where the astroid will disappear (and cause damage to the station)
      if (asteroid.progress > 76) {
        // if there are no shields left set game over
        if (this.state.shields <= 0) {
          let newGameOverStatus = this.state.gameOver;
          newGameOverStatus = true;
          this.playSound(gameOverSound, 1);
          this.setState({gameOver: newGameOverStatus});
        } else {
          let newShields = this.state.shields;
          // adjust shields
          this.playSound(shieldHit, 1);
          this.setState({shields: parseFloat((newShields -= 0.3).toFixed(2))});
        }
        // either way remove astroid from state and play impact sound
        // this.playSound(astroImpact, 1);
        asteroids.splice(idx, 1);
      } else {
        if (this.state.gameOver === false) {
          asteroid.progress = asteroid.progress + 0.10
        }
      }
    });
    this.setState({asteroids: newAsteroids});
  }

  async createAsteroid() {
    const question = await questionAPI.getRandom();
    // The below line will randomize the vertical orientation of the astroids within the lane they appear
    const margin = Math.floor(Math.random() * 40);
    const asteroid = {
      progress: -20,
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

  playSound = (source, vol) => {
    console.log(source);
    this.audio = new Audio(source);
    this.audio.volume = vol;
    this.audio.play()
  }
  
  /*--- Callback Methods ---*/
  fireLaser = (answer) => {
    const newAsteroids = this.state.asteroids.slice();
    newAsteroids.forEach((asteroid, idx, astChk) => {
      if ( asteroid.answer === answer.answer ) {
        astChk.splice(idx, 1);
        this.setState({firing: true});
        // the line below determines how long the laser fires
        this.playSound(laserSound, 1);
        setTimeout(()=>{this.setState({firing: false})}, 200);
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

    // Start Theme Mus
    // this.playSound(themeMusic, 0.5);

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
    clearInterval(this.anim)
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
              <Station focused={this.state.focused} fireLaser={this.fireLaser} firing={this.state.firing}/> 
              <Shields shields={this.state.shields}/>
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
