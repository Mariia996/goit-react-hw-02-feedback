import React from 'react';
import styles from './Section.module.css';

const Section = ({title}) => {
    return (
        <h2 className={styles.title}>{title}</h2>
    )
}

export default Section;