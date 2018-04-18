const React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
        <p>This app was developed using the React library. You can find the repository on GitHub.
          The app was developed using the openWeatherMap API.</p>
        <ol>
          <li>
            <a href="https://github.com/daravi/react-weather">GitHub repository</a>
          </li>
          <li>
            <a href="http://openweathermap.org/">openWeatherMap</a>
          </li>
        </ol>
    </div>
  );
}

module.exports = About;
