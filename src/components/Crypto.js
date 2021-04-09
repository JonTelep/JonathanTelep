/*
This component will show the current price of crypto coins.
Technologies built around Blockchain that I've found interesting.
*/
import React from 'react';
import Segment from '../components/reusable/Segment';
import Footer from '../components/Footer';
import Wallet from '../images/BlochainWebsite.JPG';
import eRates from '../images/BlockFiRates.JPG';

const Crypto = () => {
    const uDomainContent = ()=> {
        return(
        <div className="ui segments"> 
            <div className="ui segment">
                <p>Decentralized web hosting. Yeah you read that right. You purchase a domain name, create a website, and upload it to your wallet.
                    That's just one feature of a Crypto domain, another feature is that you can use your domain name as your wallet address. Crypto domains
                    are also considered NFT's meaning that they have value and are able to be collected, moved, and even exchanged.
                    There are two main benefits that blockchain domains do that traditional domains can't.
                </p>
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
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <p>Blockchain Domains</p>
                </div>
                <div className="ui segment">
                    <p>+ Decentralized Storage</p>
                </div>
                <div className="ui segment">
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

    const blockFiContent = () => {
        return (
            <div className="ui segments">
                <div className="ui segment">
                    <p>"The future of finance." A US Based <strong>centralized</strong> Crypto Finance Company providing a variety of financial services. You can passively increase
                    your holdings of crypto with their interest accounts. That is a great way to increase your crypto holdings with little effort. They are working on a BlockFi Credit Card which will give 1.5% cash back in BTC 
                    which is an interesting alternative to traditional bank's % cash back. Other than those features, their loan services have a significantly lower interest percentage
                    than traditional banks. You can find their car loan sales pitch <a href="https://blockfi.com/auto-loan-buying-a-car">here.</a> Below are some benefits of using BlockFi:
                    </p>
                </div>
                <div className="ui segments">
                    <div className="ui segment">
                        <p><strong>1. Interest Accounts</strong> - Up to 8.6% annually on all cryptocurrency deposits. How it works is that Blockfi lends it's user's deposits
                        to instituions and corporate borrows who pay an interest rate which in return pays it's users.</p>
                    </div>
                    <div className="ui segment">
                        <p><strong>2. Borrowing Services</strong> - Borrowing againsts Cryptocurrency deposits as collateral which you can borrow up to 50% of the collateral value in USD.
                        Makes nearly instant cash on hand without the need of trading your crypto avoiding hassle, fees, and a taxable event.
                        </p>
                    </div>
                    <div className="ui segment">
                        <p><strong>3. Trading Services</strong> - Blockfi allows 0% trading fees for Cryptocurrencies. Although there is complaints that the final
                        exchange rate is suboptimal and withdrawal process is up to 7 days which is very very high. 
                        </p>
                    </div>
                </div>
                <div className="ui segment">
                    <p>The big takeaway is that BlockFi is <strong>NOT FDIC INSURED,</strong> nor is blockfi decentralized, therefore they have control over your crypto.
                    This is a finance institute that is built off of cryptocurrency services. Although they do prioritize User Accounts over other company equity, there is still a gamble involved.
                    But that's Crypto, gamble that it is the future. 
                    </p>
                </div>
             </div>
        );
    };
    return(
        <div>
            <h2>Blockchain Technology</h2>
            <Segment
                img={Wallet}
                link="https://unstoppabledomains.com/r/804daafaa62e463"
                title="Unstoppable Domains"
                content={uDomainContent()}
            />
            <Segment
                img={eRates}
                link="https://blockfi.com/?ref=1d6015b8"
                title="BlockFi"
                content={blockFiContent()}
            />
            <Footer />
            <Footer />
            <Footer />
            <Footer />
        </div>
    );
}

export default Crypto;