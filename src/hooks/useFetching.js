import {useState} from 'react';

export const useFetching = callback => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (...args) => {
        setLoading(true);

        try {
            await callback(...args);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return [fetchData, loading, error];
};
