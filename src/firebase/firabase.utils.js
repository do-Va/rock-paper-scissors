import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDxzKFVsvvxCksdFpl8LGSwyUm-XOLXqjc',
  authDomain: 'rock-paper-scissors-db-00.firebaseapp.com',
  projectId: 'rock-paper-scissors-db-00',
  storageBucket: 'rock-paper-scissors-db-00.appspot.com',
  messagingSenderId: '3807200194',
  appId: '1:3807200194:web:8b7d1a32cdd609bd150c5b',
  measurementId: 'G-NY60HBH4JH',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
        score: 1500,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const updatedScore = currentUser => {
  if (currentUser !== null) {
    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.id)
      .update({
        score: `${currentUser.score}`,
      });
  }
};

export const getAllUsers = () => {
  let users = [];

  firebase
    .firestore()
    .collection('users')
    .onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        users.push({ name: doc.data().displayName, score: doc.data().score });
      });
    });

  return users;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
