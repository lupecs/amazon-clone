import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3HEc2J2TVtUVf5hPs0rQfEMvrkQuk3TQ",
    authDomain: "clone-4b589.firebaseapp.com",
    databaseURL: "https://clone-4b589.firebaseio.com",
    projectId: "clone-4b589",
    storageBucket: "clone-4b589.appspot.com",
    messagingSenderId: "424131879704",
    appId: "1:424131879704:web:bd47155b3dacdecf9df46d",
    measurementId: "G-PN6EC0ZEC4"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };