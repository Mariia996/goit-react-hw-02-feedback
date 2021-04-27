import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<ul className={styles.statList}>
                <li className={styles.statItem}>Good: <span>{good}</span></li>
                <li className={styles.statItem}>Neutral: <span>{neutral}</span></li>
                <li className={styles.statItem}>Bad: <span>{bad}</span></li>
                <li className={styles.statItem}>Total: <span>{total}</span></li>
                <li className={styles.statItem}>Positive feedback: <span>{positivePercentage}%</span></li>
            </ul>
    )
}

export default Statistics;