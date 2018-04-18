import axios from 'axios';
import moment from 'moment';
import firebase, { firebaseRef } from 'firebaseAPI';

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
};

export var changeSearchText = (searchText) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    // ES6 feature, same as searchText: searchText
    searchText
  }
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var newTodo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(newTodo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...newTodo,
        id: todoRef.key
      }));
    });
  };
};

export var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

export var stopLocationFetch = (url) => {
  return {
    type: 'STOP_LOCATION_FETCH',
    url
  }
};

export var fetchLocation = () => {
  return (dispatch, getStore) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(
      res => {
        var loc = res.data.loc;
        var baseUrl = 'http://maps.google.com?q='

        dispatch(stopLocationFetch(baseUrl + loc));
      }, err => {
        console.log("Error!!");
        console.log(res);
        //
      });
  };
};
