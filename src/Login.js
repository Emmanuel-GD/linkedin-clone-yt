import React, { useState } from 'react'
import { login } from './features/userSlice';
import './Login.css';
import { auth } from './Firebase'
import { useDispatch } from 'react-redux';

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profilePic: userAuth.user.photoURL,
                    })
                )
            }).catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert('name is required');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                })
            }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src={process.env.PUBLIC_URL + "/Linkedin-R-Full-logo.jpg"} alt="" />

            <form >
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name" type="text" />
                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder="Prof Pic URL" type="text" />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" type="text" />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" type="password" />

                <button onClick={loginToApp}> Sign In</button>
            </form>
            <p>Not a member?
                <span className="login__register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
