import firebase from  'firebase';
import "firebase/auth";
import "firebase/database";
import  "firebase/storage";





const firebaseConfig = {
    apiKey: "AIzaSyCAY-v_ClPNDTqCErUuDei-xqaNvTVbtBc",
    authDomain: "react-clone-test.firebaseapp.com",
    databaseURL: "https://react-clone-test.firebaseio.com",
    projectId: "react-clone-test",
    storageBucket: "react-clone-test.appspot.com",
    messagingSenderId: "1094375644488",
    appId: "1:1094375644488:web:9044ea5fc4390f69a5677d"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;