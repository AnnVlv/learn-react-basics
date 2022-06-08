import {useRef, useEffect} from 'react';

export const useObserver = (postsLoading, condition, element, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (postsLoading) {
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
    }, [postsLoading]);
};
