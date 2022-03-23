import React from 'react'
import './Post.css'
import { Avatar } from "@material-ui/core"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({displayName, userName, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://media.comicbook.com/2021/04/my-hero-academia-308-spoilers-izuku-deku-ofa-full-powers-reveale-1264224.jpeg?auto=webp&width=1200&height=669&crop=1200:669,smart" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Anthony <span>
                                <VerifiedIcon className="post__badge"/>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            Hey guys today is going to be a great day!
                        </p>
                    </div>
                </div>
                <img
                src='https://media.giphy.com/media/MARFSIQQNQVWw/giphy.gif'
                alt='allmightgif'
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
