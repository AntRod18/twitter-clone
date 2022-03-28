import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';
import { collection, addDoc} from 'firebase/firestore'
import Verified from '@mui/icons-material/Verified';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const createTweet = async() => {
        const docRef = await addDoc(collection(db, "posts"), {
            displayName: "Anthony",
            userName: "anthonyrod",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://media.comicbook.com/2021/04/my-hero-academia-308-spoilers-izuku-deku-ofa-full-powers-reveale-1264224.jpeg?auto=webp&width=1200&height=669&crop=1200:669,smart"
        })
        console.log(docRef)
    }

    const sendTweet = (e) => {
        e.preventDefault()
        createTweet()
        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media.comicbook.com/2021/04/my-hero-academia-308-spoilers-izuku-deku-ofa-full-powers-reveale-1264224.jpeg?auto=webp&width=1200&height=669&crop=1200:669,smart"></Avatar>
                    <input 
                    value ={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)} 
                    placeholder="What's happening?"
                    />
                </div>
                <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
                />
                
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
