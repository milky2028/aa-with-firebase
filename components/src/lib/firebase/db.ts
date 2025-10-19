import { initializeApp } from 'firebase/app';
import { getFirestore, collection, serverTimestamp, addDoc } from 'firebase/firestore/lite';

const CONFIG = {
  apiKey: 'AIzaSyDkRY5dlk-aBvDYpDkyvLLC8nPDxXt2C60',
  authDomain: 'adventure-academ-1501025774496.firebaseapp.com',
  databaseURL: 'https://adventure-academ-1501025774496.firebaseio.com',
  projectId: 'adventure-academ-1501025774496',
  storageBucket: 'adventure-academ-1501025774496.appspot.com',
  messagingSenderId: '784182344237',
  appId: '1:784182344237:web:bf4e47c2f7738f691516a4',
};

const app = initializeApp(CONFIG)
const db = getFirestore(app)
const tours = collection(db, 'tours')
const contact = collection(db, 'contactForms')

export { serverTimestamp, addDoc, tours, contact }