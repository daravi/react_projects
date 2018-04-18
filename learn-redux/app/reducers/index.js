var moment = require('moment');

export var showCompletedReducer = (showCompleted = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !showCompleted;
    default:
      return showCompleted;
  }
};

export var searchTextReducer = (searchText = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return searchText;
  }
};

var nextTodoId = 0;
export var todosReducer = (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      var newTodo = {
        id: nextTodoId++,
        text: action.text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      };
      return [...todos, newTodo];
    case 'REMOVE_TODO':
      return todos.filter(todo => todo.id !== action.id);
    default:
      return todos;
  }
};

export var mapReducer = (map = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'STOP_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return map;
  }
};
