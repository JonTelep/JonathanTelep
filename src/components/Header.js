import React from 'react';
import Link from './Link';
import JON from '../images/T_Jon.png';
                <Link href="/contact" className="item">
                    Contact
                </Link>
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                <img src={JON} alt="Jon logo"/>
            </Link>
            <Link href="/youtube" className="item">
                Youtube
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
            <Link href="/wikipedia" className="item">
                Wikipedia
            </Link>
            <div className="right menu">
                <Link href="/contact" className="item">
                    Contact
                </Link>
            </div>
            
        </div>
    );
};

export default Header;