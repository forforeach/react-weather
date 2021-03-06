const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {isLoading: false, errorMessage: undefined};
  },
  searchByQueryString: function(location) {
    if (location && location.length > 0) {
      this.handleSeacrh(location);
      window.location.hash = '#/';
    }
  },
  componentDidMount: function() {
    let location = this.props.location.query.location;
    this.searchByQueryString(location);
  },
  componentWillReceiveProps: function(newProps) {
    let location = newProps.location.query.location;
    this.searchByQueryString(location);
  },
  handleSeacrh: function(location) {
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({location, temp, isLoading: false, errorMessage: undefined});
    }, (err) => {
      this.setState({errorMessage: err.message, isLoading: false, location: undefined, temp: undefined});
    });
  },
  render: function() {
    let {temp, location, isLoading, errorMessage} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderErrorModal() {
      if (errorMessage) {
        return <ErrorModal message={errorMessage}/>
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSeacrh}/> {renderMessage()}
        {renderErrorModal()}
      </div>
    );
  }
});

module.exports = Weather;
