var React = require('react');

var WeatherMessage = ({city, temp}) => {
  return (
    <div>
      <h3 className="text-center">Temperature of {city} is {temp}!</h3>
    </div>
  );
}

module.exports = WeatherMessage;
