import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyA8d0OJuWMPFQWgMIOvdjwDzxjFZpxxJcc",
    authDomain: "todo-app-badda.firebaseapp.com",
    databaseURL: "https://todo-app-badda.firebaseio.com",
    storageBucket: "todo-app-badda.appspot.com",
    messagingSenderId: "764312717977"
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();

export default firebase;


// You could indeed do this. You would use set instead of push though. That would look a bit like this:
//
// firebaseRef.child("notes").child(customNoteId).set(dataVariable, callbackVariable);
// Here we se the id equal to the value of customNoteId by using the child method.
//
// - Andrew
