import React from 'react';
import styles from './GameOver.module.css';
import * as scoresAPI from '../../services/scores-api';

const GameOver = (props) => {

    async function getScores() {
        const scores = await scoresAPI.getScores();
    }

    return(
        <div className={styles.GameOver}>
        <div className={styles.notice}>GAME OVER</div>
        <button onClick={props.handleNewGame}>Play Again</button>
        <h3>Your High Score</h3>
        <p>{props.user.score}</p>
        </div>
    )
}

export default GameOver;