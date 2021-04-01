/*
    This is reusable dropdown selection list
    const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    };
    <Dropdown
    label="Select a Language"
    selected={language}
    onSelectedChange={setLanguage}
    options={options}
    />
*/

import React, {useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false); //defaulting dropdown closed, creating state to open and close dropdown
    const ref = useRef();
    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)) {
                return;
            }
            
            setOpen(false);
        }
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value){
            return null;
        }
        return (
            <div 
            key={option.value} 
            className="item"
                onClick={() => onSelectedChange(option)}
                >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}` } //creating the dropdown effect, closing and opening
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`} //creating the dropdown effect, closing and opening
                    
                    > 
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Dropdown;