var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/Hello');
var obj1 = {
    name:'Anton',
    age:37
}
var obj2 = {
    sity:'Holon',
    street:'Hageonim',
    ...obj1
}

console.log(obj2);
ReactDOM.render(
    <Hello/>,
    document.querySelector('#app')
);
