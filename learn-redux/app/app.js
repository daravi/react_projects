var React    = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Components

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <h1>Testing</h1>,
//   document.getElementById('app')
// );

// require('./redux-example.js');
require('./redux-todo-example.js');
