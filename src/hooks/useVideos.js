//this is a custom hook around videos used by the Youtube.js
import {useState, useEffect } from 'react';
import youtube from '../apis/Youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search (defaultSearchTerm);
    }, [defaultSearchTerm]);
    
    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    };
    return [videos, search];
};

export default useVideos;