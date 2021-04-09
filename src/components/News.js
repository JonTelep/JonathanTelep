/*
This component will be used to share links to websites and articles that I find interesting at.
Eventually will pull articles that are trending.
*/
import React from 'react';
import Segment from '../components/reusable/Segment';
import {TwitterTimelineEmbed } from 'react-twitter-embed';

const News = () => {
    return(
        <div>
            <h1>Websites/Newsletters I visit often</h1>
            <h2>Websites</h2>
            <Segment
                 link="https://www.drudgereport.com/"
                  title="The Drudge Report"
                  content="I check Drudge Report multiple times a day. They have many of the top articles from any news site around the world.
                   They generally stay unbias but have had been questioned both ways many times. "
            />
            <Segment
                link="https://apnews.com/"
                title="Associated Press"
                content="Global, not-for-profit news cooperative with articles from all around the world. I just want the facts given to me and let me decide 
                the outcome if it's right or wrong. And I believe AP news does this farely well. I read the headlines and if I find something interesating
                I read the article. I dislike 'OPINION' articles being published by once respected publishers.
                The News should be the facts we know and that's that. "
            />
            <h2>Newsletters</h2>
            <Segment
                link="https://www.morningbrew.com/daily/r?kid=31444135"
                title="Morning Brew Daily"
                content="A free daily email condensing all Top business news in a way that's informative and entertaining.
                    Best of all, it's free, and only takes 5 minutes to read each morning."
            />
            <Segment
                link="https://www.morningbrew.com/emerging-tech/r/?kid=31444135"
                title="Morning Brew Emerging Tech"
                content="The emerging tech brew is sent twice a week with many new startups that are very innovative. You can expect
                to be reading about Crypto, Drones, Automation and much much more. I highly recommend signing up and giving it a read
                when it ends up in your inbox. Well written with a wide variety of innovating tech."
            />

            <h1>Breaking News Cycles</h1>            
            <div className="centerContent">
                <div className="selfCenter standardWidth">
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="BreakingNews"
                options={{}}
                />
                </div>
            </div>
        </div>
    );
}

export default News;