import React from "react";
import classes from './TwitterTimeline.module.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton,
    TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed,
    TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const TwitterTimeline = ({source, screenName, listId}) => {

    return (
        <div className={classes.container}>
            <TwitterTimelineEmbed sourceType={"list"} screenName={screenName} id={listId} noScrollbar={false} />
        </div>
    )
}

export default TwitterTimeline;