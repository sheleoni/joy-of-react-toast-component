import React from 'react';

import Button from '../Button';
import Toast from '../Toast'
import ToastShelf from "../ToastShelf";

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const DEFAULT_VARIANT = 'notice';

function ToastPlayground() {

    const [variant, setVariant] = React.useState(DEFAULT_VARIANT)
    const [newMessage, setNewMessage] = React.useState('')
    const [isToastVisible, setIsToastVisible] = React.useState(false)
    const [messages, setMessages] = React.useState([]);

    function createNewToast(messageContent, messageType) {
        const newMessage = {
            variant: messageType,
            id: crypto.randomUUID(),
            message: messageContent,
        }
        setMessages([...messages, newMessage])
    }

    function resetInput() {
        setNewMessage('')
        setVariant(DEFAULT_VARIANT)
    }

    function handleSubmit() {
        createNewToast(newMessage, variant);
        resetInput();
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            {isToastVisible && <Toast variant={variant} setIsToastVisible={setIsToastVisible}/>}
            <ToastShelf messages={messages} setMessages={setMessages}/>

            <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{alignSelf: 'baseline'}}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea required id="message" className={styles.messageInput} value={newMessage}
                                  onChange={event => setNewMessage(event.target.value)}/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((item) => {
                            return (
                                <label htmlFor={`variant-${item}`} key={`variant-${item}`}>
                                    <input
                                        id={`variant-${item}`}
                                        type="radio"
                                        name="variant"
                                        value={item}
                                        checked={item === variant}
                                        onChange={event => setVariant(event.target.value)}
                                    />
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}/>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button onClick={
                            handleSubmit
                        }>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
