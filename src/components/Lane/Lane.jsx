import React from 'react';
import styles from './Lane.module.css';
import Asteroid from '../../components/Asteroid/Asteroid';

const Lane = (props) => {
  const rndm = Math.floor(Math.random() * 40)
  return(
    <div className={styles.Lane}>
      {props.asteroids.map((asteroid, idx) => 

        <Asteroid 
          question={asteroid.question}
          handleCollision={props.handleCollision}
          astroCount={props.astroCount}
          margin={asteroid.margin}
          destroyAsteroid={props.destroyAsteroid}
          progress={asteroid.progress + "%"}
          astroKey={asteroid.key}
          key={asteroid.key}  
          // answer={asteroid.answer}
        />
      )}
    </div>
  )
}

export default Lane;