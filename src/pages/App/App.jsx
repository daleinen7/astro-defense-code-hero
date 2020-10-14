import React, { Component } from 'react';
import { unmountComponentAtNode } from "react-dom"; 
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

  async createAsteroid() {
    const question = await questionAPI.getRandom();
    console.log(question);
    const margin = Math.floor(Math.random() * 40);
    const asteroid = {
      lane: Math.floor(Math.random() * 3),
      question: question.question,
      answer: question.answer,
      margin: margin
    }
    let asteroids = this.state.asteroids.slice();
    asteroids.push(asteroid);
    this.setState({asteroids: asteroids, astroCount: (this.state.astroCount += 1)});
  }

  /*--- Callback Methods ---*/
  handleCollision = (e) => {
    // console.log(e.target);
    // unmountComponentAtNode(e.target);
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

    this.interval = setInterval(()=> this.createAsteroid(), 10000);

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
      } else if(e.keyCode === 16) {
        this.createAsteroid();
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
              <Station focused={this.state.focused} /> 
              <Space 
                asteroids={this.state.asteroids} 
                focused={this.state.focused} 
                handleCollision={this.handleCollision}
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
