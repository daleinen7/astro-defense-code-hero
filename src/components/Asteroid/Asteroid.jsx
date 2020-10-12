import React from 'react';
import styles from './Asteroid.module.css';

const Asteroid = (props) => {
  return(
    <div 
      className={styles.Asteroid}
      style={{
        position: "relative",
        right: "0"
      }}
    
    >
      Asteroid
    </div>
  )
}

export default Asteroid;