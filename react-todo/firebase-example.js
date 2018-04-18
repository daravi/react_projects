import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8d0OJuWMPFQWgMIOvdjwDzxjFZpxxJcc",
    authDomain: "todo-app-badda.firebaseapp.com",
    databaseURL: "https://todo-app-badda.firebaseio.com",
    storageBucket: "todo-app-badda.appspot.com",
    messagingSenderId: "764312717977"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo Application',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
}).then(() => {
  console.log('set worked');
}, (e) => {
  console.log('set failed');
});

// to get reference to a child node
// firebase.child('app')

// like set, update returns a promise
firebaseRef.update({
  // multi path updates:
  'app/name': 'Todo App',
});

// setting value to null removes that data

// or remove data
// firebaseRef.remove();

firebaseRef.once('value').then((snapshot) => {
  // .val returns the object
  console.log('Got entire db ', snapshot.val());
}, (e) => {
  console.log('unable to fetch', e);
});

firebaseRef.on('value', (snapshot) => {
  console.log('Got value', snapshot.val());
})

// to turn off the listener
// firebaseRef.off(call_back);

firebaseRef.update({isRunning: false});

// firebaseRef.push.set
// firebaseRef.push
// firebaseRef.on('child_added', ...)
// firebaseRef.on('child_changed', ...)
// firebaseRef.on('child_removed', ...)

dps: {
  ts1: {data1},
  ts2: {data2},
  ts3: {data3},
  ts4: {data4},
  ts5: {data5},
  ts6: {data6},
  ts7: {data7},
  ts8: {data8},
}



























//dsa
