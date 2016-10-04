const React = require('react');

var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    let {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hallow" data-close="">Ok</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
