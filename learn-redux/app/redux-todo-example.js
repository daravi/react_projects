var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('Starting redux todo example');

// Santiago Zach Hesun

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log(state);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else {
    document.getElementById('app').innerHTML = (
      '<a target="_blank" href="' + state.map.url + '">View Your Location</a>'
    );
  }
});
// unsubscribe();
store.dispatch(actions.fetchLocation());
store.dispatch(actions.toggleShowCompleted());
store.dispatch(actions.changeSearchText('NEWWW text!!'));
store.dispatch(actions.addTodo('DO IT!'));
store.dispatch(actions.addTodo('JUST DOO IT!!'));
store.dispatch(actions.removeTodo(0));
