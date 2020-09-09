import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBex-VE3kKcgQvR3WJoznXGiukmgMix7rs",
    authDomain: "app5-fba7d.firebaseapp.com",
    databaseURL: "https://app5-fba7d.firebaseio.com",
    projectId: "app5-fba7d",
    storageBucket: "app5-fba7d.appspot.com",
    messagingSenderId: "277967545934",
    appId: "1:277967545934:web:8a58c987dc2e2fe0e4451f"
});

export const db = firebaseApp.firestore;
export const auth = firebase.auth();
