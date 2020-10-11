import React from 'react';
import styles from './Space.module.css';
import Lane from '../../components/Lane/Lane';

const Space = (props) => {
  return(
    <div className={styles.Space}>
      <Lane focused={props.focused} />
      <Lane focused={props.focused} />
      <Lane focused={props.focused} />
    </div>
  )
}

export default Space;