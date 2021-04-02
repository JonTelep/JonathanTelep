import React, {useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const Youtube = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('Final 3:39 of Game 7 of the 2016 NBA Finals');
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    
    return(
        <div>
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                        onVideoSelect={setSelectedVideo} 
                        videos={videos} 
                        />
                    </div>
                </div>                
            </div>
        </div>

    );
}

export default Youtube;