import React, { useState, useEffect } from 'react'
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import firebase from 'firebase'
import { db } from './Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {

    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            )
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    }

    return <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>

            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#70B5F9' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#70B5F9' />
                <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#70B5F9' />
            </div>
        </div>

        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}

    </div>
}

export default Feed
