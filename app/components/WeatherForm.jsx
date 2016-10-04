const React = require('react');

var WeatherForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    let location = this.refs.location.value;
    if (location && location.length > 0) {
      this.props.onSearch(location);
      this.refs.location.value = '';
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="location" placeholder="Enter location name"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
