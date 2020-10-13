import React from 'react';
import styles from './Lane.module.css';
import Asteroid from '../../components/Asteroid/Asteroid';

const Lane = (props) => {

  return(
    <div className={styles.Lane}>
      {props.asteroids.map((asteroid, idx) => 

        <Asteroid 
          question={asteroid.question}
          handleCollision={props.handleCollision}
          // answer={asteroid.answer}
        />
      )}
    </div>
  )
}

export default Lane;