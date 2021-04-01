import React, { useState } from 'react';
import Dropdown from './reusable/Dropdown';
import Convert from '../apis/Convert';



const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Chinese',
        value: 'zh'
    },
    {
        label: 'Czech',
        value: 'cs'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Finnish',
        value: 'fi'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Chinese',
        value: 'zh'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Slovak',
        value: 'sk'
    },
    {
        label: 'Spanish',
        value: 'es'
    },

];

const Translate = () => {
    const [language, setLanguage] = useState(options[9]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}  />
                </div>
            </div>
            <Dropdown
            label="Select a Language"
            selected={language}
            onSelectedChange={setLanguage}
            options={options}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
            <div className="continer">
                <br />

                <h1>Quick overview of the backend.</h1>
                This translator is using the google's API. Using Axios to call the api within React and displaying the results in real time. <br />
                There is a timeout set to send the call after 500 ms once the user is done typeing. Each keystroke restarts the timeout. <br />
            </div>
        </div>
    );
}
export default Translate;