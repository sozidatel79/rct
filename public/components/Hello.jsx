var React = require('react');
var HelloMessage = require('./HelloMessage');
var HelloForm = require('./HelloForm');
var Hello = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is a default message!'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message,
        };
    },
    handleNewData: function (updates) {
        this.setState(updates);
    },
    render:function () {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <HelloMessage name={name} message={message} />
                <HelloForm onNewData={this.handleNewData} />
            </div>
        );
    }
});

module.exports = Hello;