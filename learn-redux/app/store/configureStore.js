var redux = require('redux');
var thunk = require('redux-thunk').default;
var { showCompletedReducer, searchTextReducer, todosReducer, mapReducer } = require('./../reducers/index');

export var configure = () => {
  // -------------------------------
  // Combine reducers
  // -------------------------------
  var reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    searchText: searchTextReducer,
    todos: todosReducer,
    map: mapReducer,
  });

  // use redux.compose to add middleware functions to the redux application
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    // to keep the middleware process working we pass the argument through in the
    // case that our desired middleware (here devToolsExtension) does not exist
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

  return store;
};
