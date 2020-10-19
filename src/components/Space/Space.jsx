import React from 'react';
import styles from './Space.module.css';
import Lane from '../../components/Lane/Lane';
import GameOver from '../../components/GameOver/GameOver';

const Space = (props) => {
  const lane0 = props.asteroids.filter(n => n.lane === 0);
  const lane1 = props.asteroids.filter(n => n.lane === 1);
  const lane2 = props.asteroids.filter(n => n.lane === 2);
  return(
    <div className={styles.Space}>
      <Lane 
        astroCount={props.astroCount} 
        handleCollision={props.handleCollision} 
        asteroids={lane0} focused={props.focused}
        key={0}
        destroyAsteroid={props.destroyAsteroid}
      />
      
      <Lane 
        astroCount={props.astroCount} 
        handleCollision={props.handleCollision} 
        asteroids={lane1} focused={props.focused}
        key={1}
        destroyAsteroid={props.destroyAsteroid}
      />
      
      <Lane 
        astroCount={props.astroCount} 
        handleCollision={props.handleCollision} 
        asteroids={lane2} focused={props.focused}
        key={2}
        destroyAsteroid={props.destroyAsteroid}
      />
      { props.gameOver === true ? <GameOver handleNewGame={props.handleNewGame} score={props.score}/> : ""}
    </div>
  )
}

export default Space;