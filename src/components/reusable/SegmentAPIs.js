/*
    This is a very simple reusable segment to be called like:
    <Segment
        header="this is the header"
        content="this is the content"
    />
*/
import React from 'react';

const Segment = ({ icon, link, linkName, content}) => {
    return (
            <div className="item">
                <i className={icon}></i>
                <div className="content">
                    <a role="listitem" class="item" href={link}>
                        {linkName} 
                    </a> {content}
                </div>
            </div>
    );
}

export default Segment;