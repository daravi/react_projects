var axios = require('axios');

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

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
};

export var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
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
        console.log("All good!!");
        console.log("res is", res);
        console.log("res.data is", res.data);
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
