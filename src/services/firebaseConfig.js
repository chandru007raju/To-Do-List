import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyD42Lz30U9XjQIgCSRfCMheWH_vbr9EAWg",
   authDomain: "to-do-app-b3b72.firebaseapp.com",
   projectId: "to-do-app-b3b72",
   storageBucket: "to-do-app-b3b72.appspot.com",
   messagingSenderId: "662751962276",
   appId: "1:662751962276:web:098164cfa3e35076ccf231"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const store = fire.firestore()

export { auth, store, fire };
export default firebase