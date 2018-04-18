var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="Enter a todo item"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
