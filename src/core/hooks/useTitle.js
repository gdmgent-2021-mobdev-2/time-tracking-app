import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Time Tracking App`;
    }, [title]);
};

export default useTitle;
