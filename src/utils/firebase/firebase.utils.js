import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection, //to get a collection reference
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAb1YBHoddNS3x4Nab_YTOPPzFwUwr5h6s",
    authDomain: "clothing-db-a636d.firebaseapp.com",
    projectId: "clothing-db-a636d",
    storageBucket: "clothing-db-a636d.appspot.com",
    messagingSenderId: "808787341463",
    appId: "1:808787341463:web:b6c473dcbf2e43895eb9d2"
};
  
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

//singleton
export const auth = getAuth();

//This also creates a user authentication in your firestore. So when you do sign-in with google, it also creates a user so is like sign-up
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

/**
 * Adds collection and documents in a transaction using writeBatch.
 * 
 * @param {*} collectionKey
 * @param {*} objectsToAdd 
 */
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);

    //writeBatch uses a transaction
    const batch = writeBatch(db);
    
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase()); //collectionRef already contains the db object and the collection's name
        batch.set(docRef, object);
    });

    //this is going to execute all the db writes in a transaction
    await batch.commit();
}

/**
 * 
 * @returns the categoryMap
 */
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    
    //convert an array of object into one object which is a map of key => items. Ex: key is 'hats' => array, 'jackets' => array
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});

    return categoryMap; 
}


//since you call this from sign-in and sign-up. When you are doing the latter, you pass additionalInformation (displayName)
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  //it does update the user, it only creates or returns the existing user
  //So ex: if you have a page where the user can change user fields, this method won't update that user
  //and the authChangeListener will get trigger

  return userDocRef;
};

/**
 * 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

//listener
export const onAuthStateChangedListener = (callback) =>  {
    onAuthStateChanged(auth, callback);
}