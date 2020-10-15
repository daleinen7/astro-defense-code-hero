import React from 'react';
import styles from './Shields.module.css';

const Shields = (props) => {
  return(
    <>
      <div 
        className={styles.Shields}
        style={{
          boxShadow: `inset -200px 0 42px -200px rgba(94, 179, 244, ${props.shields})`
        }}
      ></div>
      <div className={styles.shieldDisplay}>
        {(props.shields === 0.9) ? "100%" : Math.floor(props.shields * 100) + "%"}
      </div>
    </>
  )
}

export default Shields;