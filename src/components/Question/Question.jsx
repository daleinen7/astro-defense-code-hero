import React from 'react';
import styles from './Question.module.css';

const Question = (props) => {
  const text = props.question;
  return(
    <div className={styles.Question}>
      {text}
    </div>
  )
}

export default Question;