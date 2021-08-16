import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCEBKjz6Osq-0603lVOaoal08bpgxqiln8",
        authDomain: "jumpstart-db-27e4b.firebaseapp.com",
        projectId: "jumpstart-db-27e4b",
        storageBucket: "jumpstart-db-27e4b.appspot.com",
        messagingSenderId: "547304825206",
        appId: "1:547304825206:web:2972f3741a48a3992f1a57",
        measurementId: "G-BKPYHDKPCW"
      }

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;





