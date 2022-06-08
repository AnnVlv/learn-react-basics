import {useRef, useEffect} from 'react';

export const useObserver = (canCall, condition, element, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (!canCall) {
            return;
        }

        if (observer?.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && condition) {
                callback();
            }
        });
        observer.current.observe(element.current);
    }, [canCall]);
};
