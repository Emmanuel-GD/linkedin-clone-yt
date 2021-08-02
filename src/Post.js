import { Avatar } from '@material-ui/core'
import { CommentOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import './Post.css'
import InputOption from './InputOption'

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar  src={photoUrl}>  
                    {name[0]}
                </Avatar>
                <div className="post__info">
                    <h2>
                        {name}
                    </h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>
                    {message}
                </p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="Like" color="Gray" />
                <InputOption Icon={CommentOutlined} title="Comment" color="Gray" />
                <InputOption Icon={ShareOutlined} title="Share" color="Gray" />
                <InputOption Icon={SendOutlined} title="Send" color="Gray" />
            </div>
        </div>
    )
}

export default Post
