import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCClxKDTJY92FF9S2iPhK6jvoN9J-Ceegk',

  authDomain: 'rock-paper-scissors-dova.firebaseapp.com',

  projectId: 'rock-paper-scissors-dova',

  storageBucket: 'rock-paper-scissors-dova.appspot.com',

  messagingSenderId: '818936319831',

  appId: '1:818936319831:web:3c9c371d1a6ca1f5703812',

  measurementId: 'G-CYJPP4CXRV',
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
