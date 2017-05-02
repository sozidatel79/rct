// HelloForm Component
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

// HelloMessage Component
var HelloMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name} !!!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

// Hello Component
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

ReactDOM.render(
    <Hello />,
    document.querySelector('#app')
);
