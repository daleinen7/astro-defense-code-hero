import React from 'react';
import styles from './Lane.module.css';
import Asteroid from '../../components/Asteroid/Asteroid';

const Lane = (props) => {
  return(
    <div className={styles.Lane}>
      {props.asteroids}
    </div>
  )
}

export default Lane;