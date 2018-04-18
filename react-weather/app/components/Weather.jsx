const React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      loading: false,
    };
  },
  handleNewQuery: function (query) {
    this.setState({
      loading: true,
      errorMessage: undefined,
      city: undefined,
      temp: undefined
    });

    var that = this;

    openWeatherMap.getTemp(query).then(
      (temp) => {
        this.setState({
          city: query,
          temp: temp,
          loading: false,
          errorMessage: undefined,
        });
      }, (error) => {
        this.setState({
          temp: undefined,
          loading: false,
          errorMessage: error.message
        });
      });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleNewQuery(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0 && location !== this.props.city) {
      this.handleNewQuery(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {city, temp, loading, errorMessage} = this.state;

    function renderMessage () {
      if (loading) {
        return <h3 className="text-center">Getting weather data...</h3>;
      } else if (city && temp && !errorMessage) {
        return <WeatherMessage city={city} temp={temp}/>;
      } else if (errorMessage) {
        return <ErrorModal errorMessage={errorMessage}/>
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onNewQuery={this.handleNewQuery}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
