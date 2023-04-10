import React from 'react';

import Button from '../Button';
import Toast from '../Toast'

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [variant, setVariant] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isToastVisible, setIsToastVisible] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && <Toast variant={variant} message={message} setIsToastVisible={setIsToastVisible}/>}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={event => setMessage(event.target.value)}/>
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
                      onChange={event => setVariant(event.target.value)}
                  />
                  {item}
                </label>
                )
            })}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setIsToastVisible(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
