import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBgvDNQn6j5mrAkgkZk67ggsQqyYOUWffc',

  authDomain: 'dova-rock-paper-scissors-db.firebaseapp.com',

  projectId: 'dova-rock-paper-scissors-db',

  storageBucket: 'dova-rock-paper-scissors-db.appspot.com',

  messagingSenderId: '840344218305',

  appId: '1:840344218305:web:7d3a4d8c380689d530c240',

  measurementId: 'G-7WWDKJ4G3X',
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
