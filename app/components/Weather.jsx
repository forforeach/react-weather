const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {isLoading: false};
  },
  handleSeacrh: function(location) {
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({location, temp, isLoading: false});
    }, (err) => {
      this.setState({temp: '', location: '', isLoading: false});
      alert(err);
    });
  },
  render: function() {
    let {temp, location, isLoading} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSeacrh}/> {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
