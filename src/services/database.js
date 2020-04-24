import store from '@/store';
import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC8vf5nkhUpevDoqjVxfI53nAoHDW1OEnU",
  authDomain: "leetealgo-592d6.firebaseapp.com",
  databaseURL: "https://leetealgo-592d6.firebaseio.com",
  projectId: "leetealgo-592d6",
  storageBucket: "leetealgo-592d6.appspot.com",
  messagingSenderId: "258861737860",
  appId: "1:258861737860:web:e3159f04221a43ad201fd1",
  measurementId: "G-8RS8EPQ3BK"
};


// Initialize Firebase
const database = firebase.initializeApp(firebaseConfig);

database.signUp = async (email, password) =>{
    try{
      await firebase.auth().createUserWithEmailAndPassword(email,password)

      store.commit('setCurrentUser', firebase.auth().currentUser)

      return true
    }catch(error){
        return error
    }
}

database.signIn = async (email, password) =>{
  try{
    await firebase.auth().signInWithEmailAndPassword(email,password)

    store.commit('setCurrentUser', firebase.auth().currentUser)

    return true
  }catch(error){
      return error
  }
}

database.signOut = async () =>{
    try{
      await firebase.auth().signOut()

      store.commit('setCurrentUser', null)

      return true
    }catch(error){
        return error
    }
}
export default database