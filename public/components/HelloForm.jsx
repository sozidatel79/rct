var React = require('react');
var HelloForm = React.createClass({
    sayHello: function (el) {
        el.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.msg.value;
        var updates = {};
        if(name.length > 0){
            this.refs.name.value = '';
            updates.name = name;
        }
        if(message.length > 0){
            this.refs.msg.value = '';
            updates.message = message;
        }
        this.props.onNewData(updates);
    },
    render: function () {
        return(
            <form>
                <div>
                    <input placeholder="Enter Name" type="text" ref="name"/>
                </div>
                <br/>
                <div>
                    <textarea ref="msg" placeholder="Enter Message"  cols="22" rows="5"></textarea>
                </div>
                <button onClick={this.sayHello}>Set</button>
            </form>
        );
    }
});

module.exports = HelloForm;