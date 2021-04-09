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
        label: 'German',
        value: 'de'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Portuguese (Portugal, Brazil)',
        value: 'pt'
    },
    {
        label: 'Russian',
        value: 'ru'
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
    const [language, setLanguage] = useState(options[0]);
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
            
            <Convert text={text} language={language} />
            <div className="continer">
                <br />

            </div>
        </div>
    );
}
export default Translate;