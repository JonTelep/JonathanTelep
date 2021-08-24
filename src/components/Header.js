/*
This component is used for the header, easy navigation between pages
*/
import React from 'react';
import Link from './Link';
import JON from '../images/T_Jon.png';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                <img src={JON} alt="Jon logo"/>
            </Link>
            <Link href="/projects" className="item">
                Projects
            </Link>
            <Link href="/youtube" className="item">
                Youtube
            </Link>
            <Link href="/wikipedia" className="item">
                Wikipedia
            </Link>
            <Link href="/crypto" className="item">
                Crypto
            </Link>
            <Link href="/news" className="item">
                News
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