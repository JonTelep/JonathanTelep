import React from 'react';
import Landing from './components/Landing';
import Route from './components/Route';
import Header from './components/Header';
import Youtube from './components/Youtube';
import Translate from './components/Translate';
import Contact from './components/Contact';
import Wikipedia from './apis/Wikipedia';
import News from './components/News';

export default () => {
    return(
        <div className="ui container">
            <Header />      
            <Route path="/"> 
                <Landing />
            </Route>  
            <Route path="/youtube">
                <Youtube />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route> 
            <Route path="/contact">
                <Contact />
            </Route> 
            <Route path="/wikipedia">
                <Wikipedia />
            </Route> 
            <Route path="/news">
                <News />
            </Route> 
        </div>
    );
}