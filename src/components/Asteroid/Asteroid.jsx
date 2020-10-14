import TweenOne from 'rc-tween-one';
import React from 'react';
import styles from './Asteroid.module.css';
import Question from '../../components/Question/Question';

const Asteroid = (props) => {

  return(
    <TweenOne 
      animation={{
        x:"-120%",
        duration:100000,
        // duration: 1000,
        ease: 'linear',
        onComplete: (e)=> props.handleCollision(e)
      }}
    >
      <div 
        className={styles.Asteroid}
      
      >
        <Question 
          question={props.question}
          // answer={asteroid.answer}
        />
      </div>
    </TweenOne>
  )
}

export default Asteroid;