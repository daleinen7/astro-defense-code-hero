import React from 'react';
import styles from './Space.module.css';
import Lane from '../../components/Lane/Lane';
import Shields from '../../components/Shields/Shields';

const Space = (props) => {
  return(
    <div className={styles.Space}>
      <Shields />
      <Lane focused={props.focused} />
      <Lane focused={props.focused} />
      <Lane focused={props.focused} />
    </div>
  )
}

export default Space;