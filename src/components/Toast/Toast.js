import React from 'react';
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({variant, messages, setMessages, messageID, children}) {

    function handleAddItem(newMessage) {
        const {variant, id, message} = newMessage
        const newMessages = [...messages,
            {variant, id, message}
        ]
        setMessages(newMessages);
    }

    function handleDeleteItem(itemID) {
        const newMessages = messages.filter(
            (item) => item.id !== itemID
        )
        setMessages(newMessages);
    }

    const Icon = ICONS_BY_VARIANT[variant]

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                {Icon && <Icon/>}
            </div>
            <p className={styles.content}>
                <VisuallyHidden>
                    {variant} -
                </VisuallyHidden>
                {children}
            </p>
            <button className={styles.closeButton} aria-label="Dismiss message" aria-live="off">
                <X size={24} onClick={() => {
                    handleDeleteItem(messageID)
                }}/>
            </button>
        </div>
    );
}

export default Toast;
