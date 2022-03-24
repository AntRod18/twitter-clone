import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post'
import db from './firebase'
import { collection, getDocs, onSnapshot } from "firebase/firestore";


function Feed() {
    const [posts, setPosts] = useState([])

    

    const getPosts = async() => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
            setPosts([doc.data()])
        })
    }

    useEffect(() => {
        getPosts()
    },[])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {posts.map(post => (
                <Post displayName={posts.displayName}
                userName={post.userName} 
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image ={post.image} />
            ))}
            
            
        </div>
    )
}

export default Feed
