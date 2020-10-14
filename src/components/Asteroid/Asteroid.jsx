// import TweenOne from 'rc-tween-one';
import React from 'react';
import styles from './Asteroid.module.css';
import Question from '../../components/Question/Question';

const Asteroid = (props) => {
  return(
    // <TweenOne 
    //   animation={{
    //     x:"-101%",
    //     duration:10000,
    //     // duration: 1000,
    //     ease: 'linear',
    //     onComplete: (e)=> props.handleCollision(e)
    //   }}
    //   key={props.astroCount}
    // >
      <div 
        className={styles.Asteroid}
        style={{
          marginRight: props.progress,
          marginTop: props.margin
        }}
        onClick={(e)=> props.destroyAsteroid(e)}
      >
        <Question 
          question={props.question}
          key={props.astroKey}
          // answer={asteroid.answer}
        />
      </div>
    // </TweenOne>
  )
}

export default Asteroid;
