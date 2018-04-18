var redux = require('redux');

console.log('Starting redux example');

// most applications require only one store
var reducer = (state = {name: 'Anonymous'}, action) => {
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);


// createStore needs a pure function as it's only argument:
// "reducer" takes state and action and generates new state
