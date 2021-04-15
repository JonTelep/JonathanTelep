/*
Reusable component for a simple segment


*/
import React from 'react';

const Segment = ({  img, link, title, content, twitter }) => {
    return (
        <div>
            
            <h3 className="ui top attached header">
                <a role="listitem" className="item" href={link}>
                    {title}
                    {twitter}
                </a> 
            </h3>
            <div className="ui attached segment">
            <img className="ui centered medium image" src={img}></img>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Segment;