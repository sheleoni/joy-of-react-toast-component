import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';


function ToastShelf({messages, setMessages}) {

    return (
        <ol
            className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification"
        >

            {messages.map((item) => {
                return (
                    <li key={item.id} className={styles.toastWrapper}>
                        <Toast messageID={item.id} messages={messages} variant={item.variant} setMessages={setMessages}>
                            {item.message}
                        </Toast>
                    </li>
                )
            })}

        </ol>
    );
}

export default ToastShelf;
