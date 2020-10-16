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
     
    </>
  )
}

export default Shields;