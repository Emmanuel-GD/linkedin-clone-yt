import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAb5VnhYEdDEmlpt1pImN3dz0SwCWKaXig",
    authDomain: "linkedin-clone-yt-aaa56.firebaseapp.com",
    projectId: "linkedin-clone-yt-aaa56",
    storageBucket: "linkedin-clone-yt-aaa56.appspot.com",
    messagingSenderId: "391460166089",
    appId: "1:391460166089:web:13ec637d05b5f6dffc3018"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };