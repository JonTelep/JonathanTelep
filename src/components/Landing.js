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
                    <h3>Python, Pandas, Flask, Tweepy</h3>
                    <p>
                        I have picked my python passion back up and have decided to learn the beloved Pandas library for Data Analysis mixed with Flask-restful to open up my own APIs.
                        Currently working on <a href="https://twitter.com/cryptokap10">Crypto Address Tracker</a> Twitter Bot which will monitor a list of celebrity address wallets.
                        Goal is to alert followers of celebrities that they may not have their best interest financially. Think twice before investing in what they're selling.
                    </p>
                    <p>
                        I am using Python with the libraries Requst to make API calls to Etherscan and OpenSea APIs, Pandas for data manipulation, Tweepy for easy Twitter API usage, and Flask to open up the data I'm logging
                        as an API for future usage and the public. While I create this bot I am also creating a template that reuses much of what I've built with a easy guide to follow. I will open that up
                        as a github repo along with my API libraries!
                    </p>
                    <p>
                        Eventually I'll get the point where I need to host the bot and automate the runs. Still need to research more into that, as of now I am manually running the script with enhances everyday.
                        My technical heavy <a href="https://twitter.com/telep_io">Twitter Account</a>  gives updates of progress. I wish to keep the bot only tweeting automated tweets.
                    </p>
                </div>
                <div className="ui attached segment">
                    <h3>API Libraries</h3>
                    <p>
                        Etherscan API is a very popular api to get all Ethereum address related data. I've created a etherscan library class which can be referenced for easy usage on other projects.
                    </p>
                    <p>
                        Opensea API is the most popular NFT marketplace. You can link any ENS domain or Ethereum address to a profile which houses all their NFTS. I am created a library which will grab
                        simple analytics on a profile.
                    </p>
                    <p>
                        Twitter API has many already built libraries but I wish to learn therefore I am creating my own. Currently I am using tweepy but have issues with the OAUTH2 so am in the progress of 
                        creating my own little library for Twitter.
                    </p>
                </div>
                
                <div className="ui attached segment">
                    <h3>Crypto World</h3>
                    <p>
                        I am fascinated with the Crypto world of Blockchain technologies to NFTS. NFT's explicitly baffle me like no other. How a $1k minted png can be then sold for $3.3 million 2 months later.
                        Vast amounts of money within Crypto and I would be dumb to not dabble within it. Investing my money and time into the field to maybe one day create something truly special.
                    </p>
                    <p>
                        10 months after my deep crypto rabbit hole dive I am still intrigued with the technology behind crypto. But am skeptical the damage being done on the adoption side of people getting 'rugged' and many hacks being exploited.
                        But all great things have their hiccups and am working to try to help people have the knowledge that their beloved celebrity does not have their best interests. My twitter bots will monitor these celebrity addresses of known culprits
                        and tweet out fishy transactions.
                    </p>
                </div>

                <h3 className="ui attached header">Next on the list</h3>
                <div role="listitem" className="ui attached segment">
                    <div className="ui list">
                        <Segment
                            icon={"twitter icon"}
                            link={"https://developer.twitter.com/en/docs/twitter-api"}
                            linkName={"Twitter API" }
                            content={"- Be able to see analytics over a certain tweet."}
                        />
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