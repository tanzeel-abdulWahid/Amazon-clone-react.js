import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVMOvXPLcopeXjPCe8RbD8XyXNfiBzBug",
    authDomain: "clone-amaazon-0.firebaseapp.com",
    databaseURL: "https://clone-amaazon-0.firebaseio.com",
    projectId: "clone-amaazon-0",
    storageBucket: "clone-amaazon-0.appspot.com",
    messagingSenderId: "304320513167",
    appId: "1:304320513167:web:bb3b7125348b083bbc9cfa",
    measurementId: "G-J55H7LLBYR"
});

const auth = firebase.auth();

export {auth}