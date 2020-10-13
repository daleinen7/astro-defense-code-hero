import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import Station from '../../components/Station/Station';
import Space from '../../components/Space/Space';
import Asteroid from '../../components/Asteroid/Asteroid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      focused: 0,
      asteroids: [],
      user: userService.getUser()
    };
  }

  /*
  asteroid {
    percentAcross: 0,
    category: 'JS',
    question: 'call the variable red: arr = ["zero","one",["two", "red"], "three"]',
    answer: 'arr[2][1]',
    type: 'call var'
  }
  */

  createAsteroid() {
    const asteroid = [Math.floor(Math.random() * 3), <Asteroid
      question='Question goes here'
      answer='Answer is this'
    />]
    let asteroids = this.state.asteroids.slice()
    asteroids.push(asteroid);
    this.setState({asteroids: asteroids})
  }
  /*--- Callback Methods ---*/
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
              <Space asteroids={this.state.asteroids} focused={this.state.focused} />
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
