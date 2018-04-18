import thunk from 'redux-thunk';
import * as redux from 'redux';

import { showCompletedReducer, searchTextReducer, todosReducer } from 'reducers';


export var configure = (initialState = {}) => {
  // -------------------------------
  // Combine reducers
  // -------------------------------
  var reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    searchText: searchTextReducer,
    todos: todosReducer,
  });

  // use redux.compose to add middleware functions to the redux application
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    // to keep the middleware process working we pass the argument through in the
    // case that our desired middleware (here devToolsExtension) does not exist
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

  return store;
};


// You could indeed do this. You would use set instead of push though. That would look a bit like this:
//
// firebaseRef.child("notes").child(customNoteId).set(dataVariable, callbackVariable);
// Here we se the id equal to the value of customNoteId by using the child method.
//
// - Andrew
