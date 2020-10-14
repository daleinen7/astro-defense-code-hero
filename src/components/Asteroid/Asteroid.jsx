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
      key={props.astroCount}
    >
      <div 
        className={styles.Asteroid}
        style={{marginTop: props.margin}}
      >
        <Question 
          question={props.question}
          astroCount={props.astroCount}
          key={props.astroCount}
          // answer={asteroid.answer}
        />
      </div>
    </TweenOne>
  )
}

export default Asteroid;
