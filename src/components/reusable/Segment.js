/*
Reusable component for a simple segment


*/
import React from 'react';

const Segment = ({  link, title, content, twitter }) => {
    return (
        <div>
            <h3 className="ui top attached header">
                <a role="listitem" class="item" href={link}>
                    {title}
                    {twitter}
                </a> 
            </h3>
            <div className="ui attached segment">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Segment;