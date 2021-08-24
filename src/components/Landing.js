/*
This component is the landing page which all users will see when they land on the website.
Content of who I am as well as what I will be working on will be in this component.
*/
import React from 'react';
import Segment from './reusable/SegmentAPIs';
import Link from './Link';
import SegmentGithub from './reusable/SegmentGithub';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <div className="container">
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
                                Share my interests and projects.
                            </div>
                            <div role="listitem" className="item">
                                Share my passion of Technology with all.
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
                    <div className="ui massive horizontal divided list"> 
                        <div className="item">
                            <Link href="/projects" className="item">
                                Completed Projects
                            </Link>
                        </div>
                        <div className="item">
                            <Link href="/youtube" className="item">
                                Youtube Emulator
                            </Link>
                        </div>
                        <div className="item">
                            <Link href="/wikipedia" className="item">
                                Wikipedia Search
                            </Link>
                        </div>
                        <div className="item">
                            <Link href="/contact" className="item">
                                Contact Page
                            </Link>
                        </div>
                    </div>
                </div>
                <h3 className="ui top attached header">Working on currently</h3>
                <div className="ui attached segment">
                    <h3>Wat Shall I Eat (Deployed non functional)</h3>
                    <p>
                        You ever just not want to cook and want to uber eats/Door dash, or even leave the house to pick up some food. Only problem is you can't decide what to get?
                        Well Wat Shall I Eat will tell you what you want.
                    </p>
                    <p>
                        This application will ask to know your geolocation. Once your location is found the page will gather all restaurants in an X radius around you and display one to the screen.
                        There will be some variables you can control in the decision of the selection. Types of restaurants and a mileage radius around you.
                    </p>
                    <p>
                        Very early stages, but the general format of the site can be seen here: <a href="https://www.watshallieat.com">Wat Shall I Eat</a>
                    </p>
                </div>
                <div className="ui attached segment">
                    <h3>Telep Remodeling LLC (Deployed!)</h3>
                    <p>
                        A carpentry website I built for my brother for his birthday! I wanted to help modernize his company and setup an email service for people that may visit online.
                        My brother David is a very talented Carpenter located in North Eastern Ohio. If you need nay carpentry work please reach out!
                    </p>
                    <p>
                        The website can be found here: <a href="https://www.telepremodeling.com">Telep Remodeling LLC</a>
                    </p>
                </div>
                <div className="ui attached segment">
                    <h3>Crypto World</h3>
                    <p>
                        I am fascinated with the Crypto world of Blockchain technologies to NFTS. NFT's explicitly baffle me like no other. How a $1k minted png can be then sold for $3.3 million 2 months later.
                        Vast amounts of money within Crypto and I would be dumb to not dabble within it. Investing my money and time into the field to maybe one day create something truly special.
                    </p>
                    <p>
                            My first NFT can be found here: 
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51156684435078612265777829555012220085558653837370331361123690713874186633217/">
                            Conker's Bad Fur Day
                            </a>
                    </p>
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

                <h3 className="ui top attached header">Latest Commits</h3>
                <div className="ui attached segment">                    
                    <SegmentGithub />                    
                </div> 
                <Footer />
        </div>
    );
};

export default Landing;