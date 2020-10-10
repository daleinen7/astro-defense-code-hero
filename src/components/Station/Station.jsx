import React from 'react';
import styles from './Station.module.css';
import CodeInput from '../../components/CodeInput/CodeInput';

const Station = (props) => {
  return(
    <div className={styles.Station}>
      <CodeInput />
      <CodeInput />
      <CodeInput />
    </div>
  )
}

export default Station;