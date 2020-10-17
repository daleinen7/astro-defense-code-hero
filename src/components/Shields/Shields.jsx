import React from 'react';
import styles from './Shields.module.css';

const Shields = (props) => {
  return(
    <>
      <div 
        className={styles.Shields}
          style={{
            boxShadow: `inset -200px 0 40px -200px rgba(94, 179, 244, ${props.shields})`,
            zIndex:4
          }}
      ></div>
     
    </>
  )
}

export default Shields;