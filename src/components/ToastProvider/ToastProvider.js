import React from "react";

export const ToastContext = React.createContext({});

function ToastProvider({children}) {

    const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
    const DEFAULT_VARIANT = 'notice';

    const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
    const [newMessage, setNewMessage] = React.useState('')
    const [isToastVisible, setIsToastVisible] = React.useState(false)
    const [messages, setMessages] = React.useState([]);

    function sayHi(username) {
        console.log(`hello there, ${username}`)
    }

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

    const contextValues = {
        handleSubmit,
        variant,
        setVariant,
        newMessage,
        setNewMessage,
        isToastVisible,
        setIsToastVisible,
        messages,
        setMessages,
        VARIANT_OPTIONS
    }

    return (
        <ToastContext.Provider value={contextValues}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
