import React from 'react'
import styles from './NotificationMessage.module.css';

const Notification = ({message}) => {
    return (
        <p className={styles.notification}>{message}</p>
     );
}

export default Notification;