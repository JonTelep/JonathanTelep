import React, { useEffect, useState} from 'react';
import axios from 'axios';

//https://api.github.com/repos/jontelep/jonathantelep/commits?per_page=5

const SegmentGithub = () => {
    const [results, setResults] = useState([]);

    useEffect(()=>{
        const github = async () => {
            const { data } = await axios.get('https://api.github.com/repos/jontelep/jonathantelep/commits?per_page=5', {    });
            setResults(data);  
        };
        github();  
    }, []);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.nodid} className="item">
                <i className="github middle aligned icon" />
                <div className="content">
                    <a className="header" href={result.html_url}>
                        {result.commit.committer.name}
                    </a>
                <div className="description">
                    {result.commit.message}
                </div>
                <div className="description">
                    Committed on: {result.commit.committer.date}</div>
                </div>
            </div>
        );
    });
    

    return(
        <div>
            <div className="ui relaxed divided list">
                {renderedResults}
            </div>
        </div>

    );
}

export default SegmentGithub;