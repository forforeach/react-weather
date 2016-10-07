const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {title: 'Error'};
  },
  componentDidMount: function() {
    let {title, message} = this.props;
    let modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hallow" data-close="">Ok</button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
