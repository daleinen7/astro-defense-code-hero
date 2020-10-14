import React from 'react';
import styles from './Space.module.css';
import Lane from '../../components/Lane/Lane';
import Shields from '../../components/Shields/Shields';

const Space = (props) => {
  const lane0 = props.asteroids.filter(n => n.lane === 0);
  const lane1 = props.asteroids.filter(n => n.lane === 1);
  const lane2 = props.asteroids.filter(n => n.lane === 2);
  return(
    <div className={styles.Space}>
      <Shields />
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
      
    </div>
  )
}

export default Space;