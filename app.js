  
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
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
  console.log(token);

  messaging.subscribeToTopic(token, "ok")
  .then(function(response) {
    // See the MessagingTopicManagementResponse reference documentation
    // for the contents of response.
    console.log('Successfully subscribed to topic:', response);
  })
  .catch(function(error) {
    console.log('Error subscribing to topic:', error);
  });

  })
.catch(function(err) {
  console.log('Permission denied', err);
});


messaging.onMessage(function(payload){
console.log('onMessage: ',payload);
alert("ok");
});
