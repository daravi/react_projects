var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var query = this.refs.query.value;

    if (query.length > 0) {
      this.refs.query.value = '';
      this.props.onNewQuery(query);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="search" placeholder="Enter city name" ref="query"/>
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
