importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBPS1xpjcADSIRYVYvB2_Xhm9_-iWfpDUc",
    authDomain: "newspaper-afc22.firebaseapp.com",
    databaseURL: "https://newspaper-afc22.firebaseio.com",
    projectId: "newspaper-afc22",
    storageBucket: "newspaper-afc22.appspot.com",
    messagingSenderId: "240619390687"
  };

  firebase.initializeApp(config);
  const messaging = firebase.messaging();
