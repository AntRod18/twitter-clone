import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media.comicbook.com/2021/04/my-hero-academia-308-spoilers-izuku-deku-ofa-full-powers-reveale-1264224.jpeg?auto=webp&width=1200&height=669&crop=1200:669,smart"></Avatar>
                    <input placeholder="What's happening?"></input>
                </div>
                <input
                className="tweetBox__imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
                />
                
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
