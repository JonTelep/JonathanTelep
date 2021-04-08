/*
This component will be used to share links to websites and articles that I find interesting at.
*/
import React from 'react';
import Segment from '../components/reusable/Segment';
import {TwitterTweetEmbed } from 'react-twitter-embed';


//https://blockfi.com/
const News = () => {
    const uDomainContent = ()=> {
        return(
        <div className="ui segments"> 
            <div className="ui segment">
                <p>Decentralized web hosting. Yeah you read that right. You purchase a domain name, create a website, and upload it to your wallet. People will There are two main give benefits that blockchain domains do that traditional domains can't</p>
            </div>
            <div className="ui segments">
                <div className="ui segment">
                    <p><strong>1. Simplify Crypto Payments</strong> - Replacing hash addresses to a legible domain name makes it much simpler and easier to send and receive cryptocurrency.</p>
                </div>
                <div className="ui segment">
                    <p><strong>2. Build Uncensorable Websites</strong> - Fully Free Speech, No hosting company or government can remove your site from the internet.</p>
                </div>
            </div>
            <div className="ui segment">
                <p>The domains are stored within your wallet which no one can access them without your private key.</p>
            </div>
            <div class="ui horizontal segments">
                <div class="ui segment">
                    <p>Blockchain Domains</p>
                </div>
                <div class="ui segment">
                    <p>+ Decentralized Storage</p>
                </div>
                <div class="ui segment">
                    <p>= A true internet in which no company or government can censor or control it.</p>
                </div>
            </div>
            <div className="ui segment">
                <p>There is one catch at the moment. The technology is not there to have a seemless access to a .crypto website just yet. You'll need to configure your browsers to access .crypto domains.
                    Google Chrome how to configuration can be found <a href="https://community.unstoppabledomains.com/t/configure-your-browser-for-unstoppable-domains/1469#heading--chrome">here</a>
                </p>
            </div>
        </div>);
    }
    return(
        <div>
            <h2>News sites that I go to often</h2>
            <Segment
                 link="https://www.drudgereport.com/"
                  title="The Drudge Report"
                  content="I check Drudge Report multiple times a day. They have many of the top articles from any news site around the world.
                   They generally stay unbias but have had been questioned both ways many times. "
            />
            <h2>Blockchain Technology</h2>
            <Segment
                 link="https://unstoppabledomains.com/r/804daafaa62e463"
                  title="Unstoppable Domains"
                  content={uDomainContent()}
            />
            <Segment
                 link="https://blockfi.com/"
                  title="BlockFi"
                  content="The Future of Finance. Everything is blockchain backed. Student Loans, Mortgages, Car loans. Why? Solid question. Fees are dramatically lower
                  dealing with blockfi as well as annual interest rate.For example, if you took out a loan for $10,000 with a 8.5% annual interest rate, you would pay $71 per month. That equals 0.7% interest per month over the 12-month loan term. It’s that simple. Other crypto asset-backed lenders offer amortized loans. A fully amortized loan on your $10,000 would cost you $872 a month.
                   Doesn’t take a crypto genius to see the difference. Click here to learn more about BlockFi loan rates. "
            />
        </div>
    );
}

export default News;