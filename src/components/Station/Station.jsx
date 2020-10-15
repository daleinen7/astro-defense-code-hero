import React from 'react';
import styles from './Station.module.css';
import CodeInput from '../../components/CodeInput/CodeInput';

const Station = (props) => {
  return(
    <>
      <div className={styles.Station}>
        <CodeInput id={0} fireLaser={props.fireLaser} focused={props.focused} />
        <CodeInput id={1} fireLaser={props.fireLaser} focused={props.focused} />
        <CodeInput id={2} fireLaser={props.fireLaser} focused={props.focused} />
      </div>
      <div className={styles.stationFront}>
        <div className={styles.laserPort}>
          <div 
            className={styles.laserBeam}
            style={ props.firing && props.focused === 0 ? {display: "block"} : {display:"none"}}
          ></div>
        </div>
        <div className={styles.laserPort}>
          <div 
            className={styles.laserBeam}
            style={ props.firing && props.focused === 1 ? {display: "block"} : {display:"none"}}
          ></div>
        </div>
        <div className={styles.laserPort}>
          <div 
            className={styles.laserBeam}
            style={ props.firing && props.focused === 2 ? {display: "block"} : {display:"none"}}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Station;