const React = require('react');
const {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    let location = this.refs.location.value;
    if(location.length > 0){
      let encodedLocation = encodeURIComponent(location);
      this.refs.location.value = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather App</li>
            <li>
              <IndexLink to="/" activeClass="active" activeStyle={{
                fontWeight: 'bold'
              }}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClass="active" activeStyle={{
                fontWeight: 'bold'
              }}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClass="active" activeStyle={{
                fontWeight: 'bold'
              }}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="location" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
