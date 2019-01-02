import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyASYsGcrUtnb4PI8-H61VMeNfGzf0NL1bE',
  authDomain: 'polling-app-42c07.firebaseapp.com',
  databaseURL: 'https://polling-app-42c07.firebaseio.com',
  projectId: 'polling-app-42c07',
  storageBucket: 'polling-app-42c07.appspot.com',
  messagingSenderId: '645845433547',
}

class Firebase {
  constructor() {
    firebase.initializeApp(config)
    this.store = firebase.firestore
    this.auth = firebase.auth
  }

  get polls() {
    return this.store().collection('polls')
  }
}

export default new Firebase()
