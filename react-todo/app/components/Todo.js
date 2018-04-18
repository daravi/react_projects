var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

var actions = require('actions');

export const Todo = React.createClass({
  render: function () {
    var { id, text, completed, dispatch, createdAt, completedAt } = this.props
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created at ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed at ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
