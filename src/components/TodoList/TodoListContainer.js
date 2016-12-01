import React from 'react';

// models
import TaskList from '../../models/TaskList';
import Task from '../../models/Task';

// components
import TodoList from './TodoList';
import TodoListAddButton from './TodoListAddButton';

// styles
import './TodoListContainer.scss';

export default class TodoListContainer extends React.Component {
  static propTypes = {
    taskList: React.PropTypes.instanceOf(TaskList).isRequired
  };

  /**
   *
   * @param {Object} props
   * @param {TaskList} [props.taskList]
   */
  constructor(props) {
    super(props);

    this.state = {
      taskList: props.taskList
    };
  }

  /**
   *
   * @param {String} text
   */
  addTask(text) {
    let task = Task.create(text);

    this.setState((prevState) => {
      return {
        taskList: prevState.taskList.add(task)
      }
    });
  };

  /**
   *
   * @param {String} task
   */
  removeTask(task) {
    this.setState((prevState) => {
      return {
        taskList: prevState.taskList.removeById(task.id)
      }
    });
  };

  /**
   *
   * @return {XML}
   */
  render() {
    return (
      <div className="todoList-container">
        <TodoListAddButton onSubmit={this.addTask.bind(this)}/>
        <TodoList taskList={this.state.taskList} onRemove={this.removeTask.bind(this)}/>
      </div>
    );
  }
}
