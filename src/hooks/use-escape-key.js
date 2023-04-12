import React from 'react';

function useEscapeKey(callback) {

    React.useEffect(() => {
        function handleEscapeKey(event) {
            if (event.key === 'Escape') {
                callback();
            }
        }

        document.addEventListener('keydown', handleEscapeKey)

        return (() => {
            document.removeEventListener('keydown', handleEscapeKey)
        })
    }, [callback])

}

export default useEscapeKey;