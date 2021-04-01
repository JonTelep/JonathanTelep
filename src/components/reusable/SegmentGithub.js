import React from 'react';

const SegmentGithub = ({GbLink, GbHeader, GbDescription}) => {
    return(
        <div class="item">
            <i class="large github middle aligned icon" />
            <div class="content">
                <a class="header" href={GbLink}>{GbHeader}</a>
            <div class="description">{GbDescription}</div>
            </div>
        </div>
    );
}

export default SegmentGithub;