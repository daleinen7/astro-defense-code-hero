import React from 'react';
import styles from './Question.module.css';

const Question = (props) => {
  const text = props.question;
  const newText = text.split('\n');
  return(
    <div className={styles.Question}>
      {newText.map(n => <p> {n} </p>)}
    </div>
  )
}

export default Question;