import React from 'react';

// models
import Task from '../../models/Task';

// services
import TaskListProvider from '../../services/TaskListProvider';

// components
import TodoList from './TodoList';
import TodoListAddButton from './TodoListAddButton';

// styles
import './TodoListContainer.scss';

export default class TodoListContainer extends React.Component {
  static propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Task))
  };

  /**
   *
   * @param {Object} props
   * @param {Task[]} [props.tasks=[]]
   */
  constructor(props) {
    super(props);

    this.state = {
      tasks: props.data || TaskListProvider.get()
    };
  }

  /**
   *
   * @param {String} text
   */
  addTask(text) {
    let task = Task.create(text);

    TaskListProvider.add(task);

    this.setState((prevState) => ({
      tasks: prevState.tasks.concat([task])
    }));
  };

  /**
   *
   * @return {XML}
   */
  render() {
    return (
      <div className="todoList-container">
        <TodoList tasks={this.state.tasks}/>
        <TodoListAddButton onSubmit={this.addTask.bind(this)}/>
      </div>
    );
  }
}
