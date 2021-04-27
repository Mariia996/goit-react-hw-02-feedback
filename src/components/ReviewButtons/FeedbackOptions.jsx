import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const { good, neutral, bad } = options;
        return (<div className={styles.btnContainer}>
                <button onClick={()=> onLeaveFeedback(good)} className={styles.btn} type='button'>Good</button>
                <button onClick={()=> onLeaveFeedback(neutral)} className={styles.btn} type='button'>Neutral</button>
                <button onClick={()=> onLeaveFeedback(bad)} className={styles.btn} type='button'>Bad</button>
            </div>)

}

export default FeedbackOptions;