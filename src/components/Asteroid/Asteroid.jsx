import TweenOne from 'rc-tween-one';
import React from 'react';
import styles from './Asteroid.module.css';
import Question from '../../components/Question/Question';

const Asteroid = (props) => {

  return(
    <TweenOne 
      animation={{

        x:"-50%",
        // duration:600000,
        duration: 1000,
        ease: 'linear'
      }}
    >
      <div 
        className={styles.Asteroid}
      
      >
        <Question />
      </div>
    </TweenOne>
  )
}

export default Asteroid;