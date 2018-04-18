var moment = require('moment');
var uuid = require('uuid');

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

export var todosReducer = (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, action.todo];
    case 'ADD_TODOS':
      return [...todos, ...action.todos];
    case 'REMOVE_TODO':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return todos.map( todo =>
        todo.id === action.id ? {
          ...todo,
          completed: !todo.completed,
          completedAt: !todo.completed ? moment().unix() : undefined,
        } : todo
      );
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
