import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
let score = props.user ? <div className='NavBar-score'><span className="NavBar-displaySpan">SCORE: </span>{props.score}</div> : ""
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <>
      <div className="NavBar-header">
        <h1 className='NavBar-title'>Hero Astro Code Defense</h1>
        <div className='NavBar-shieldDisplay'>
          <span className='NavBar-displaySpan'>SHIELDS</span>: {(props.shields === 0.9) ? "100%" : Math.floor(props.shields * 100) + "%"}
        </div>
        {score}
        <div className='NavBar'>
          {nav}
        </div>
      </div>
    </>
  );
};

export default NavBar;