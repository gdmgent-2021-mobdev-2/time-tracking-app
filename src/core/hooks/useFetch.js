import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = useCallback((isCurrent = true) => {
        fetch(url)
            .then((json) => {
                if (json.status === 404) {
                    throw new Error('Not found');
                }
                return json;
            })
            .then((json) => json.json())
            .then((data) => isCurrent && setData(data))
            .catch((error) => isCurrent && setError(String(error)));
    }, [url]);

    const refresh = () => {
        fetchData();
    };

    useEffect(() => {
        setData(null);
        setError(null);
        if (url) {
            let isCurrent = true;

            fetchData(isCurrent);

            return () => {
                isCurrent = false
            };
        }
    }, [url, fetchData]);

    const isLoading = !data && !error;

    return {
        data,
        error,
        refresh,
        isLoading,
    }
};

export default useFetch;
