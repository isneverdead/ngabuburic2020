import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Get a Firestore instance
export const firebase = Firebase
  .initializeApp({ 
    apiKey: "AIzaSyBzuS2oYFNDzjOqik-YkFZ3WLBtw2PTKR8",
    authDomain: "ngabuburic2020.firebaseapp.com",
    databaseURL: "https://ngabuburic2020.firebaseio.com",
    projectId: "ngabuburic2020",
    storageBucket: "ngabuburic2020.appspot.com",
    messagingSenderId: "950672799231",
    appId: "1:950672799231:web:e42cc8565bddcdff64e3ca"
})
export const db = firebase.firestore()
export const auth = firebase.auth()

