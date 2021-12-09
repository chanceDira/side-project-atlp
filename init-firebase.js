console.log("Initializing firebase");

const firebaseConfig = {
    apiKey: "AIzaSyC6vY1lIVmWuvISxHarnG-8mubPh5HSy_Q",
    authDomain: "andela-app.firebaseapp.com",
    projectId: "andela-app",
    storageBucket: "andela-app.appspot.com",
    messagingSenderId: "797870579968",
    appId: "1:797870579968:web:d431dc79e48ee4d05013e5"
  }; 

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.database();
  console.log(app.name);