import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post'
import db from './firebase'
import {collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";


function Feed() {
    const [posts, setPosts] = useState([])
    // const getPosts = () => {
    //     const u = 
    //     })
    //     // console.log(q)
    //     // querySnapshot.forEach((doc) => {
    //     //     setPosts([doc.data()])
    //     // })
    // }
    // const q = query(collection(db, "posts"))

    useEffect(() => {
        onSnapshot(collection(db, "posts"), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()))
        })
        console.log(posts)
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
