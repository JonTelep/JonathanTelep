import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('Programming');
    const [results, setResults] = useState([]);

    useEffect(() => { //called every time a keystroke is entered
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });

            setResults(data.query.search);
        };

        //this if there is a term present and no results yet (essentially means its the first time rendering) to search right away
        if (term && !results.length) {
            search();
        } else { //else there is results so the user is changing input, but already has received a result either from initial or their own
            const timeoutId = setTimeout(() => { //timeoutId needs to be set to clearTimeout
                if (term) {
                    search();
                }
            }, 500); //set for 500 ms
    
            return () => {
                clearTimeout(timeoutId); //this will reset the timer after every keystroke in search, to throttle api requests
            };
        }
    }, [term]);
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        GO
                </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>

    );
};

export default Search;