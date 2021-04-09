/*
Holds the Google translate request and returns the output
*/
//, useEffect
import React, { useState }  from 'react';
import axios from 'axios';


const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
/*     const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        
        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {},
            {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: `${process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}`
                },
            }
            );
            setTranslated(data.data.translations[0].translatedText);

        };
        
        doTranslation();
    }, [language, debouncedText]); */
    const doTranslation = async () => {
        const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {},
        {
            params: {
                q: text,
                target: language.value,
                key: `${process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}`
            },
        });
        setTranslated(data.data.translations[0].translatedText);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        doTranslation();      
    }

    return (
        <div>
            <form  className="ui form">
                <button 
                className="ui button" 
                type="submit"
                onClick={onSubmit}
                >
                    Translate
                </button>
            </form>
            <h3 className="ui header">Output</h3>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;