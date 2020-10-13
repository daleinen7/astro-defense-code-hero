import React from 'react';
import styles from './Space.module.css';
import Lane from '../../components/Lane/Lane';
import Shields from '../../components/Shields/Shields';

const Space = (props) => {
  const lane1 = props.asteroids.filter(n => n.lane === 0);
  const lane2 = props.asteroids.filter(n => n.lane === 1);
  const lane3 = props.asteroids.filter(n => n.lane === 2);
  return(
    <div className={styles.Space}>
      <Shields />
      <Lane handleCollision={props.handleCollision} asteroids={lane1} focused={props.focused} />
      <Lane handleCollision={props.handleCollision} asteroids={lane2} focused={props.focused} />
      <Lane handleCollision={props.handleCollision} asteroids={lane3} focused={props.focused} />
    </div>
  )
}

export default Space;