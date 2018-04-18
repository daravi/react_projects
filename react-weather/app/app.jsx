var React = require('react');
var ReactDOM = require('react-dom');
// ES6 de-structuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// In general: var {var1, var2} = obj; is the same as var var1 = obj.var1 ,...
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      {/* if just / then render Weather */}
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
