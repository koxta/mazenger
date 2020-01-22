import firebase from 'firebase'
import { User } from '../Models';

const firebaseConfig = {
  apiKey: "AIzaSyD2_gcmS4S_-RBPxdoEB0WjYuJmzpnZhGc",
  authDomain: "mazenger-61b9b.firebaseapp.com",
  databaseURL: "https://mazenger-61b9b.firebaseio.com",
  projectId: "mazenger-61b9b",
  storageBucket: "mazenger-61b9b.appspot.com",
  messagingSenderId: "862259651266",
  appId: "1:862259651266:web:1a920c8665fdb634e5915b"
};

class Firebase{
  constructor(){
    this.initialize();
    this.onAuthStateChange();
  }

  private database = () => {
    return firebase.database().ref('messages');
  }

  private initialize = () => {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
  }

  private onAuthStateChange = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(!user){
        firebase.auth().signInAnonymously();
      }
    })
  }

  send = ( message: string, user: User ) => {
    const messageObj = {
      'message': message,
      'uid': user.uid,
      'timeStamp': firebase.database.ServerValue.TIMESTAMP,
    }
    this.database().push(messageObj)
  }

  getMessages = (callback: Function ) => {
    this.database().on('child_added',(data)=>{
      console.log('cloud data',data.val());
      callback(data.val());
    })
  }

  userUid = () => {
    return firebase.auth().currentUser.uid;
  }
  
}

export default new Firebase();