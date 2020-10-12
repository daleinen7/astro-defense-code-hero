import React from 'react';
import styles from './Station.module.css';
import CodeInput from '../../components/CodeInput/CodeInput';

const Station = (props) => {

  console.log((props.focused === 0))

  return(
    <div className={styles.Station}>
      <CodeInput id={0} focused={props.focused} />
      <CodeInput id={1} focused={props.focused} />
      <CodeInput id={2} focused={props.focused} />
    </div>
  )
}

export default Station;