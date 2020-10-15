import React from 'react';
import styles from './Station.module.css';
import CodeInput from '../../components/CodeInput/CodeInput';

const Station = (props) => {
  return(
    <div className={styles.Station}>
      <CodeInput id={0} fireLaser={props.fireLaser} focused={props.focused} />
      <CodeInput id={1} fireLaser={props.fireLaser} focused={props.focused} />
      <CodeInput id={2} fireLaser={props.fireLaser} focused={props.focused} />
    </div>
  )
}

export default Station;