import React from 'react';
import styles from './Space.module.css';
import Lane from '../../components/Lane/Lane';
import Shields from '../../components/Shields/Shields';

const Space = (props) => {
  const lane1 = props.asteroids.filter( a => a[0] === 0)
  const lane2 = props.asteroids.filter( a => a[0] === 1)
  const lane3 = props.asteroids.filter( a => a[0] === 2)
  return(
    <div className={styles.Space}>
      <Shields />
      <Lane asteroids={lane1[1]} focused={props.focused} />
      <Lane asteroids={lane2[1]} focused={props.focused} />
      <Lane asteroids={lane3[1]} focused={props.focused} />
    </div>
  )
}

export default Space;