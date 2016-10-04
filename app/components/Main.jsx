const React = require('react');
const Nav = require('Nav');

var Main = ({children}) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {children}
        </div>
      </div>

    </div>
  );
};

module.exports = Main;
