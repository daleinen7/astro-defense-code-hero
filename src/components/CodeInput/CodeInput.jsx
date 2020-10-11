import React from 'react';
import styles from './CodeInput.module.css';

const CodeInput = (props) => {
  console.log("ID " + typeof(props.id) + " : " + (props.id) + " focused " + typeof(props.focused) + " : " + props.focused);
  console.log(`${props.id} == ${props.focused} is a ${props.focused == props.id} statement`)
  return(
    <textarea 
      className={styles.CodeInput}
      style={{
        backgroundColor: props.focused === props.id ? "purple" : 'rgb(21, 16, 16)'  
      }}
    >
      
    </textarea>
  )
}

export default CodeInput;