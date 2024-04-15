import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAkb8LAKkgpLHkLkaZWhI4AbfvIOJ568uQ",
    authDomain: "playlist-54ab6.firebaseapp.com",
    projectId: "playlist-54ab6",
    storageBucket: "playlist-54ab6.appspot.com",
    messagingSenderId: "281768882253",
    appId: "1:281768882253:web:d8c860b1000e422e63ec04"
}

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()



// collection ref
const colRef = collection(db, 'playlist')


// get collection data
getDocs(colRef)
    .then( (snapshot) => {
        let playlist = []
        snapshot.docs.forEach( (doc) => {
            playlist.push({...doc.data(), id: doc.id })
        } )
        console.log(playlist)
    } )
    .catch(err => {
        console.log(err.message)
    })

