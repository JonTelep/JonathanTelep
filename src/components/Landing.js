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
                        <div className="item">
                            <Link href="/contact" className="item">
                                Functional Contact Page
                            </Link>
                        </div>
                    </div>
                </div>


                <h3 className="ui top attached header">Working on currently</h3>
                <div className="ui attached segment">
                    <h3>Ethereum and Solidity</h3>
                    <p>
                        I've always wanted to be on the front lines of technology and I truly believe that blockchain and web3 will revolutionize the way everyone interacts through the internet. In my spare
                        time I've been working on learning Blockchain development with <a href="https://cryptozombies.io/">CryptoZombies.</a> An interactive way to create your first blockchain DApp with
                        smart contracts in Solidity. I am also enrolled in <a href="https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide">ethereum-and-solidity-the-complete-developers-guide </a>
                        to help me get a better understanding and have a couple projects under my belt to reference for my future projects.
                    </p>
                    <p>
                        I've also started interacting and reading from many popular crypto people.
                    </p>
                </div>
                <div className="ui attached segment">
                    <h3>Wat Shall I Eat (Delayed, talking to my web hosting provider around a CORS api issue)</h3>
                    <p>
                        You ever just not want to cook and want to uber eats/Door dash, or even leave the house to pick up some food. Only problem is you can't decide what to get?
                        Well Wat Shall I Eat will tell you what you want.
                    </p>
                    <p>
                        This application will ask to know your geolocation. Once your location is found the page will gather all restaurants in an X radius around you and display one to the screen.
                        There will be some variables you can control in the decision of the selection. Types of restaurants and a mileage radius around you.
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