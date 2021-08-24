import React from 'react';

//Components imported
import Footer from '../components/Footer';

//Images imported
import OSRNG from '../images/OSRNG.PNG';
import TRLLC from '../images/TelepRemodeling.png';
import TIO from '../images/Telepio.PNG';


const Projects = () => {
    return (
        <div>
            <h3 className="ui top attached header">Completed Projects</h3>
                <div className="ui attached segment">
                    <h3>Telep Remodeling LLC</h3>
                    <img className="ui centered medium image" src={TRLLC}></img>
                    <p>
                        A carpentry website I built for my brother for his birthday! I wanted to help modernize his company and setup an email service for people that may visit online.
                        My brother David is a very talented Carpenter located in North Eastern Ohio. If you need nay carpentry work please reach out!
                    </p>
                    <p>
                        The website can be found here: <a href="https://www.telepremodeling.com">Telep Remodeling LLC</a>
                    </p>
                </div>
                <div className="ui attached segment">
                    <h3>OSRNG</h3>
                    <img className="ui centered medium image" src={OSRNG}></img>
                    <p>
                        In my spare time I play a game called Oldschool Runescape that I've been play on and off for 15 years. Passes the time and it still is a well supported MMORPG.
                        This site I created one night when my friends and I wanted to play but didn't know what to do. I created a quick react app that runs a random number generater which
                        then is applied to an object array to display the results.
                    </p>
                    <p>
                    The website can be found here: <a href="https://www.osrng.com">OSRNG</a>
                    </p>
                </div>
                <div className="ui attached segment">
                    <h3>Telep IO</h3>
                    <img className="ui centered medium image" src={TIO}></img>
                    <p>
                        Website that will house my professional projects and services. It is a mere template at this moment but wish to expand once some of my projects progress to a Minimum Viable Product.
                        Behind the scenes I've been putting my project manager hat on and documenting tasks/sprints organized in Confluence.
                    </p>
                    <p>
                        Can be found <a href="https://www.telep.io">Telep IO</a>
                    </p>
                </div>
                <Footer />
        </div>
    );

}

export default Projects;