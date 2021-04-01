import React from 'react';
import Segment from './reusable/SegmentAPIs';
import Link from './Link';
import SegmentGithub from './reusable/SegmentGithub';

const Landing = () => {
    return (
        <div >
            <h1 className="ui center aligned container">Hello, I'm Jon!</h1>
            <p></p>
            <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    <div className="column">
                    <div role="list" className="ui bulleted list">
                            <h2>There are many reasons I wanted to make this website.</h2>
                            <div role="listitem" className="item">
                                Show my programming ability online.
                            </div>
                            <div role="listitem" className="item">
                                Practice Version Control.
                            </div>
                            <div role="listitem" className="item">
                                Share interesting projects with anyone.
                            </div>
                            <div role="listitem" className="item">
                                Show off my mediocare css.
                            </div>
                        </div>
                    </div>
                    <div className="column">
                    <h1>Collaboration</h1>
                        <div className="ui list">
                            <Segment
                                icon={"google icon"}
                                link={"https://www.gmail.com"}
                                linkName={"TelepJonathan@gmail.com" }
                                content={"- My personal email."}
                            />
                            <Segment
                                icon={"chart line icon"}
                                link={"https://www.linkedin.com/in/jonathan-telep-576750115/"}
                                linkName={"Linked In" }
                                content={"- My professional account for career growth and connections"}
                            />
                            <Segment
                                icon={" github middle aligned icon"}
                                link={"https://github.com/JonTelep"}
                                linkName={"Github" }
                                content={"- My bare but ever growing repositories"}
                            />

                        </div>

                    </div>
                </div>
                <div className="ui vertical divider">
                    and
                </div>
            </div>

            <h3 className="ui top attached header">What I've done</h3>
                <div className="ui attached segment">
                    <div class="ui massive horizontal divided list"> 
                        <div className="item">
                            <Link href="/youtube" className="item">
                                Youtube Emulator
                            </Link>
                        </div>
                        <div className="item">
                            <Link href="/translate" className="item">
                                Google Translate
                            </Link>
                        </div>
                        <div className="item">
                            <Link href="/wikipedia" className="item">
                                Wikipedia Search
                            </Link>
                        </div>
                    </div>
                </div>


                <h3 className="ui top attached header">Working on currently</h3>
                <div className="ui attached segment">
                    <h3>Contact page</h3>
                    <p>
                        A contact page that will allow a user to submit any text to me.
                    </p>
                    <h3>Approach</h3>
                    <p>
                        Each event will submit an entry into a simple sqlite database. I am going to setup a server in order to house the db and create an API to post to it using Flask with Python.
                    </p>
                </div>
                <div className="ui attached segment">
                    <h3>What Shall I Eat</h3>
                    <p>
                        You ever just not want to cook and want to uber eats/Door dash, or even leave the house to pick up some food. Only problem is you can't decide what to get?
                        Well What Shall I Eat will tell you what you want.
                    </p>
                    <p>
                        This application will ask to know your geolocation. Once your location is found the page will gather all restaurants in an X radius around you and display one to the screen.
                        There will be some variables you can control in the decision of the selection. Types of restaurants and a mileage radius around you.
                    </p>
                    <h3>Approach</h3>
                    <p> 
                        A python based server that grabs all restaurants around you in a X radius.
                        You click a button and it will randomly select a food place around you. 
                    </p>

                        <ol class="ui list">
                        <li>I want to create the python code and artificially test it. </li>
                        <li>Secondly I will use Flask to create an API to a python server.
                            <ol>
                                <li>Set up Python server with Flask</li>
                                <li>Connect it to React</li>
                            </ol>
                        </li>
                        <li>Lastly I will create a react UI which reaches out to the python server and displays results to you.</li>
                        </ol>
                </div>

                <h3 className="ui attached header">Next on the list</h3>
                <div role="listitem" className="ui attached segment">
                    <div className="ui list">
                        <Segment
                                icon={"dollar sign icon"}
                                link={"https://www.google.com/adsense/start/"}
                                linkName={"Advertisements" }
                                content={"- A single page loaded with advertisements. Just to learn how they work. (And to test my adblocker)"}
                        />
                        <Segment
                            icon={"chart line icon"}
                            link={"https://documentation.tradier.com/brokerage-api"}
                            linkName={"Tradier API" }
                            content={"- Stock market data of an entered stock."}
                        />
                        <Segment
                            icon={"space shuttle icon"}
                            link={"https://api.nasa.gov/"}
                            linkName={"NASA API" }
                            content={"- Space imagery from the hubble telescope, wish to automate new images displayed daily."}
                        />
                        <Segment
                            icon={"twitter icon"}
                            link={"https://developer.twitter.com/en/docs/twitter-api"}
                            linkName={"Twitter API" }
                            content={"- Be able to see analytics over a certain tweet."}
                        />
                        <Segment
                            icon={"chess knight icon"}
                            link={"https://www.chess.com/news/view/published-data-api"}
                            linkName={"Chess.com API" }
                            content={"- Allow people to invite me to a game. Display my record/progress."}
                        />
                    </div>
                </div>    

                <h3 className="ui top attached header">Websites Versions</h3>
                <div className="ui attached segment">
                    <div class="ui relaxed divided list">
                        <SegmentGithub
                            GbLink="https://github.com/JonTelep"
                            GbHeader="Personal Github"
                            GbDescription="Will be versions of this website once I start branching."
                        />
                    </div>
                </div>
 
        </div>
        
      
    );
};

export default Landing;